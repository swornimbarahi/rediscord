import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import Routes from "./routes";

import TitleBar from "./components/TitleBar";

import "./App.scss";

import AuthContext, { AuthContextType } from "./contexts/AuthContext";
import RouteContext from "./contexts/RouteContext";

const App: FunctionComponent = () => {
	const [userState, setUserState] = useState({
		loggedIn: false,
		token: null,
		email: null,
		username: null,
	});

	const [route, setRoute] = useState("/");

	useEffect(() => {
		console.log(route);
	});

	useEffect(() => {
		if (userState.loggedIn !== Routes[route].privateRoute) {
			if (userState.loggedIn) {
				setRoute("/messages");
			} else {
				setRoute("/");
			}
		}
	}, [userState.loggedIn, route]);

	useEffect(() => {
		const userExists = sessionStorage.getItem("user");
		if (userExists) {
			setUserState(JSON.parse(userExists));
		}
  }, []);
  
	return (
		<AuthContext.Provider value={{ userState, setUserState }}>
			<RouteContext.Provider value={{ route, setRoute }}>
				<div
					className={classnames(["App", !userState.loggedIn && "App--no-auth"])}
				>
					<TitleBar transparent={userState.loggedIn} />
					<div className="AppBody">{Routes[route].component}</div>
				</div>
			</RouteContext.Provider>
		</AuthContext.Provider>
	);
};

export default App;

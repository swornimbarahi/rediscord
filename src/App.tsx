import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import Routes from "./routes";

import TitleBar from "./components/TitleBar";

import "./App.scss";

import AuthContext from "./contexts/AuthContext";
import RouteContext from "./contexts/RouteContext";
import ServerContext from "./contexts/ServerContext";

const App: FunctionComponent = () => {
	const [userState, setUserState] = useState({
		loggedIn: false,
		token: null,
		email: null,
		username: null,
	});

	const [route, setRoute] = useState("/");

	const [selectedServer, setSelectedServer] = useState("");

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
		console.log(selectedServer);
	}, [selectedServer]);

	useEffect(() => {
		const userExists = sessionStorage.getItem("user");
		if (userExists) {
			setUserState(JSON.parse(userExists));
		}
	}, []);

	return (
		<AuthContext.Provider value={{ userState, setUserState }}>
			<RouteContext.Provider value={{ route, setRoute }}>
				<ServerContext.Provider value={{ selectedServer, setSelectedServer }}>
					<div
						className={classnames([
							"App",
							!userState.loggedIn && "App--no-auth",
						])}
					>
						<TitleBar transparent={userState.loggedIn} />
						<div className="AppBody">{Routes[route].component}</div>
					</div>
				</ServerContext.Provider>
			</RouteContext.Provider>
		</AuthContext.Provider>
	);
};

export default App;

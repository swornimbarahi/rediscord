import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import Routes from "./routes";

import TitleBar from "./components/TitleBar";

import "./App.scss";

import AuthContext from "./contexts/AuthContext";
import RouteContext from "./contexts/RouteContext";

const App: FunctionComponent = () => {
	const [userState, setUserState] = useState({
		loggedIn: false,
		token: null,
		email: null,
		username: null
	});

	const [route, setRoute] = useState("/");

	useEffect(() => {
		console.log(route);
	});

	useEffect(() => {
    if (userState.loggedIn !== Routes[route].privateRoute){
      if (userState.loggedIn) {
        setRoute("/asdf");
      } else {
        setRoute("/");
        console.log(Routes[route]);
      }
    }
    
	}, [userState.loggedIn, route]);

	return (
		<AuthContext.Provider value={{ userState, setUserState }}>
			<RouteContext.Provider value={{ route, setRoute }}>
				<div className={classnames(["App", "App--no-auth"])}>
					<TitleBar transparent={true} />
					<div className="AppBody">{Routes[route].component}</div>
				</div>
			</RouteContext.Provider>
		</AuthContext.Provider>
	);
};

export default App;

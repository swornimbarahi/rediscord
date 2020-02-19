import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import TitleBar from "./components/TitleBar";

import "./App.scss";

import AuthContext from "./contexts/AuthContext";
import Routes from "./routes";
import IntelligentRoute from "./components/IntelligentRoute";

const App: FunctionComponent = () => {
	const [state, setState] = useState({
		loggedIn: false,
		token: null,
		email: null,
		username: null
	});

	useEffect(() => {
		console.log(state);
	});

	return (
		<AuthContext.Provider value={{ state, setState }}>
			<Router>
				<Switch>
					<div className={classnames(["App", "App--no-auth"])}>
						<TitleBar transparent={true} />
						<div className="AppBody">
							{Routes.map(route => (
								<IntelligentRoute {...route} />
							))}
						</div>
					</div>
				</Switch>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;

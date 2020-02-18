import React from "react";
import classnames from "classnames";

import TitleBar from "./components/TitleBar";

import "./App.scss";
import AuthPage from "./pages/AuthPage";

function App() {
	return (
		<div className={classnames(["App", "App--no-auth"])}>
			<TitleBar transparent={true} />
			<div className="AppBody">
				<AuthPage />
			</div>
		</div>
	);
}

export default App;

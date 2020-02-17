import React from "react";

import TitleBar from "./components/TitleBar";

import "./App.css";
import AuthPage from "./pages/AuthPage";

function App() {
	return (
		<div className="App">
			<TitleBar />
			<div className="AppBody">
				<AuthPage />
			</div>
		</div>
	);
}

export default App;

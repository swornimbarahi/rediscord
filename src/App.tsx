import React from "react";

import TitleBar from "./components/TitleBar";

import "./App.css";
import InputBlock from "./components/InputBlock";
import AuthFormContainer from "./components/AuthFormContainer";

function App() {
	return (
		<div className="App">
			<TitleBar />
			<div className="AppBody">
				<AuthFormContainer>
					<InputBlock
						label="Email"
						type="email"
						onChange={(v: React.ChangeEvent<HTMLInputElement>) =>
							console.log(v)
            }
            validation={false}
            validationMessage=" - Not a well formed email address."
					/>
					<InputBlock
						label="Password"
						type="password"
						onChange={(v: React.ChangeEvent<HTMLInputElement>) =>
							console.log(v)
						}
					/>
				</AuthFormContainer>
			</div>
		</div>
	);
}

export default App;

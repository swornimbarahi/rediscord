import React, { FunctionComponent, useState } from "react";
import AuthFormContainer from "../AuthFormContainer";
import InputBlock from "../InputBlock";
import AuthButton from "../AuthButton";

import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import styles from "./index.module.scss";

type LoginProps = {
	changePage: Function;
	login: Function;
};

const Login: FunctionComponent<LoginProps> = props => {
	const { changePage } = props;

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const submitHandler = () => {
		props.login({
			email,
			password
		});
	};

	return (
		<AuthFormContainer
			title={"Welcome Back!"}
			subtitle={"We're so excited to see you again!"}
		>
			<InputBlock
				label="Email"
				type="email"
				onChange={(v: string) => {
					setEmail(v);
				}}
				value={email}
				validation={true}
				validationMessage=" - Not a well formed email address."
			/>
			<InputBlock
				label="Password"
				type="password"
				onChange={(v: string) => {
					setPassword(v);
				}}
				value={password}
				validation={true}
				validationMessage=" - Not a valid password."
			/>
			<div className={styles["forgot-password"]}>
				<span>Forgot your password?</span>
			</div>
			<AuthButton
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();
					submitHandler();
				}}
			>
				<span>Login</span>
			</AuthButton>
			<div className={styles["need-account"]}>
				Need an account? <span onClick={() => changePage()}>Register.</span>
			</div>
		</AuthFormContainer>
	);
};

const mapDispatchToProps = (dispatch: Function) => {
	return {
		login: (credentials: any) => dispatch(login(credentials))
	};
};

export default connect(null, mapDispatchToProps)(Login);

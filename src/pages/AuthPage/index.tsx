import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";

import AuthFormContainer from "../../components/AuthFormContainer";
import InputBlock from "../../components/InputBlock";

import styles from "./index.module.scss";
import AuthButton from "../../components/AuthButton";

const AuthPage: FunctionComponent = () => {
	const [fpage, setFpage] = useState<boolean>(true);

	const changePage = () => {
		setFpage(!fpage);
	};

	return (
		<div className={classnames(styles["login-background"])}>
			{fpage ? (
				<Login changePage={changePage} />
			) : (
				<Register changePage={changePage} />
			)}
		</div>
	);
};

type LoginProps = {
	changePage: Function;
};

type RegisterProps = {
	changePage: Function;
};

const Login: FunctionComponent<LoginProps> = props => {
	const { changePage } = props;

	return (
		<AuthFormContainer
			title={"Welcome Back!"}
			subtitle={"We're so excited to see you again!"}
		>
			<InputBlock
				label="Email"
				type="email"
				onChange={(v: React.ChangeEvent<HTMLInputElement>) => console.log(v)}
				validation={true}
				validationMessage=" - Not a well formed email address."
			/>
			<InputBlock
				label="Password"
				type="password"
				onChange={(v: React.ChangeEvent<HTMLInputElement>) => console.log(v)}
			/>
			<div className={styles["forgot-password"]}>
				<span>Forgot your password?</span>
			</div>
			<AuthButton onClick={(e: React.MouseEvent) => e.preventDefault()}>
				<span>Login</span>
			</AuthButton>
			<div className={styles["need-account"]}>
				Need an account? <span onClick={() => changePage()}>Register.</span>
			</div>
		</AuthFormContainer>
	);
};

const Register: FunctionComponent<RegisterProps> = props => {
	const { changePage } = props;

	return (
		<AuthFormContainer
			title={"Create an account"}
		>
			<InputBlock
				label="Email"
				type="email"
				onChange={(v: React.ChangeEvent<HTMLInputElement>) => console.log(v)}
				validation={true}
				validationMessage=" - Not a well formed email address."
			/>
			<InputBlock
				label="Username"
				type="text"
				onChange={(v: React.ChangeEvent<HTMLInputElement>) => console.log(v)}
			/>
			<InputBlock
				label="Password"
				type="password"
				onChange={(v: React.ChangeEvent<HTMLInputElement>) => console.log(v)}
			/>
			<div className={styles["forgot-password"]}>
				<span onClick={() => changePage()}>Already have an account?</span>
			</div>
			<AuthButton onClick={(e: React.MouseEvent) => e.preventDefault()}>
				<span>Continue</span>
			</AuthButton>
		</AuthFormContainer>
	);
};

export default AuthPage;

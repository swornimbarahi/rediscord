import React, {
	FunctionComponent,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";
import AuthFormContainer from "../AuthFormContainer";
import InputBlock from "../InputBlock";
import AuthButton from "../AuthButton";
import axios from "axios";
import AuthContext, { AuthContextType } from "../../contexts/AuthContext";

import styles from "./index.module.scss";

type LoginProps = {
	changePage: Function;
};

const Login: FunctionComponent<LoginProps> = (props) => {
	const { changePage } = props;

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	let { setUserState } = useContext(AuthContext) as {
		setUserState: Dispatch<SetStateAction<AuthContextType>>;
	};

	const submitHandler = async () => {
		const response = await axios.post(
			"http://www.localhost:3001/api/user/login",
			{
				email,
				password,
			}
		);

		if (response.data.token) {
			setUserState({
				loggedIn: true,
				...response.data,
			});
			sessionStorage.setItem("user", JSON.stringify({
				loggedIn: true,
				...response.data,
			}));
		}
	};

	return (
		<AuthFormContainer
			title={"Welcome Back!"}
			subtitle={"We're so excited to see you again!"}
		>
			<form onSubmit={submitHandler}>
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
			</form>
			<div className={styles["need-account"]}>
				Need an account? <span onClick={() => changePage()}>Register.</span>
			</div>
		</AuthFormContainer>
	);
};

export default Login;

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
import AuthContext, { AuthContextType } from "../../contexts/AuthContext";
import axios from "axios";

import styles from "./index.module.scss";

type RegisterProps = {
	changePage: Function;
};

const Register: FunctionComponent<RegisterProps> = (props) => {
	const { changePage } = props;

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [username, setUsername] = useState<string>("");

	let { setUserState } = useContext(AuthContext) as {
		setUserState: Dispatch<SetStateAction<AuthContextType>>;
	};

	const submitHandler = async () => {
		const response = await axios.post(
			"http://www.localhost:3001/api/user/register",
			{
				email,
				password,
				username,
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
		<AuthFormContainer title={"Create an account"}>
			<form onSubmit={submitHandler}>
				<InputBlock
					label="Email"
					type="email"
					onChange={(v: string) => setEmail(v)}
					value={email}
					validation={true}
					validationMessage=" - Not a well formed email address."
				/>
				<InputBlock
					label="Username"
					type="text"
					value={username}
					onChange={(v: string) => setUsername(v)}
				/>
				<InputBlock
					label="Password"
					type="password"
					value={password}
					onChange={(v: string) => setPassword(v)}
				/>
				<div className={styles["forgot-password"]}>
					<span onClick={() => changePage()}>Already have an account?</span>
				</div>
				<AuthButton
					onClick={(e: React.MouseEvent) => {
						e.preventDefault();
						submitHandler();
					}}
				>
					<span>Continue</span>
				</AuthButton>
			</form>
		</AuthFormContainer>
	);
};

export default Register;

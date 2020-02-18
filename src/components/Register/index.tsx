import React, {FunctionComponent, useState} from "react";
import AuthFormContainer from "../AuthFormContainer";
import InputBlock from "../InputBlock";
import AuthButton from "../AuthButton";

import styles from "./index.module.scss";

type RegisterProps = {
	changePage: Function;
};

const Register: FunctionComponent<RegisterProps> = props => {
  const { changePage } = props;
  
  const [email, setEmail] = useState<string>("");

	return (
		<AuthFormContainer
			title={"Create an account"}
		>
			<InputBlock
				label="Email"
				type="email"
        onChange={(v: string) => console.log(v)}
        value={email}
				validation={true}
				validationMessage=" - Not a well formed email address."
			/>
			<InputBlock
				label="Username"
        type="text"
        value={email}
				onChange={(v: string) => console.log(v)}
			/>
			<InputBlock
				label="Password"
        type="password"
        value={email}
				onChange={(v: string) => console.log(v)}
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

export default Register;
import React, { FunctionComponent, ReactNode } from "react";

import styles from "./index.module.scss";

type AuthButtonProps = {
	children: ReactNode | ReactNode[];
	onClick: Function;
};

const AuthButton: FunctionComponent<AuthButtonProps> = props => {
	const { children, onClick } = props;

	return (
		<button className={styles["auth-button"]} onClick={e => onClick(e)}>
			{children}
		</button>
	);
};

export default AuthButton;

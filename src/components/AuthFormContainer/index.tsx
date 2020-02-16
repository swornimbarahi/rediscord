import React, { FunctionComponent, ReactNode } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

type AuthFormContainerProps = {
	children: ReactNode[];
	expanded?: boolean;
};

const AuthFormContainer: FunctionComponent<AuthFormContainerProps> = props => {
	const { children, expanded = false } = props;

	return (
		<div
			className={classnames([
				styles["form-container"],
				expanded && styles["form-container--expanded"]
			])}
		>
			{children}
		</div>
	);
};

export default AuthFormContainer;

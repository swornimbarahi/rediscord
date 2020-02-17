import React, { FunctionComponent, ReactNode } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

type AuthFormContainerProps = {
	children: ReactNode[];
  expanded?: boolean;
  title: String;
  subtitle: String;
};

const AuthFormContainer: FunctionComponent<AuthFormContainerProps> = props => {
	const { children, expanded = false, title = "", subtitle = "" } = props;

	return (
    <div className={styles["auth-form"]}>
		<div
			className={classnames([
				styles["form-container"],
				expanded && styles["form-container--expanded"]
			])}
		>
      <div className={styles["form-title"]}>
        {title}
      </div>
      <div className={styles["form-sub-title"]}>
        {subtitle}
      </div>
			{children}
		</div>
    </div>
	);
};

export default AuthFormContainer;

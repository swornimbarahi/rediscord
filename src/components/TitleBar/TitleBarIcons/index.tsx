import React, { FunctionComponent } from "react";

import styles from "./index.module.scss";

export const Minimize: FunctionComponent = () => {
	return (
		<svg
			name="TitleBarMinimize"
			aria-hidden="false"
			width="12"
			height="12"
			viewBox="0 0 12 12"
			className={styles["white-icon"]}
		>
			<rect fill="currentColor" width="10" height="1" x="1" y="6"></rect>
		</svg>
	);
};

export const Maximize: FunctionComponent = () => {
	return (
		<svg
			name="TitleBarMaximize"
			aria-hidden="false"
			width="12"
			height="12"
			viewBox="0 0 12 12"
			className={styles["white-icon"]}
		>
			<rect
				width="9"
				height="9"
				x="1.5"
				y="1.5"
				fill="none"
				stroke="currentColor"
			></rect>
		</svg>
	);
};

export const Cross: FunctionComponent = () => {
	return (
		<svg
			name="TitleBarClose"
			aria-hidden="false"
			width="12"
			height="12"
			viewBox="0 0 12 12"
			className={styles["white-icon"]}
		>
			<polygon
				fill="currentColor"
				fillRule="evenodd"
				points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
			></polygon>
		</svg>
	);
};

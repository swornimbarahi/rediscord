import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

type InputBlockPropType = {
	label: String;
	type?: "text" | "email" | "password";
	onChange?: Function;
	validation?: boolean;
	validationMessage?: String;
};

const InputBlock: FunctionComponent<InputBlockPropType> = props => {
	const {
		label,
		type = "text",
		onChange = (v: React.ChangeEvent<HTMLInputElement>) => {
			return v;
		},
		validation = true,
		validationMessage = ""
	} = props;

	const [val, setVal] = useState();

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setVal(e.currentTarget.value);
		onChange(val);
	};

	return (
		<div className={styles["input-container"]}>
			<div
				className={classnames([
					styles["label-container"],
					!validation && styles["label-container--error"]
				])}
			>
				{label}
				<span className={styles["error-message"]}>
					{!validation && validationMessage}
				</span>
			</div>
			<input
				className={classnames([
					styles["input-element"],
					!validation && styles["input-element--error"]
				])}
				type={type}
				value={val}
				onChange={e => changeHandler(e)}
			/>
		</div>
	);
};

export default InputBlock;

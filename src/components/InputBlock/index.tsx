import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

type InputBlockPropType = {
	label: String;
	type?: "text" | "email" | "password";
	onChange?: Function;
};

const InputBlock: FunctionComponent<InputBlockPropType> = props => {
	const {
		label,
		type = "text",
		onChange = (v: React.ChangeEvent<HTMLInputElement>) => {
			return v;
		}
	} = props;

	const [val, setVal] = useState();

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setVal(e.currentTarget.value);
		onChange(val);
	};

	return (
		<div className={styles["input-container"]}>
			<div className={styles["label-container"]}>{label}</div>
			<input
				className={styles["input-element"]}
				type={type}
				value={val}
				onChange={e => changeHandler(e)}
			/>
		</div>
	);
};

export default InputBlock;

import React, { FunctionComponent } from "react";
import classnames from "classnames";

import Minimize from "../../assets/titlebar/minimize.png";
import Maximize from "../../assets/titlebar/maximize.png";
import Close from "../../assets/titlebar/close.png";

import styles from "./index.module.scss";

// @ts-ignore
const electron = window.require("electron");

const TitleBar: FunctionComponent = () => {
	return (
		<div className={styles["title-bar"]}>
			<div className={styles["title-container"]}>Discord</div>
			<div className={styles["title-action-container"]}>
				<div className={styles["title-icon-container"]}>
					<img src={Minimize} alt="" className={styles["title-icon"]} />
				</div>
				<div className={styles["title-icon-container"]}>
					<img src={Maximize} alt="" className={styles["title-icon"]} />
				</div>
				<div
					className={classnames(
						styles["title-icon-container"],
						styles["close-icon-container"]
					)}
				>
					<img src={Close} alt="" className={styles["title-icon"]} />
				</div>
			</div>
		</div>
	);
};

export default TitleBar;

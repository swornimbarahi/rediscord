import React, { FunctionComponent } from "react";
import classnames from "classnames";

import {Minimize, Maximize, Cross} from "./TitleBarIcons";

import styles from "./index.module.scss";

// @ts-ignore
const electron = window.require("electron");

type TitleBarProps = {
	transparent: boolean;
};

const TitleBar: FunctionComponent<TitleBarProps> = props => {
	const { transparent } = props;

	return (
		<div
			className={classnames([
				styles["title-bar"],
        transparent && styles["title-bar--transparent"],
        transparent && styles["title-bar--color"],
			])}
		>
			<div className={styles["title-container"]}>Discord</div>
			<div className={styles["title-action-container"]}>
				<div
					className={styles["title-icon-container"]}
					onClick={() => {
						electron.remote.getCurrentWindow().minimize();
					}}
				>
          <Minimize />
				</div>
				<div
					className={styles["title-icon-container"]}
					onClick={() => {
						const currWindow = electron.remote.getCurrentWindow();
						if (currWindow.isMaximized()) currWindow.unmaximize();
						else currWindow.maximize();
					}}
				>
					<Maximize />
				</div>
				<div
					className={classnames(
						styles["title-icon-container"],
						styles["close-icon-container"]
					)}
					onClick={() => {
						window.close();
					}}
				>
					<Cross />
				</div>
			</div>
		</div>
	);
};

export default TitleBar;

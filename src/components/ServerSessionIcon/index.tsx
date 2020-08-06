import React, { FunctionComponent } from "react";
import classnames from "classnames";
import styles from "./index.module.scss";

export interface ChatSessionPropType {
	icon: string | null;
	serverId: string;
	serverTitle: string;
	selected: boolean;
}

const ServerSessionIcon: FunctionComponent<ChatSessionPropType> = (props) => {
	const { icon, serverId, serverTitle, selected } = props;
	return (
		<div key={serverId} className={styles["server-icon-super-container"]}>
			<div
				className={classnames(
					styles["server-icon--hover"],
					styles["server-icon--hover-unread"],
					selected && styles["server-icon--selected"]
				)}
			/>
			{icon ? (
				<img className={styles["server-icon-container"]} src={icon} alt="" />
			) : (
				<span>{serverTitle[0].toUpperCase()}</span>
			)}
			<div className={styles["server-name--tooltip"]}>{serverTitle}</div>
		</div>
	);
};

export default ServerSessionIcon;

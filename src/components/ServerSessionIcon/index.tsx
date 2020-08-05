import React, { FunctionComponent } from "react";

import styles from "./index.module.scss";

export interface ChatSessionPropType {
	icon: string | null;
	server_id: string;
  server_title: string;
  selected: boolean;
}

const ServerSessionIcon: FunctionComponent<ChatSessionPropType> = (props) => {
	const { icon, server_id, server_title, selected } = props;
	return (
		<div key={server_id} className={styles["menu-icon-super-container"]}>
			{icon ? (
				<img src={icon} alt="" />
			) : (
				<span>{server_title[0].toUpperCase()}</span>
			)}
		</div>
	);
};

export default ServerSessionIcon;

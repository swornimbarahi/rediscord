import React, { FunctionComponent, useContext } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";
import ServerSessionIcon from "../ServerSessionIcon";
const ServerBar: FunctionComponent = () => {
	return (
		<div className={classnames(styles["serverbar-container"])}>
			<ServerSessionIcon
				icon={"https://simpleicons.org/icons/sass.svg"}
				unread
				serverId={"1"}
				serverTitle={"NT"}
			/>
			<ServerSessionIcon
				icon={
					"https://i.etsystatic.com/15492164/r/il/f5dd76/1922065802/il_570xN.1922065802_pf0n.jpg"
				}
				serverId={"2"}
				serverTitle={"NT"}
				unread
			/>
			<ServerSessionIcon
				icon={"https://simpleicons.org/icons/sass.svg"}
				unread={false}
				serverId={"3"}
				serverTitle={"NT"}
			/>
		</div>
	);
};

export default ServerBar;

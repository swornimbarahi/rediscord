import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";
import ServerSessionIcon from "../ServerSessionIcon";

const ServerBar: FunctionComponent = () => {
	return (
		<div className={classnames(styles["serverbar-container"])}>
			<ServerSessionIcon
				icon={"https://simpleicons.org/icons/sass.svg"}
				selected
				serverId={"1234"}
				serverTitle={"NT"}
			/>
      <ServerSessionIcon
				icon={"https://simpleicons.org/icons/sass.svg"}
				selected={false}
				serverId={"1234"}
				serverTitle={"NT"}
			/>
      <ServerSessionIcon
        icon={"https://simpleicons.org/icons/sass.svg"}
        selected={false}
				serverId={"1234"}
				serverTitle={"NT"}
			/>
		</div>
	);
};

export default ServerBar;

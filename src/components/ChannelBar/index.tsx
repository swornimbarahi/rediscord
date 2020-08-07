import React, { FunctionComponent, useContext } from "react";

import ServerContext from "../../contexts/ServerContext";

import styles from "./index.module.scss";

export interface ChannelBar {}

const ChannelBar: FunctionComponent = () => {
	const { selectedServer } = useContext(ServerContext) as {
		selectedServer: string;
	};

	return (
    <div className={styles["channel-bar-container"]}>
			<div>{selectedServer}</div>
		</div>
	);
};

export default ChannelBar;

import React, { FunctionComponent, useContext } from "react";

import ServerContext from "../../contexts/ServerContext";

import styles from "./index.module.scss";
import { ChatSessionPropType } from "../ServerSessionIcon";

export interface ChannelBar {}

const ChannelBar: FunctionComponent = () => {
	const { selectedServer } = useContext(ServerContext) as {
		selectedServer: ChatSessionPropType;
	};

	return (
		<div className={styles["channel-bar-container"]}>
			<div className={styles["channel-bar-header"]}>
				<h1>{selectedServer.serverTitle}</h1>
				<svg
					width="18"
					height="18"
					className={(styles["down-button"])}
				>
					<g fill="none" fill-rule="evenodd">
						<path d="M0 0h18v18H0"></path>
						<path
							stroke="currentColor"
							d="M4.5 4.5l9 9"
							stroke-linecap="round"
						></path>
						<path
							stroke="currentColor"
							d="M13.5 4.5l-9 9"
							stroke-linecap="round"
						></path>
					</g>
				</svg>
			</div>
		</div>
	);
};

export default ChannelBar;

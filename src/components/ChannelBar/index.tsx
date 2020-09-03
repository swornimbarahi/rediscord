import React, { FunctionComponent, useContext, useState } from "react";
import classnames from "classnames";

import ServerContext from "../../contexts/ServerContext";

import styles from "./index.module.scss";
import { ChatSessionPropType } from "../ServerSessionIcon";

export interface ChannelBar {}

const ChannelBar: FunctionComponent = () => {
	const { selectedServer } = useContext(ServerContext) as {
		selectedServer: ChatSessionPropType;
	};
	const [close, setClose] = useState<boolean>(false);

	return (
		<div className={styles["channel-bar-container"]}>
			<div
				className={styles["channel-bar-header"]}
				onClick={() => setClose(!close)}
			>
				<h1>{selectedServer.serverTitle}</h1>
				<div
					className={classnames(styles["cross-button-container"],!close && styles["down-button-container"]
					)}
				>
					<svg
						width="18"
						height="18"
						className={classnames(
							styles["down-button"],
							close && styles["cross-button"]
						)}
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
		</div>
	);
};

export default ChannelBar;

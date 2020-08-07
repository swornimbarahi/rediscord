import React, {
	FunctionComponent,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
} from "react";
import classnames from "classnames";
import styles from "./index.module.scss";
import ServerContext from "../../contexts/ServerContext";

import logo from "../../assets/logo.svg";

export interface ChatSessionPropType {
	icon: string | null;
	serverId: string;
	serverTitle: string;
	unread: boolean;
}

const ServerSessionIcon: FunctionComponent<ChatSessionPropType> = (props) => {
	const { icon, serverId, serverTitle, unread } = props;

	const { selectedServer, setSelectedServer } = useContext(ServerContext) as {
		selectedServer: string;
		setSelectedServer: Dispatch<SetStateAction<string>>;
	};

	const [hover, setHover] = useState(false);

	const handleClick = () => {
		if (selectedServer !== serverId) {
			setSelectedServer(serverId);
		}
	};

	return (
		<div
			key={serverId}
			className={styles["server-icon-super-container"]}
			onClick={handleClick}
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}
		>
			<div
				className={classnames(
					styles["server-icon--hover"],
					unread && styles["server-icon--hover-unread"],
					selectedServer === serverId && styles["server-icon--selected"]
				)}
			/>
			{icon ? (
				<img className={styles["server-icon-container"]} src={icon} alt="" />
			) : (
				<span>{serverTitle[0].toUpperCase()}</span>
			)}
			<div
				className={classnames(
					styles["server-name--tooltip"],
					hover && styles["server-name--tooltip-grow"]
				)}
			>
				{serverTitle}
			</div>
		</div>
	);
};

export const HomeIcon: FunctionComponent<{ unread: boolean }> = (props) => {
	const { unread } = props;

	const { selectedServer, setSelectedServer } = useContext(ServerContext) as {
		selectedServer: string;
		setSelectedServer: Dispatch<SetStateAction<string>>;
	};

	const [hover, setHover] = useState(false);

	const handleClick = () => {
		if (selectedServer !== "Home") {
			setSelectedServer("Home");
		}
	};

	return (
		<div
			key={"Home"}
			className={styles["server-icon-super-container"]}
			onClick={handleClick}
			onMouseOver={() => setHover(true)}
			onMouseOut={() => {
				setHover(false);
			}}
		>
			<div
				className={classnames(
					styles["server-icon--hover"],
					unread && styles["server-icon--hover-unread"],
					selectedServer === "Home" && styles["server-icon--selected"]
				)}
			/>
			<img
				className={classnames(
					styles["server-icon-container"],
					styles["home-icon"]
				)}
				src={logo}
				alt=""
			/>
			<div
				className={classnames(
					styles["server-name--tooltip"],
					hover && styles["server-name--tooltip-grow"]
				)}
			>
				Home
			</div>
		</div>
	);
};

export default ServerSessionIcon;

import React, {
	FunctionComponent,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";
import classnames from "classnames";
import styles from "./index.module.scss";
import ServerContext from "../../contexts/ServerContext";

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
			<div className={styles["server-name--tooltip"]}>{serverTitle}</div>
		</div>
	);
};

export default ServerSessionIcon;

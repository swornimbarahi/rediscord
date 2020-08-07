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

export const AddServerButton: FunctionComponent = () => {
	const { selectedServer, setSelectedServer } = useContext(ServerContext) as {
		selectedServer: string;
		setSelectedServer: Dispatch<SetStateAction<string>>;
	};

	const [hover, setHover] = useState(false);

	const handleClick = () => {
		if (selectedServer !== "Create Server Prompt") {
			setSelectedServer("Create Server Prompt");
		}
	};

	return (
		<div
			key={"Add Server"}
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
					selectedServer === "Create Server Prompt" &&
						styles["server-icon--selected"]
				)}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={classnames(
					styles["server-icon-container"],
					styles["home-icon"],
					styles["add-server-padding"]
				)}
				width="455"
				height="455"
				viewBox="0 0 455 455"
			>
				<g id="add" transform="translate(-2364 -1923)">
					<rect
						id="Rectangle_1"
						data-name="Rectangle 1"
						width="43"
						height="455"
						transform="translate(2570 1923)"
					/>
					<rect
						id="Rectangle_2"
						data-name="Rectangle 2"
						width="43"
						height="455"
						transform="translate(2819 2129) rotate(90)"
					/>
				</g>
			</svg>

			<div
				className={classnames(
					styles["server-name--tooltip"],
					hover && styles["server-name--tooltip-grow"]
				)}
			>
				Add a Server
			</div>
		</div>
	);
};

export const ExplorePublicButton: FunctionComponent = () => {
	const { selectedServer, setSelectedServer } = useContext(ServerContext) as {
		selectedServer: string;
		setSelectedServer: Dispatch<SetStateAction<string>>;
	};

	const [hover, setHover] = useState(false);

	const handleClick = () => {
		if (selectedServer !== "Explore Public Servers") {
			setSelectedServer("Explore Public Servers");
		}
	};

	return (
		<div
			key={"Explore Public Servers"}
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
					selectedServer === "Create Server Propmt" &&
						styles["server-icon--selected"]
				)}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={classnames(
					styles["server-icon-container"],
					styles["home-icon"],
					styles["explore-public-padding"]
				)}
				width="455"
				height="455"
				viewBox="0 0 24 24"
			>
				<path d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path>
			</svg>
			<div
				className={classnames(
					styles["server-name--tooltip"],
					hover && styles["server-name--tooltip-grow"]
				)}
			>
				Explore Public Servers
			</div>
		</div>
	);
};

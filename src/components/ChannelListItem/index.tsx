import React, { FunctionComponent } from "react";

export interface ChannelListItemPropType {
	type: "voice" | "text";
	title: string;
	unread: boolean;
	channelId: string;
}

const ChannelListItem: FunctionComponent<ChannelListItemPropType> = (props) => {
	const { type, title, unread, channelId } = props;

	return <div></div>;
};

export default ChannelListItem;

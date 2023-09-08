import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxContent from "./ChatBoxContent";
import ChatBoxFooter from "./ChatBoxFooter";

const ChatBox = () => {
	return (
		<div className="flex flex-col w-3/5 pb-0 pr-12">
			<ChatBoxHeader />
			<ChatBoxContent />
			<ChatBoxFooter />
		</div>
	);
};

export default ChatBox;

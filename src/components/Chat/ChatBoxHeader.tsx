import React from "react";
import Exclude from "../../assets/icons/Exclude.svg"
import Snooze from "../../assets/icons/snooze.svg"


const ChatBoxHeader = (props:any) => {

	const {selectedChat} = props;
	return (
		<div className="flex flex-row justify-between bg-white p-4 border border-b-gray-400 chat-box-header">
			<div className="flex flex-col">
				<div className="flex items-center">
					<span onClick={(e:any) => props.closeChat()} className="cursor-pointer md:hidden flex flex-row justify-between px-2 pr-4">
						<i className="fa fa-chevron-left"></i>
					</span>
					<div className="chat-box-header-title">
						{selectedChat?.name} | <span className="chat-box-header-subTitle">{selectedChat.nemo}</span>
						
					<div className="chat-box-header-description">ID DO CLIENTE: {selectedChat.number}</div>
					<div className="chat-box-header-description">
						{selectedChat.text2}:{" "}
						<span className="chat-box-header-status">{selectedChat.text3}</span>
					</div>
				</div>
				</div>
			</div>
			<div className="flex flex-col my-1">
				<div className="flex flex-row justify-end">
					<div className="text-xs text-gray-400 mr-1 mb-4">
						{selectedChat.title2}
					</div>
					<div className="text-lg text-gray-600">
						<img alt="" src={Exclude} />
					</div>
				</div>
				<div className="flex flex-row justify-end">
					<div className="text-xs text-gray-400 mr-1 mb-4">
					{selectedChat.title}
					</div>
					<div className="text-lg text-gray-600">
						<img alt="" src={Snooze} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxHeader;

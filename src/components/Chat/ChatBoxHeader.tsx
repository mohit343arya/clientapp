import React from "react";
import Exclude from "../../assets/icons/Exclude.svg"
import Snooze from "../../assets/icons/snooze.svg"

const ChatBoxHeader = () => {
	return (
		<div className="flex flex-row justify-between bg-white p-4 border border-b-gray-400 chat-box-header">
			<div className="flex flex-col">
				<div className="chat-box-header-title">
					Name do Utilizer | <span className="chat-box-header-subTitle">Pingo Doce</span>
				</div>
				<div className="chat-box-header-description">ID DO CLIENTE: 12345</div>
				<div className="chat-box-header-description">
					Status de tendskdsd:{" "}
					<span className="chat-box-header-status">Em Berto</span>
				</div>
			</div>
			<div className="flex flex-col my-1">
				<div className="flex flex-row justify-end">
					<div className="text-xs text-gray-400 mr-1 mb-4">
						Arquivar esta conversa
					</div>
					<div className="text-lg text-gray-600">
						<img alt="" src={Exclude} />
					</div>
				</div>
				<div className="flex flex-row justify-end">
					<div className="text-xs text-gray-400 mr-1 mb-4">
						Ativar snooze nesta conversa
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

import React from "react";
import ChatBoxCard from "./ChatBoxCard";
import ChatBoxInfo from "./ChatBoxInfo";

const ChatBoxContent = () => {
	return (
		<div className="py-8 bg-white flex flex-col chat-box-content">
			<div className="flex flex-row w-full">
				<div className="w-full text-center">
					<div className="flex flex-row grid-cols-3 justify-evenly items-center chat-breaker">
						<div className="line">_____________________________________	</div>
						<div className="text-center text-xs text-gray-600 text">
								Sengunda Fiero - 03/12/2023
						</div>
						<div className="line">_____________________________________</div>
					</div>
					<p className="chat-breaker-title my-4">
						Encio de attendiminto n 0021
					</p>
				</div>
			</div>
			<ChatBoxCard />
			<ChatBoxInfo />
			<ChatBoxCard />
			<div className="flex flex-row w-full">
				<div className="w-full text-center">
					<div className="flex flex-row justify-evenly items-center end-chat chat-breaker">
						<div className="line">
							__________________________________
						</div>
						<div className="end-chat-text">
								Attendimento n 000021 encerrado
						</div>
						<div className="line">
							______________________________
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxContent;

import React, { useEffect } from "react";
import ChatBoxCard from "./ChatBoxCard";

const ChatBoxContent = (props:any) => {

	const {selectedChat} = props;
	useEffect(() => {
		scrollToBottom('chatBoxContent')
	}, [props])

	const scrollToBottom = (id:any) => {
		const element:any = document.getElementById(id);
		element.scrollTop = element.scrollHeight;
	}
	
	
	return (
		<div className="py-8 bg-white flex flex-col chat-box-content" id="chatBoxContent">
			<div className="flex flex-row w-full">
				<div className="w-full text-center">
					<div className="flex flex-row grid-cols-3 justify-evenly items-center chat-breaker">
						<div className="line hidden md:block">_____________________________________	</div>
						<div className="text-center text-xs text-gray-600 text">
								Sengunda Fiero - 03/12/2023
						</div>
						<div className="line hidden md:block">_____________________________________</div>
					</div>
					<p className="chat-breaker-title my-4">
						Encio de attendiminto n 0021
					</p>
				</div>
			</div>
			{selectedChat.messages.map((message:any, id:any) =>{
				return <ChatBoxCard key={id} selectedChat={selectedChat} message={message} />
             })}
			{/* <ChatBoxInfo selectedChat={selectedChat} /> */}
			<div className="flex flex-row w-full">
				<div className="w-full text-center">
					<div className="flex flex-row justify-evenly items-center end-chat chat-breaker">
						<div className="line hidden md:block">
							__________________________________
						</div>
						<div className="end-chat-text">
								Attendimento n 000021 encerrado
						</div>
						<div className="line hidden md:block">
							______________________________
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxContent;

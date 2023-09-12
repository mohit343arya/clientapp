import React from "react";
import iconwhatsapp from '../../assets/icons/x-whatsapp.png'
import maskGroup from '../../assets/icons/Mask group.png'


const ChatBoxCard = (props: any) => {
	console.log("overflow-y: scroll");
	const {selectedChat, message} = props;
	return (
		<div className="chatCard flex flex-row justify-evenly my-4 ">
			<div className="w-[60px] h-[40px] rounded-full ml-4">
				<img alt="maskGroup" src={maskGroup}
					className="img1 rounded-full"
				/>
			</div>
			<div className="flex flex-col me-4 w-[540px] space">
				<div className="flex flex-row items-center ">
					<div className="chat-box-user-name">{message.name}</div>
					<div className="chat-box-text-timestamp ml-5">{message.date} - {message.time}</div>
				</div>
				{message.type === 'text' && <div className="chat-box-text ">
					{message.msg}
				</div>}
				{message.type === 'img' && <div className="chat-box-text ">
					<img className="w-full" alt="userMessage" src={message.msg} />
				</div>}
			</div>
			<div className=" base flex justify-end pe-10 w-[250px] flex-row items-start ">
				<div className="message-via-text my-1 mr-2">
					{selectedChat.msg}
				</div>
				<div className="text-2xl text-blue-500  mr-2 ">
					<img src={iconwhatsapp} alt="iconwhatsapp" />
				</div>
			</div>
		</div>
	);
};

export default ChatBoxCard;

import React from "react";
import iconwhatsapp from '../../assets/icons/x-whatsapp.png'
import maskGroup from '../../assets/icons/Mask group.png'

const ChatBoxCard = () => {
	return (
		<div className="flex flex-row justify-evenly my-4">
			<div className="w-[60px] h-[40px] rounded-full ml-4">
				<img alt="maskGroup" src={maskGroup}
					className="rounded-full"
				/>
			</div>
			<div className="flex flex-col me-4 w-[540px]">
				<div className="flex flex-row items-center">
					<div className="chat-box-user-name">Marcos Silva</div>
					<div className="chat-box-text-timestamp ml-5">03/12/2022 - 09:00</div>
				</div>
				<div className="chat-box-text ">
					Lorem ipsum dolor sit amet consectetur. Senectus convallis tellus eget sagittis elit gravida.
				</div>
			</div>
			<div className="flex justify-end pe-10 w-[250px] flex-row items-start">
				<div className="message-via-text my-1 mr-2">
					Mensagem recebida via:
				</div>
				<div className="text-2xl text-blue-500  mr-2 ">
					<img src={iconwhatsapp} alt="iconwhatsapp" />
				</div>
			</div>
		</div>
	);
};

export default ChatBoxCard;

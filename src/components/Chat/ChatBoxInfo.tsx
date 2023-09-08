import React from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import maskGroup from '../../assets/icons/Mask group.png'

const ChatBoxInfo = () => {
	return (
		<div className="flex flex-row my-4">
			<div className="w-[60px] h-[40px] rounded-full ml-4">
				
			</div>
			<div className="bg-gray-200 flex flex-col w-[80%] mb-3">
				<div className="chat-box-info-header p-1 flex flex-row justify-between">
					<div className="text-gray-700">-</div>
					<div className="chat-box-info-title">
						Notas de Attendionr/20021
					</div>
					<div className="flex flex-row text-white items-center">
						<FaPlus className="mx-2" />
						<FaPen className="mx-2" />
					</div>
				</div>
				<div className="flex flex-row mx-4 my-8 ">
					<div className="w-[40px] h-[40px] rounded-full mx-2">
						<img
							src={maskGroup} alt="avtar"
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col mx-2 w-[540px]">
						<div className="flex flex-row items-center">
							<div className="chat-box-user-name">Marcos Silva</div>
							<div className="chat-box-text-timestamp ml-4">03/12/2022 - 09:00</div>
						</div>
						<div className="chat-box-text my-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxInfo;

import React from "react";
import { BiPencil } from "react-icons/bi";
import Archieve from '../../assets/icons/archive.svg';
import iconGroup from '../../assets/icons/Group 275.png';
import iconintercome from '../../assets/icons/icone-intercom.png';
import Attachment from '../../assets/icons/attachment.svg';
import Emoji from '../../assets/icons/emoji.svg';
import Close from '../../assets/icons/close.svg'

const ChatBoxFooter = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row justify-between items-center text-gray-700 p-2">
					<BiPencil />
					<div className="text-xs ml-2 text">Inseir nova Nota</div>
				</div>
				<div className="flex flex-row justify-between items-center footer-close-btn px-2">
					<img src={Close} alt="Close" className="ps-2" />
					<div className="text-xs ml-2 text">Encerrar Attendimento</div>
				</div>
			</div>
			<div className="flex flex-col bg-white h-36 justify-between">
				<div className="flex flex-row text-gray-500 items-center p-3">
					<img src={Attachment} alt="Attachment" className="mx-5 my-2 text-2xl" />
					<img src={Emoji} alt="Emoji" className="mx-5 my-2 text-2xl" />
					<img src={Archieve} alt="Archieve" className="mx-5 my-2 text-2xl" />
				</div>
				<div className="flex flex-row justify-between items-end mb-2">
					<div className="w-[70%]">
						<input
							type="text"
							className="border user-msg-input border-b-gray-300 border-t-white text-sm border-l-white border-r-white px-2 py-3 ml-4 w-full"
							placeholder="Clique para escrever"
						/>
					</div>
					<div className="flex flex-col items-end mr-2 w-30 ">
						<div className="bg-indigo-700 position-relative rounded overflow-hidden flex flex-row items-center ">
							<div className=" text-white flex flex-row items-center   px-8 p-2 h-[40px]">
								<div className="text-white text-sm me-[5px]">
									<img src={iconintercome} alt="" />
								</div>
								<div className="text-sm mx-2 tracking-[0.5px]">Envoir</div>
							</div>
							<div className="text-white  h-[40px] text-sm ">
								<img src={iconGroup} alt="" className="border-l border-l-white w-full h-full" />
							</div>
						</div>
						<div className="footer-respond-text mt-2">Respondendo via: Chat Intercom</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBoxFooter;

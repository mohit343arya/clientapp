import Search from "../../assets/icons/search.svg"

import Message from "../../assets/icons/message.svg"
import ChatListCard from "./ChatListCard";

const ChatList = () => {
	return (
		<div className="flex flex-col w-2/5 bg-gray-200 chat-list-box pl-12 pr-4 pt-2 pb-0">
			<div className="flex flex-row justify-between py-2 px-2 chat-top-bar">
				<div className="flex flex-row justify-start items-center">
					<div className="text-2xl ">
						<img alt="Message" src={Message} />
					</div>
					<div className="ml-2">
						<p className="chat-top-bar-text">
							Converses Recenters
						</p>
					</div>
				</div>
				<div>
					<div className="text-2xl text-gray-400">
					<img alt="Search" src={Search} />
					</div>
				</div>
			</div>
			<div className="px-2 ">
				<ChatListCard icon={"xintercom"}/>
				<ChatListCard icon={"xemail"}/>
				<ChatListCard icon={"xsms"}/>
				<ChatListCard icon={"xwhatsapp"}/>
				<ChatListCard icon={"xintercom"}/>
				<ChatListCard icon={"xintercom"}/>
				<ChatListCard icon={"xintercom"}/>
				<ChatListCard icon={"xintercom"}/>
			</div>
		</div>
	);
};

export default ChatList;

import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxContent from "./ChatBoxContent";
import ChatBoxFooter from "./ChatBoxFooter";

const ChatBox = (props:any) => {
	const {selectedChat} = props
	return (
		<div className=" chatbox flex flex-col w-3/5 pb-0 pr-12 ">
			<ChatBoxHeader selectedChat={selectedChat} closeChat={(e:any) => props.closeChat()}/>
			<ChatBoxContent selectedChat={selectedChat}/>
			<ChatBoxFooter sendMessage={(e:any)=>props.sendMessage(e)} selectedChat={selectedChat}/>
		</div>
	);
};

export default ChatBox;

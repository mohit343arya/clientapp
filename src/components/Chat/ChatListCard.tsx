import iconIntercom from '../../assets/icons/x-intercom.png';
 import iconEmail from '../../assets/icons/x-email.png';
 import iconSms from '../../assets/icons/x-sms.png';
 import iconWhatsapp from '../../assets/icons/x-whatsapp.png';
 


const ChatListCard = (props:any) => {

	const{ onSelectChat, chat} = props;


	return (
		<div className="w-full flex flex-col bg-white rounded my-2 chat-list-card  cardStyle" onClick={() =>
		onSelectChat(chat)}>
			<div className="flex flex-row justify-between">
				<div className="chat-list-title">{chat?.name}</div>
				<div className="chat-list-date">{chat?.date} - {chat?.time}</div>
			</div>
			<div className="mt-2 flex flex-wrap md:flex-nowrap flex-row justify-between items-end">
				<div className="w-full md:w-3/5 chat-list-subtitle">
				{chat?.text}
				</div>
				<div className="flex mt-3 md:mt-0 flex-row">
					<div className="chat-list-icon-text">{chat?.msg}</div>
					<div className="text-2xl mt-3 md:mt-0 text-blue-500 ml-1 chat-list-icon">
						{chat?.from === "intercom" ? <img src={iconIntercom} alt=""/> : ""}
						{chat?.from === "email" ? <img src={iconEmail} alt=""/> :""}
						{chat?.from === "sms" ? <img src={iconSms} alt=""/> :""}
						{chat?.from === "whatsapp" ? <img src={iconWhatsapp} alt=""/> :""}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatListCard;

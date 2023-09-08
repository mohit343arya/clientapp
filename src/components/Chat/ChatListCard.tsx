import iconIntercom from '../../assets/icons/x-intercom.png';
 import iconEmail from '../../assets/icons/x-email.png';
 import iconSms from '../../assets/icons/x-sms.png';
 import iconWhatsapp from '../../assets/icons/x-whatsapp.png';

const ChatListCard = ({icon}:any) => {
	return (
		<div className="w-full flex flex-col bg-white rounded my-2 chat-list-card">
			<div className="flex flex-row justify-between">
				<div className="chat-list-title">Name de Uitilzor</div>
				<div className="chat-list-date">03/12/2022 - 09:00</div>
			</div>
			<div className="mt-2 flex flex-row justify-between items-end">
				<div className="w-3/5 chat-list-subtitle">
				Estamos vendo os tooltips (titles) e mouse hovers no portal e seu comportamento
				</div>
				<div className="flex flex-row">
					<div className="chat-list-icon-text">Última mensagem recebida via:</div>
					<div className="text-2xl text-blue-500 ml-1 chat-list-icon">
						{icon === "xintercom" ? <img src={iconIntercom} alt=""/> : ""}
						{icon === "xemail" ? <img src={iconEmail} alt=""/> :""}
						{icon === "xsms" ? <img src={iconSms} alt=""/> :""}
						{icon === "xwhatsapp" ? <img src={iconWhatsapp} alt=""/> :""}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatListCard;

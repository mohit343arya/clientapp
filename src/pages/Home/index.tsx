/* eslint-disable no-unused-vars */
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ChatBox from '../../components/Chat/ChatBox'
import ChatList from '../../components/Chat/ChatList'
import React, {useState} from 'react'

export default function Home() {
    const [chats, setChats]: any = useState([
		{
            id:1,
			name : 'Manish Kumar',
			text: 'It is a long established fact that a reader will be distracted by the readable',
			msg: 'Lorem , kfhikfhfjhfhjhfkf',
			date : '03/09/2023',
			time: '07:00',
			imageUrl : './assets/icons/x-email.png',
			from: 'intercom',
			title: 'guniz hdhh hidhwih',
			title2: 'hidhwih guniz ',
			number: '12563',
			messages:[
				{name:'john', type:'text', msg:'Hi Patrick, How are you, its been a long to see you', date:'7/7/2023', time:'07:00pm'},
				{name:'Patrick', type:'text', msg:'I am  good, what about You', date:'7/7/2023', time:'07:00pm'},
				{name:'john', type:'text', msg:'I am also Good', date:'7/7/2023', time:'07:00pm'},
				{name:'Patrick', type:'text', msg:'What are you doing now?', date:'7/7/2023', time:'07:01pm'},
				{name:'john', type:'text', msg:'Looking for the Opportunity', date:'7/7/2023', time:'07:01pm'},
				{name:'Patrick', type:'text', msg:'Okay Okay ', date:'7/7/2023', time:'07:01pm'},
				{name:'john', type:'text', msg:'Yes John', date:'7/7/2023', time:'07:01pm'},
			],
			nemo: 'Pablo Deco',
			text2: 'niwhodbwq uhdwbo',
			text3: 'Em Berto'
		},
		{
            id:2,
			name : 'Varun Dhiman',
			text: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
			msg: 'See our offers at [Location]',
			date : '04/09/2023',
			time: '07:20',
			image : 'image.jpg',
			from: 'email',
            title: 'hishahs jshuahdh jdj',
            title2: ' jshuahdh jdj',
			number: '18963',
            messages:[
				{name:'Lopez', type:'text', msg:'Hey Whassup', date:'8/7/2023', time:'02:00pm'},
				{name:'Jonathan', type:'text', msg:'Good and You?', date:'8/7/2023', time:'02:01pm'},
				{name:'Lopez', type:'text', msg:'Good too ', date:'8/7/2023', time:'02:02pm'},
				{name:'Jonathan', type:'text', msg:'Are you know the man that is studied with us in the 12th standard', date:'8/7/2023', time:'02:03pm'},
				{name:'Lopez', type:'text', msg:'which one you are talking about', date:'8/7/2023', time:'02:03pm'},
				{name:'Jonathan', type:'text', msg:'Bro ,Pattrick ', date:'8/7/2023', time:'02:04pm'},
				{name:'Lopez', type:'text', msg:'Oh yeah now i remember', date:'8/7/2023', time:'02:04pm'},
			],
			nemo: 'Pablo Escobar',
			text2: 'hdio ydubdo oywb',
			text3: 'Alberto'
		},
		{
			id:3,
			name : 'Suraj Singh',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
			msg: 'Exclusive offer alert! ',
			date : '05/09/2023',
			time: '07:40',
			image : 'image.jpg',
			from: 'sms',
			title: 'ouqysuy ugu dhuwd',
			title2: 'dhuwd ouqysuy ',
			number: '16263',
            messages:[
				{name:'Alex', type:'text', msg:'Hey Whassup', date:'9/7/2023', time:'10:00pm'},
				{name:'Maxi', type:'text', msg:'Good and You?', date:'9/7/2023', time:'10:01pm'},
				{name:'Alex', type:'text', msg:'Good too', date:'9/7/2023', time:'10:02pm'},
				{name:'Maxi', type:'text', msg:'You know there is a govt job otions there', date:'9/7/2023', time:'10:03pm'},
				{name:'Alex', type:'text', msg:'where please send me the link', date:'9/7/2023', time:'10:04pm'},
				{name:'Maxi', type:'text', msg:'okay', date:'9/7/2023', time:'11:00pm'},
				{name:'Alex', type:'text', msg:'Whch type of technology the company is preferred', date:'9/7/2023', time:'11:00pm'},
			],
			nemo: 'Pablo Brita',
			text2: 'dihiuoh hwihd hd',
			text3: 'Naruto'
		},
		{
			id:4,
			name : 'Rahul Tripathi',
			text: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			msg: '[Discount] off until [Month] ',
			date : '06/09/2023',
			time: '08:00',
			image : 'image.jpg',
			from: 'whatsapp',
			title: 'gueyva hhd hdihdi',
			title2: 'gueyva hdihdi',
			number: '29379',
            messages:[
				{name:'Hope', type:'text', msg:'Hi Luke, How are you, its been a long to see you!', date:'10/7/2023', time:'1:00am'},
				{name:'Luke', type:'text', msg:'I am  good, what about You', date:'10/7/2023', time:'1:00am'},
				{name:'Hope', type:'text', msg:'I am also Good!', date:'10/7/2023', time:'1:00am'},
				{name:'Luke', type:'text', msg:'What are you doing now?', date:'10/7/2023', time:'1:00am'},
				{name:'Hope', type:'text', msg:'Looking for the Opportunity', date:'10/7/2023', time:'1:00am'},
				{name:'Luke', type:'text', msg:'Okay Okay', date:'10/7/2023', time:'1:00am'},
				{name:'Hope', type:'text', msg:'Yes Luke', date:'10/7/2023', time:'1:00am'},
            ],
			nemo: 'Estin duro',
			text2: 'ipuniwg gdubwd h',
			text3: 'Hilbert'
		},
		{
            id:5,
			name : 'Vijay Dahiya',
			text: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue',
			msg: 'Ready for exclusive ',
			date : '07/09/2023',
			time: '08:20',
			image : 'image.jpg',
			from: 'intercom',
            title: 'guniz hdhh hidhwih',
            title2: ' hdhh hidhwih',
			number: '79361',
            messages:[
				{name:'Kevin', type:'text', msg:'Hi Kendra', date:'11/7/2023', time:'07:00pm'},
				{name:'Kendra',type:'text', msg:'I\'m good, thanks. How about you?', date:'11/7/2023', time:'07:01pm'},
				{name:'Kevin', type:'text', msg:'I am doing well too', date:'11/7/2023', time:'07:02pm'},
				{name:'Kendra',type:'text', msg:'Thats great to hear', date:'11/7/2023', time:'07:03pm'},
				{name:'Kevin', type:'text', msg:'Are you seeing that new movie that is realeased Yesterday', date:'11/7/2023', time:'07:04pm'},
				{name:'Kendra',type:'text', msg:'Yes I watched it, Its great', date:'11/7/2023', time:'07:04pm'},
				{name:'Kevin', type:'text', msg:'Yes, really too good', date:'11/7/2023', time:'07:04pm'},
			],
			nemo: 'Eric Mshal',
			text2: 'hhg wdhwdh jjwh',
			text3: 'Astrado'
		},
		{
            id:6,
			name : 'Abhinav Singh',
			text: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
			msg: 'Ready for exclusive',
			date : '08/09/2023',
			time: '08:40',
			image : 'image.jpg',
			from: 'intercom',
			title: 'hishahs jshuahdh jdj',
			title2: ' jshuahdh jdj',
			number: '72619',
            messages:[
				{name:'Stone', type:'text', msg:'Hi Harper, How are you, its been a long to see you!', date:'12/7/2023', time:'08:00pm'},
				{name:'Harper',type:'text', msg:'I am  good, what about You', date:'12/7/2023', time:'08:01pm'},
				{name:'Stone', type:'text', msg:'I am also Good!', date:'12/7/2023', time:'08:02pm'},
				{name:'Harper',type:'text', msg:'What are you doing now?', date:'12/7/2023', time:'08:03pm'},
				{name:'Stone', type:'text', msg:'Looking for the Opportunity', date:'12/7/2023', time:'08:04pm'},
				{name:'Harper',type:'text', msg:'Okay Okay', date:'12/7/2023', time:'08:05pm'},
				{name:'Stone', type:'text', msg:'Yes Harper', date:'12/7/2023', time:'08:05pm'},
            ],
			nemo: 'Holo Lifto',
			text2: 'huhu hdhwg dbwihd',
			text3: 'Kevin'
		},
		{
            id:7,
			name : 'Sushmita',
			text: 'sit amet adipiscing sem neque sed ipsum. Nam quam nunc',
			msg: 'Exclusive offer alert!',
			date : '10/09/2023',
			time: '09:00',
			image : 'image.jpg',
			from: 'intercom',
			title: 'gueyva hhd hdihdi',
			title2: 'hdihdi gueyva  ',
			number: '61896',
            messages:[
				{name:'Ether', type:'text', msg:'Hey Whassup', date:'13/7/2023', time:'05:00pm'},
				{name:'Nexus', type:'text', msg:'Good and You?', date:'13/7/2023', time:'05:01pm'},
				{name:'Ether', type:'text', msg:'Good too ', date:'13/7/2023', time:'05:02pm'},
				{name:'Nexus', type:'text', msg:'You know there is a govt job otions there', date:'13/7/2023', time:'05:03pm'},
				{name:'Ether', type:'text', msg:'where please send me the link', date:'13/7/2023', time:'05:04pm'},
				{name:'Nexus', type:'text', msg:'okay', date:'13/7/2023', time:'05:05pm'},
				{name:'Ether', type:'text', msg:'Whch type of technology the company is preferred', date:'13/7/2023', time:'05:06pm'},
			],
			nemo: 'Subo Deso',
			text2: 'nsjhsu hbhkgw bw',
			text3: 'Duruto'
		},
		{
            id:8,
			name : 'Yashika Talwar',
			text: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue',
			msg: 'See our offers at [Location]',
			date : '11/09/2023',
			time: '09:20',
			image : 'image.jpg',
			from: 'intercom',
			title: 'jsgaah dsid jhd',
			title2: ' dsid jhd',
			number: '77271',
            messages:[
				{name:'Marcus', type:'text', msg:'Hi Jason, How are you, its been a long to see you!', date:'14/7/2023', time:'12:01pm'},
				{name:'Jason', type:'text', msg:'I am  good, what about You', date:'14/7/2023', time:'12:02pm'},
				{name:'Marcus', type:'text', msg:'I am also Good!', date:'14/7/2023', time:'12:03pm'},
				{name:'Jason', type:'text', msg:'What are you doing now?', date:'14/7/2023', time:'12:04pm'},
				{name:'Marcus', type:'text', msg:'Looking for the Opportunity', date:'14/7/2023', time:'12:05pm'},
				{name:'Jason',  type:'text', msg:'Okay Okay', date:'14/7/2023', time:'12:06pm'},
				{name:'Marcus', type:'text', msg:'Yes Jason', date:'14/7/2023', time:'12:07pm'},
			],
			nemo: 'Wilfo Turo',
			text2: 'hsaus sgsug jjg',
			text3: 'Alford'
		},
		{
            id:9,
			name : 'Diksha Arora',
			text: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
			msg: 'Ready for exclusive',
			date : '12/09/2023',
			time: '09:00',
			image : 'image.jpg',
			from: 'intercom',
			title: 'jxxhsc hishdl sdhjl',
			title2: ' hishdl sdhjl',
			number: '99721',
            messages:[
				{name:'Michael',   type:'text', msg:'Hi Kendra', date:'15/7/2023', time:'01:01pm'},
				{name:'Katherine', type:'text', msg:'I\'m good, thanks. How about you?', date:'15/7/2023', time:'01:02pm'},
				{name:'Michael',   type:'text', msg:'I am doing well too', date:'15/7/2023', time:'01:03pm'},
				{name:'Katherine', type:'text', msg:'Thats great to hear', date:'15/7/2023', time:'01:04pm'},
				{name:'Michael',   type:'text', msg:'Are you seeing that new movie that is realeased Yesterday', date:'15/7/2023', time:'01:05pm'},
				{name:'Katherine', type:'text', msg:'Yes I watched it, Its great', date:'15/7/2023', time:'01:06pm'},
				{name:'Michael',   type:'text', msg:'Yes, really too good', date:'15/7/2023', time:'01:07pm'},
			],
			nemo: 'Lefto Polo',
			text2: 'fys jahsus hsihsi',
			text3: 'Hilford'
		},
	])


    const [selectedChat, setSelectedChat] = useState(chats[0])

    const onSelectChat = (chat:any) => {
        setSelectedChat(chat);
    }

    const addMessage = (event:any) => {
        let sc:any = {...selectedChat}
        let message = {name:'Michael', msg:event.msg, type:event.type, date:'15/7/2023', time:'01:01pm'}
        sc.messages.push(message)
        let index = chats.findIndex((el:any) => el.id === selectedChat.id);
        onSelectChat(sc);
        let userChats:any = [...chats]
        userChats[index] = sc
        setChats(userChats)
    }

    return (
        <div className="main-content">
            <Sidebar />
            <div className="main-content__content">
                <Header page="home" title="Home" />
                    <div className="mainBox App bg-gray-200 flex flex-row">
                        <ChatList chats={chats} onSelectChat= {onSelectChat}/>
                        <ChatBox sendMessage={addMessage} selectedChat={selectedChat} />
                    </div>
            </div>
        </div>
    )
}

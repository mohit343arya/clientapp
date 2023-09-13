import React, { useEffect, useRef, useState } from 'react'
import { BiPencil } from "react-icons/bi";
import Archieve from '../../assets/icons/archive.svg';
import iconGroup from '../../assets/icons/Group 275.png';
import iconintercome from '../../assets/icons/icone-intercom.png';
import Attachment from '../../assets/icons/attachment.svg';
import Emoji from '../../assets/icons/emoji.svg';
import Close from '../../assets/icons/close.svg'
import EmojiPicker from 'emoji-picker-react';
import io from 'socket.io-client';
import axios from 'axios';


const socket= io('');
const ChatBoxFooter = (props: any) => {

	const [msg, setMsg] = useState('')
	const [showEmoji, setShowEmoji] = useState(false)
	const [ApiData, setApiData] = useState('')

	useEffect(() => {
	
		socket.on('connect', () =>{
			console.log("connected to server")
		});

		socket.on('message', (data) => {
			props?.setMsg([...props?.msg, data]);
		  });

		return () => {
		  socket.disconnect();
		};
	  }, [props?.msg]);

	  useEffect(() => {
		axios.get('https://api.example.com/data') // Replace with your API endpoint
		  .then((response) => {
			setApiData(response.data);
		  })
		  .catch((error) => {
			console.error('Error fetching data:', error);
		  });
	  }, []);

	const sendMessage = () => {
		props.sendMessage({ msg: msg, type: 'text' })
		socket.emit('message', { text: msg });
        setMsg('')
		setShowEmoji(false)
	}

	const onEmojiClick = (event: any) => {
		console.log('event', event);
		// let emojisArr = 
		setMsg((msg) => msg + event.emoji);
	};

	const fileInputRef: any = useRef(null);

	const handleClick = () => {
		// Trigger a click event on the hidden file input when the image is clicked
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (e: any) => {
		// console.log('e', e)
		// Handle the selected file here, e.target.files[0] contains the selected file
		const selectedFile = e.target.files[0];
		// console.log('selectedFile', selectedFile)
		if (selectedFile) {
			const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
		  
			if (allowedTypes.includes(selectedFile.type)) {
			  // Create a FileReader
			  const reader = new FileReader();
		  
			  // Define a callback function for when the FileReader has finished reading the file
			  reader.onload = (event:any) => {
				// event.target.result contains the base64 encoded string
				const base64String = event.target.result;
				// console.log('Base64 String:', base64String);	
				props.sendMessage({ msg: base64String, type: 'img' })
				// Reset the file input
				if (fileInputRef.current) {
					fileInputRef.current.value = null;
				  }
			  };
		  
			  // Read the file as a data URL, which will give us a base64 encoded string
			  reader.readAsDataURL(selectedFile);
			} else {
			  alert('Only JPEG, JPG, or PNG images are supported.');
			}
		  } else {
			alert('No file selected.');
		  }
	};
	return (
		<div className="flex flex-col">
			<div className="flex flex-row flex-wrap  md:flex-nowrap justify-between">
				<div className="flex flex-row justify-between items-center text-gray-700 p-2 w-full md:w-auto">
					<BiPencil />
					<div className="text-xs ml-2 text">Inseir nova Nota</div>
				</div>
				<div className="flex flex-row justify-between items-center footer-close-btn px-2 w-full md:w-auto">
					<img src={Close} alt="Close" className="ps-2" />
					<div className="text-xs ml-2 text">Encerrar Attendimento</div>
				</div>
			</div>
			<div className="flex flex-col bg-white h-36 justify-between">
				<div className="flex flex-row text-gray-500 items-center p-3">
					<input type="file" className='hidden' accept="image/jpeg, image/jpg, image/png" ref={fileInputRef} onChange={handleFileChange} />
					<img onClick={handleClick} src={Attachment} alt="Attachment" className="mx-5 my-2 text-2xl cursor-pointer" />
					<span className='relative'>
						<img src={Emoji} onClick={(e: any) => setShowEmoji(!showEmoji)} alt="Emoji" className="mx-5 my-2 text-2xl cursor-pointer" />
						{showEmoji && <div className='emoji-picker position-absolute'>
							<EmojiPicker onEmojiClick={onEmojiClick} />
						</div>}
					</span>

					<img src={Archieve} alt="Archieve" className="mx-5 my-2 text-2xl cursor-pointer" />
				</div>
				<div className="flex flex-row justify-between items-end mb-2">
					<div className="w-[70%]">
						<input
							type="text"
							name="msg"
							value={msg}
							className={`border user-msg-input border-b-gray-300 border-t-white text-sm border-l-white border-r-white px-2 py-3 ml-4 w-full ${msg === '' ? 'italic text-custom-grey' : 'text-custom-black'} `}
							
							placeholder="Clique para escrever"
							onInput={(e: any) => setMsg(e.target.value)}
						/>
					</div>
					<div className="flex flex-col items-end mr-2 w-30 ">
						<div className="bg-indigo-700 position-relative rounded overflow-hidden flex flex-row items-center ">
							<button onClick={sendMessage} disabled={msg === ''} type='button' className=" text-white flex flex-row items-center   px-2 md:px-8 p-2 h-[40px]">
								<div className="text-white text-sm mx-2 md:mx-0 md:me-[5px]">
									<img src={iconintercome} alt="" />
								</div>
								<div className="footer-button hidden md:block text-sm mx-2 tracking-[0.5px]">Envoir</div>
							</button>
							<div className="text-white hidden md:block h-[40px] text-sm ">
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

import io from 'socket.io-client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const socket= io('');
const api = axios.create({
    baseURL: 'https://api.example.com/', 
    timeout: 10000, 
    headers: {
      'Content-Type': 'application/json',

    },
  });

const Api = () => {

    const [msg, setMsg] = useState('')
    const [ApiData, setApiData] = useState('')
    useEffect(() => {
		socket.on('connect', () =>{
			console.log("connected to server")
		});

		socket.on('message', (data) => {
			// setMsg([...msg, data]);
		  });

		return () => {
		  socket.disconnect();
		};
	  }, [msg]);

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
		socket.emit('message', { text: msg });
        setMsg('')
	}

  return (
    <div>
      
    </div>
  )
}

export default Api

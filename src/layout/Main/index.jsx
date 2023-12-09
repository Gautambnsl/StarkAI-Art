import React, { useState } from 'react';
import axios from 'axios';
const Main = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();

    setMessages([...messages, { text: inputValue, sender: 'other' }]);

    const options = {
      method: 'POST',
      url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '39735b2314msh1e8c532bd060158p157221jsn418de8433bcb',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
      },
      data: {
        messages: [
          {
            role: 'user',
            content: inputValue,
          },
        ],
        web_access: false,
        system_prompt: '',
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
      },
    };

    try {
      // const response = await axios.request(options);
      setMessages((prev) => [
        ...prev,
        { text: 'Hello', sender: 'self' },
      ]);
    } catch (error) {
      console.error(error);
    }

    setInputValue('');
  };

  return (
    <>
      <div className="message-container">
        <div className="message">
          {messages.map((message, index) =>
            message.sender === 'other' ? (
              <div key={index} className="message-other">
                {message.text}
              </div>
            ) : (
              <div key={index} className="message-self">
                {message.text}
              </div>
            )
          )}
        </div>
      </div>

      <form onSubmit={handleSendMessage}>
        {/* <input
          type="text"
          placeholder="Type a message..."
          className="text-input"
        /> */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Type a message..."
            className="input"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* <input className="button--submit" value="Subscribe" type="submit" /> */}
        <button type="submit" className='send-button'>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
        </div>

      </form>
    </>
  );
};

export default Main;

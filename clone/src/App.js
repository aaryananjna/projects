import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg'; // ✅ Corrected path
import userIcon from './assets/user-icon.png'; // ✅ Corrected path
import gptImgLogo from './assets/chatgptLogo.svg'; // ✅ Corrected path
import { sendMsgToOpenAI } from './openai';
import { useEffect, useRef, useState } from 'react';




function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAI. I'm designed to understand and generate human-like text based on the input I receive. You can ask me questions, have conversations, seek information, or even request assistance with various tasks. Just let me know how I can help you!",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);

    const botResponse = await sendMsgToOpenAI(userMsg);
    setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleQuery = async (e) => {
    const userMsg = e.target.value;
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);

    const botResponse = await sendMsgToOpenAI(userMsg);
    setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
  };


  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGpt</span>
          </div>
          <button className="midBtn" onClick={() => window.location.reload()}>
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value="What is Programming?">
              <img src={msgIcon} alt="Query" />What is Programming?
            </button>
            <button className="query" onClick={handleQuery} value="How to use an API?">
              <img src={msgIcon} alt="Query" />How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} className={message.isBot ? 'chat bot' : 'chat'}>
              <img className="chatImg" src={message.isBot ? gptImgLogo : userIcon} alt="" />
              <p className="txt">{message.text}</p>
            </div>
          ))}
          <div ref={msgEnd} />
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnter}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
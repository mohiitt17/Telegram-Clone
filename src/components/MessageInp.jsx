import React, { useContext, useRef, useState } from 'react';
import style from "./style.module.css";
import { MyContext } from '../store/MyContext';
import { MdOutlineCall, MdOutlineSearch, MdKeyboardVoice } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FiPaperclip } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";

const MessageInp = ({ isDarkMode }) => {
  const { selectChat, colors, userDetail, userMessage, setUserMessage } = useContext(MyContext);
  const userIndex = userDetail.findIndex(user => user.name === selectChat.name);
  const userColor = colors[userIndex % colors.length];

  const textareaRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
  
      const newMessage = e.target.value.trim(); 
  
      if (newMessage) {
        setUserMessage(prev => ({
          ...prev,
          [selectChat.name]: [...(prev[selectChat.name] || []), newMessage] 
        }));
  
        setTimeout(() => {
          e.target.value = "";
          handleInput(); 
        }, 0);
      }
    }
  };
  

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height first
      textarea.style.height = textarea.scrollHeight + "px"; // Set new height
    }
  };

  return (
    <>
      <div className={`container-fluid ${!isDarkMode ? "bg-light text-dark" : "bg-dark text-white"} ${style.detailBanner}`}>
        <div className={style.bannerContent}>
          <div className={style.avatar} style={{ backgroundColor: userColor }}>
            {selectChat.avatar}
          </div>
          <p className={style.bannerName}>{selectChat.name}</p>
        </div>
        <div className={style.bannerIcons}>
          <MdOutlineCall />
          <MdOutlineSearch />
          <CiMenuKebab />
        </div>
      </div>

      {userMessage[selectChat.name] && (
  <div className={style.messageContainer}>
    {userMessage[selectChat.name].map((msg, index) => (
      <div key={index} className={`${style.singleMessage} ${isDarkMode ? "text-white " : "text-dark"}` } style={{backgroundColor : isDarkMode ? "#A294F9" : "#72BAA9"}}>
        <p>{msg}</p>
      </div>
    ))}
  </div>
)}




      <div className={style.inpFeild}>
        <div className="input-group mb-3">
          <span className={`${!isDarkMode ? "bg-light text-dark" : "bg-dark text-white"} ${style.emoji}`}>
            <BsEmojiSmile />
          </span>

          <div className={style.inputWrapper}>
            <textarea
              ref={textareaRef}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
              className={`${!isDarkMode ? "bg-light text-dark" : "bg-dark text-white"} ${style.inputCSS}`}
              placeholder='Message'
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              style={{ border: 'none' }}
            ></textarea>
          </div>

          <span className={`${!isDarkMode ? "bg-light text-dark" : "bg-dark text-white"} ${style.attachFile}`}>
            <FiPaperclip />
          </span>
        </div>
        <div className={style.voiceWrap}>
        <div className={style.voiceSearch}>
          <MdKeyboardVoice />
        </div>
        </div>
      </div>
    </>
  );
};

export default MessageInp;

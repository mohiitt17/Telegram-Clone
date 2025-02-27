import React, { useContext, useState } from 'react'
import style from "./style.module.css"
import { MyContext } from '../store/MyContext'
const ChatList = ({isDarkMode,}) => {
  const {userDetail, setSelectChat, colors, userMessage} = useContext(MyContext);
  return <div className = {` ${isDarkMode ? "text-white" : "text-dark"}  ${style.contactlist}`}>
    <p style={{color :"#98D8EF", fontWeight :"500"}}>Contacts</p>
    {userDetail.map((detail, index) => (
  <div key={index} className={`container-fluid ${style.listItem}`} onClick={() => {
      setSelectChat(detail)
  } }> 
    <div className={style.avatar} style={{ backgroundColor: colors[index % colors.length] }}>
      {detail.avatar}
    </div>
    <p className={style.lastMessage}>{detail.name}</p>
    </div>
))}

  </div>
}

export default ChatList
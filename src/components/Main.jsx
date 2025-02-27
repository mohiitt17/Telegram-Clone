import React, { useContext } from 'react'
import MessageInp from './MessageInp'
import { MyContext } from '../store/MyContext'


const Main = ({isDarkMode}) => {
 const {selectChat} =  useContext(MyContext);
  return (
    <div className={`container`} style={{
      backgroundImage: 'url(/src/assets/Desktop.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: "73%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingLeft: "0px",
      borderLeft : !isDarkMode ? "2px solid grey" : "none" ,
      paddingRight: "0px",
    }}>
      {selectChat ? <MessageInp isDarkMode={isDarkMode} /> : null}
      </div>
  )
}

export default Main
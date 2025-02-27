import React, { useContext, useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import ChatList from './ChatList';
import style from "./style.module.css"
import { MyContext } from '../store/MyContext';

const SlideBar = ({isDarkMode, toggleDarkMode, }) => {
   const  [showList, setShowList ] = useState(false);
  const handleOnChatClick=  () => {
    if(!showList) {
      setShowList(true)

    } else {
      setShowList(false)
    }
  }
  return (
    <div className={`d-flex flex-column text-white ${isDarkMode ? 'bg-dark ' : 'bg-light'}`} style={{ width: '420px', minHeight: '100vh',}}>
    <div className="p-2 d-flex align-items-center" >
      <div className= {`dropdown ${isDarkMode ? 'bg-dark' : 'bg-light'}`} style={{ borderRadius :"50%",}}>
        <button
          className={`btn`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ borderRadius: '50%', padding: '0px', height: '50px', width: '50px' }}
        >
          <i className={`bi bi-list ${isDarkMode ? "text-white" : 'text-black'}`} ></i>
        </button>
        <ul className={`dropdown-menu ${isDarkMode ?  "dropdown-menu-dark" : "dropdown-menu-light"}`} style={{ backdropFilter: 'blur(10px)', padding: '10px' }}>
          <li><a className="dropdown-item" href="#"><i className="bi bi-chat-left-text me-2"></i>Saved Messages</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2"></i>Archived Chats</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-book me-2"></i>My Stories</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-wallet2 me-2"></i>Wallet</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>Contacts</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Settings</a></li>

          <li><hr className="dropdown-divider" /></li>

          <li>
            <div className="dropdown-item d-flex justify-content-between align-items-center">
              <span><i className="bi bi-moon me-2"></i>Dark Mode</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
              </div>
            </div>
          </li>

          <li><hr className="dropdown-divider" /></li>

          <li><a className="dropdown-item" href="#"><i className="bi bi-stars me-2"></i>Telegram Features</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-bug me-2"></i>Report Bug</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-arrow-repeat me-2"></i>A to A Version</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-download me-2"></i>Install App</a></li>
        </ul>
      </div>
      <div className="input-group ms-2" style={{ flexGrow: 1, border: '1px solid grey', borderRadius: '20px' }}>
        <span className={`input-group-text ${isDarkMode ? 'bg-dark' : 'bg-light'} border-0 text-secondary`} style={{ borderRadius: '20px 0 0 20px' }}>
          <i className="bi bi-search"></i>
        </span>
        <input
          type="search"
          className= {`form-control ${isDarkMode ? 'bg-dark' : 'bg-light'} text-white border-0`}
          placeholder="Search"
          style={{
            borderRadius: '0 20px 20px 0',
            fontSize: '14px',
            height: '40px',
          }}
        />
      </div>
    </div>
    <div className={`${style.hideScroll}`} style={{border : !isDarkMode ? "1px solid grey" : "none", minHeight :"656px", maxHeight :"656px", borderRadius :"10px", margin :"3px",}}>
{showList ? <ChatList isDarkMode = {isDarkMode} /> : 
<div className={`flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center ${style.outAnimate} `} style={{marginTop :'150px'}}>
      <div className="mb-4">
        <img
          src="/src/assets/EmptyChats.svg"
          alt="Empty chat"
          style={{ width: '220px', height: '220px' }}
        />
      </div>

      <h5 className = { `mb-2 ${!isDarkMode ? "text-dark" : "text-light"}`}>Your chats will appear here</h5>
      <p className= { `mb-2 ${!isDarkMode ? "text-dark" : "text-light"}`}>You have no chats yet</p>

    </div> }

    
    <div class="dropup-center dropstart " style={{ position :"absolute", top :"86%", left :"23%"}}>
  <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false"style={{borderRadius :"50%", height : "55px", width :"55px", backgroundColor :"#0088cc",}}><MdModeEdit style={{height :"25px", width :"25px"}}/>
  </button>
  <ul class={`dropdown-menu ${isDarkMode ?  "dropdown-menu-dark" : "dropdown-menu-light"} `}>
    <li style={{margin :"3px"}} ><a class="dropdown-item" href="#" onClick={() => handleOnChatClick()} style={{borderRadius :"5px",}}>{showList ? "go home" : "create new chat"}</a></li>
    <li style={{margin :"3px"}} ><a class="dropdown-item" href="#" style={{borderRadius :"5px",}}>  create Channel</a></li>
  </ul>
</div>
</div>
  </div>  )
}


export default SlideBar
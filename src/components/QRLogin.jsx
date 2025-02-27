import React, { useContext } from 'react'
import { MyContext } from '../store/MyContext'
import Spinner from './Spinner'
import QR from "../assets/QR.svg";

import "./QRPage.css"
const QRLogin = () => {
    const {handleOnChangeMetohd, showSpinn} = useContext(MyContext)
    return (
  
      <div className="container">
    <div className="content">
  
         {showSpinn === false ? <Spinner /> : <img src={QR} alt=""className='img-fluid' />}
  
      <h1>Login in to Telegram by QR code </h1>
  
      <ol>
          <li>Open Telegram on your phone</li>
          <li>Go to settings &gt; Devices &gt; Link Desktop Device </li>
          <li>Point your phone at this screen to confirm login </li>
          </ol>
          <button type="button"  className="btn btn-outline-primary spinn" onClick={() => handleOnChangeMetohd("number")}>LOG IN BY MOBILE NUMBER </button>
      </div>
      </div>  
      )
}

export default QRLogin
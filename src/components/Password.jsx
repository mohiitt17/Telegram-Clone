import React, { useContext, useEffect, useState } from 'react'
import  './passPage.css'
import { MyContext } from '../store/MyContext'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import AnimateLogo from './AnimateLogo';
import kitten from "../assets/kitten.png"
import HomePage from "./HomePage"

const Password = ({SetPage}) => {
  const {mobileNum, setLoginMethod, setShowEye, eyeToggle, showEye, setTab} =  useContext(MyContext)
  const [message, setMessage] = useState("")
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    if (showLogo) {
      const timer = setTimeout(() => {
        setShowLogo(false); 
        SetPage("home")
      }, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [showLogo]);

  return (
    <div className='pass-container '>
      <div className="img-container">
        <img  src={kitten} alt="" />
        </div>
        <div id ='edit-icon' onClick = {() => {
          setLoginMethod("number")
        }} > <img src="/src/assets/edit.svg" alt=""  /></div>
        <h1>{mobileNum}</h1> <br />
        <p>Enter your Password Here :</p>
        <b className='alert-text'>{message}</b>
        <div className="col-md-4">
       {showEye == false ? <FaRegEye className='toggle-eye' onClick={() => {
        eyeToggle()
       }} /> : <FaRegEyeSlash className='toggle-eye' onClick={() => {
        eyeToggle();

       }} /> }

    <input type= {showEye ? "text" : "password"} className="form-control " id="validationDefault01"   onKeyDown={(e) => {
      if(showEye == true) {
        document.getElementById("validationDefault01").type = "text"
      } else if (showEye) {
        document.getElementById("validationDefault01").type = "password"
      }
  if (e.key === "Enter") {
    const inputValue = e.target.value; 
    if (inputValue.length < 6  ) {
     setMessage("Password was incorrect ! please try again")
    } else if (inputValue.length >= 6) {
      setShowLogo(true)
    } else if (inputValue.length > 0) {
      setMessage("Password cannot be empty")
    }
    e.target.value = ""; 
  }
}}
 placeholder='Password' />
  </div>
  {showLogo && <AnimateLogo /> }
    </div>
  )
}

export default Password
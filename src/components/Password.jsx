import React, { useContext, useState } from 'react'
import  './passPage.css'
import { MyContext } from '../store/MyContext'
const Password = () => {
  const {mobileNum, setLoginMethod, checkPassword, setMobileNum} =  useContext(MyContext)
  const [message, setMessage] = useState("")
  return (
    <div className='pass-container '>
      <div className="img-container">
        <img  src="/src/assets/kitten.png" alt="" />
        </div>
        <div id ='edit-icon' onClick = {() => {
          setLoginMethod("number")
        }} > <img src="/src/assets/edit.svg" alt=""  /></div>
        <h1>{mobileNum}</h1> <br />
        <p>Enter your Password Here :</p>
        <b className='alert-text'>{message}</b>
        <div className="col-md-4">
    <input type="text" className="form-control " id="validationDefault01"   onKeyDown={(e) => {
  if (e.key === "Enter") {
    const inputValue = e.target.value.trim(); 
    if (inputValue.length < 6  ) {
     setMessage("Password was incorrect ! please try again")
    } else if (inputValue.length >= 6) {
      console.log("Password was true");
      setMessage("")
    } else if (inputValue.length > 0) {
      setMessage("Password cannot be empty")
    }
    e.target.value = ""; 
  }
}}
 placeholder='Password' />
  </div>
  
    </div>
  )
}

export default Password
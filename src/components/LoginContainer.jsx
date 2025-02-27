import React, { useContext } from 'react'
import MobileLogin from './MobileLogin'
import QRLogin from "./QRLogin"
import { MyContext } from '../store/MyContext'
import Password from './Password'
const LoginContainer = ({SetPage}) => {
  const {loginMethod, clicked} = useContext(MyContext)
  return <div className="loginPage-container">
{
  loginMethod === "number"
    ? <MobileLogin />
    : loginMethod === "password"
    ? <Password SetPage = {SetPage}/>
    : <QRLogin />
}
    </div>
}

export default LoginContainer
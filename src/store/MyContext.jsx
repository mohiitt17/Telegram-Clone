import { createContext, useContext, useEffect, useState } from "react"


export const MyContext = createContext({
  showSpinn: false,
  handleOnChangeMetohd: () => { },
  loginMethod: "",
  setLoginMethod: () => { },
  mobileNum: "",
  setMobileNum: () => { },
  checkNumber : () => {},
  inputValue : "",
  setValue : () => {},
  showEye : false,
  setShowEye : () => {},
  eyeToggle : () => { },
  tab : "",
  setTab : () => { },
  userDetail : [],
  setSelectChat : () => {},
  selectChat : "",
  colors : [],
  userMessage :{},
  setUserMessage : () => {},
});

const colors = ["#DE3163", "#DD88CF", "#B2A5FF", "#6E8E59", "#DF9755", "#79D7BE", "#A5BFCC", "#497D74", "#98D8EF", "#FFA09B"];

const userDetail = [
  {avatar : "A", name : "Anuj",},
  {avatar : "s", name :"Shubham"},
  {avatar : "I", name : "Ishuu",},
  {avatar : "F", name : "Fionaa",},
  {avatar : "M", name : "Mannat",},
  {avatar : "S", name : "Sahil",},
  {avatar : "M", name : "Madhav",},
  {avatar : "K", name : "Keshav",},
  {avatar : "N", name : "Naveen",},
  {avatar : "P", name : "Prashant",},
  {avatar : "R", name : "Ritik",},
  {avatar : "V", name : "Vashu",},
  {avatar : "S", name : "Sandharv",},

]

const MyContextProvider = ({ children }) => {
  const [showSpinn, setShowSpinn] = useState(false)
  const [mobileNum, setMobileNum] = useState("");
  const [inputValue, setValue] = useState("");
  const [loginMethod, setLoginMethod] = useState("");
  const [showEye, setShowEye] = useState(false)
  const [tab, setTab] = useState("");
 const [selectChat, setSelectChat] = useState("");
 const [userMessage, setUserMessage] = useState({});


  useEffect(() => {
    const intervalId = setTimeout(() => {
      setShowSpinn(true)
    }, 1000);
    return () => {
      clearTimeout(intervalId);
    }
  }, [])


  const handleOnChangeMetohd = (option) => {
    if (option === "QR") {
      setLoginMethod("QR");
      console.log(option)
    } else if (option === "number") {
      setLoginMethod("number");
    } else if (option === "password") {
      setLoginMethod("number")
    }
  }

const checkNumber = () => {
if(mobileNum.length > 10) {
  setLoginMethod("password")
}else if(mobileNum.length > 0) {
alert("mobile number was wrong ! please tryy again")
setMobileNum("")
} else if (mobileNum.length == 0){
alert("input feild cannot be empty")
setMobileNum("")} 

}

const eyeToggle = () => {
if(showEye == true) {
  setShowEye(false)
  console.log("show value")
} else if (showEye == false) {
  setShowEye(true)
  console.log("don't show value"); 
}
}


  return <MyContext.Provider value={{
    showSpinn,
    handleOnChangeMetohd,
    loginMethod,
    setLoginMethod,
    mobileNum,
    setMobileNum,
    checkNumber,
    setValue,
    inputValue,
    showEye,
    setShowEye,
    eyeToggle,
    setTab,
    tab,
    userDetail,
    selectChat,
    setSelectChat,
    colors,
    setUserMessage,
    userMessage,
  }}>{children}</MyContext.Provider>
}
  ;


export default MyContextProvider
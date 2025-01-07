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
});

const MyContextProvider = ({ children }) => {
  const [showSpinn, setShowSpinn] = useState(false)
  const [mobileNum, setMobileNum] = useState("");
  const [inputValue, setValue] = useState("");
  const [loginMethod, setLoginMethod] = useState("");

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
  }}>{children}</MyContext.Provider>
}
  ;


export default MyContextProvider
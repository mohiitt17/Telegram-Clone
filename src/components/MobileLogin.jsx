import React, { useContext, useRef, useState } from 'react'
import { MyContext } from '../store/MyContext';
import LoadingButton from './NextBtn';
import "./Mobilepage.css"
const MobileLogin = () => {
  const { handleOnChangeMetohd, setMobileNum, setValue, inputValue } = useContext(MyContext);

  return (
    <div className="container">
      <div className="content2">

        <img src="/telegram.png" className='img-fluid' alt="" />

        <h1 style={{ fontSize: "32px", marginTop: "32px" }}>Sign in to telegram</h1>
        <p style={{ fontSize: "16px" }}>Please confirm your country code <br /> and enter your phone number</p>

        <select className="form-select country" aria-label="Default select example" style={{ width: "360px", height: "54PX", backgroundColor: "#212121", color: "#fff", fontSize: "15px", marginTop: "32px" }}>
          <option value="🇮🇳 IND 91+" >🇮🇳 IND 91+</option>
          <option value="1"> UK +44</option>
          <option value="2">🇦🇫 AFG +93</option>
          <option value="3">🇺🇸 US +1</option>
        </select>
        <div className="col-md-6" style={{ width: "360px", height: "54px", marginTop: "10px" }}>
          <label htmlFor="inputPassword4" className="form-label" style={{ marginLeft: "-68%" }}>Mobile number </label>
          <input type="text" className="form-control" value={inputValue} onChange={(e) => {
            let val = event.target.value.replace(/\s/g, '');
            val = val.replace(/(.{5})/g, '$1 ');
            setMobileNum(val.trim());
            setValue(e.target.value);
          }} id="inputPassword4" style={{ backgroundColor: "#212121", width: "100%", height: "100%", color: "white" }} />
        </div>
        <div className="form-check" style={{ width: "360px", height: "54px", marginTop: "50px", marginLeft: "10px" }}>
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault" style={{ marginLeft: "-65%" }} >
            Keep me sign in
          </label>
        </div>

        <LoadingButton></LoadingButton>

        <button type="button" id='spinn' className="btn btn-outline-primary" onClick={() => handleOnChangeMetohd("QR")} style={{ width: "360px", height: "54px", marginTop: "10px" }} >LOG IN BY QR </button>

      </div>
    </div>)
}

export default MobileLogin
import React, {useState, useEffect} from 'react'
import './Overlay.scss'

function Overlay() {
    // useEffect(
    //   ()=>{
    //      const signInBtn = document.getElementById("signIn")
    //     const signUpBtn = document.getElementById("signUp")
    //     const container = document.querySelector(".w-container")

    //     signInBtn.addEventListener("click", () => {
    //       container.classList.remove("right-panel-active");
    //     });
        
    //     signUpBtn.addEventListener("click", () => {
    //       container.classList.add("right-panel-active");
    //     });
    //     }
    //   ,[])
     
    

    return (
        <>
        <div className="w-container__overlay">
      <div className="w-overlay">
        <div className="w-overlay__panel w-overlay--left">
          <div className="w-loginlogo-icon">
            <img className="w-signlogo" src="images/member/Logo_o-03.png" alt="" />
          </div>
          <div>
            <p className="w-overlay-cautionword">已經有帳號了嗎？</p>
          </div>
          <button 
            className="w-btn-signbutton" 
            id="signIn" 
            onClick={()=>{
              const container = document.querySelector(".w-container")
              container.classList.remove("w-right-panel-active")}}>
            登入 Sign In
            </button>
        </div>
        <div className="w-overlay__panel w-overlay--right">
          <div className="w-loginlogo-icon">
            <img className="w-signlogo" src="images/member/Logo_o-03.png" alt="" />
          </div>
          <div>
            <p className="w-overlay-cautionword">還沒有帳號嗎？</p>
          </div>
          <button 
            className="w-btn-signbutton" 
            id="signUp"
            onClick={()=>{
              const container = document.querySelector(".w-container")
              container.classList.add("w-right-panel-active")}}>
          註冊 Sign Up
          </button>
        </div>
      </div>
    </div>
        </>
    )
}

export default Overlay
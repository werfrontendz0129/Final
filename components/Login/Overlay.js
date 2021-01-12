import React, {useState} from 'react'
import './Overlay.scss'

function Overlay() {
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
          <button className="w-btn-signbutton" id="signIn">登入 Sign In</button>
        </div>
        <div className="w-overlay__panel w-overlay--right">
          <div className="w-loginlogo-icon">
            <img className="w-signlogo" src="images/member/Logo_o-03.png" alt="" />
          </div>
          <div>
            <p className="w-overlay-cautionword">還沒有帳號嗎？</p>
          </div>
          <button className="w-btn-signbutton" id="signUp">註冊 Sign Up</button>
        </div>
      </div>
    </div>
        </>
    )
}

export default Overlay
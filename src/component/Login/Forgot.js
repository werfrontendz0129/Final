import React, {useState} from 'react'
import './Forgot.scss'

function Forgot() {
    return (
        <>
        <div className="w-container__form w-signup02">
      <form action="#" className="w-form2" id="form2">
        <h2 className="w-form__title">重設密碼 Reset Password</h2>
        <small id="passwordinputnumber2" className="form-text">請輸入您註冊的電子信箱，新密碼的重置將通過電子信箱發送給您。</small>
        <div className="w-form-group mt-5 mb-5">
          <label for="">帳號 Account</label>
          <input type="email" placeholder="請輸入您的E-mail" className="form-control w-input" />
        </div>
        
        <button className="w-btn-clicksend">送出 Send</button>
        
      </form>
    </div>
        </>
    )
}

export default Forgot
import React, {useState} from 'react'
import './LogIn.scss'

function LogIn() {
    return (
        <>
        <div className="w-container__form w-signup02">
      <form action="#" className="w-form2" id="form2">
        <h2 className="w-form__title">登入 Sign In</h2>
        <div className="form-group">
          <label for="">帳號 Account</label>
          <input type="email" placeholder="請輸入您的E-mail" className="form-control w-input" />
        </div>
        <div className="form-group">
          <label for="">密碼 Password</label>
          <input type="password" placeholder="請輸入密碼" className="form-control w-input" />
        </div>
        <button className="w-btn-clicksend">登入 Sign In</button>
        <span>忘記密碼？</span>
        <div className="d-flex w-signbtns">
          <button className="w-btn-facebook">facebook 登入</button>
          <button className="w-btn-google">Google 登入</button>
        </div>
      </form>
    </div>
        </>
    )
}

export default LogIn
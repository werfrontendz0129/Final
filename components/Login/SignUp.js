import React, {useState} from 'react'
import './SignUp.scss'

function SignUp() {
    return (
        <>
        <div className="w-container__form w-signup01">
      <form action="#" className="w-form" id="form1">
        <h2 className="w-form__title">註冊 Sign Up</h2>
        <div className="form-group">
          <label for="">建立帳號 Account</label>
          <input type="email" placeholder="請輸入您的E-mail" className="form-control w-input" />
        </div>
        <div className="form-group">
          <label for="">密碼 Password</label>
          <small id="passwordinputnumber" className="form-text">*請輸入介於8-20位數之間密碼，需同時包含英文和數字。</small>
          <input type="password" placeholder="請輸入密碼" className="form-control w-input" />
        </div>
        <div className="form-group">
          <label for="">確認密碼 Password</label>
          <input type="password" placeholder="再次輸入密碼" className="form-control w-input" />
        </div>
        <div className="form-group">
          <label for="">性別 Gender</label>
          <select className="form-control" id="">
            <option>不透露</option>
            <option>男</option>
            <option>女</option>
          </select>
        </div>
        <div className="form-group">
          <label for="">出生日期 Birth Date</label>
          <div className="d-flex">
            <select className="form-control" id="">
              <option>日</option>
            </select>
            <select className="form-control" id="">
              <option>月</option>
            </select>
            <select className="form-control" id="">
              <option>年</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="" />
            <label className="form-check-label" for="">
              我已閱讀並同意遵守 <a className="w-form-checkbox-a">商店服務條款</a> 與 <a
                className="w-form-checkbox-a">會員責任規範及個資聲明。</a>
            </label>
          </div>
        </div>
        <button className="w-btn-clicksend">確認送出 Send</button>
        <div className="d-flex w-signbtns">
          <button className="w-btn-facebook">使用facebook帳號註冊</button>
          <button className="w-btn-google">使用Google帳號註冊</button>
        </div>
      </form>
    </div>
        </>
    )
}

export default SignUp
import React, {useEffect, useState, useContext} from 'react'
import './SignUp.scss'
import {useParams,useHistory} from 'react-router-dom'
import {UserContext} from '../Index/UserContext'
import { NavLink } from 'react-router-dom'
function SignUp(props) {
 
  const [regAccount, setRegAccount] = useState()
  const [regPassword, setRegPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [gender, setGender] = useState()
  const [birthdate, setBirthdate] = useState()

  const {user, setUser} = useContext(UserContext)
  let history = useHistory()

  async function request(){
    const params = {member_account:regAccount,member_password:regPassword,member_gender:gender,member_birthdate:birthdate}
    console.log(params)
    const url = 'http://localhost:3001/api/register'
    const response = await fetch(url,{
      method:"POST",
      headers:{
          'Content-Type': 'application/json',
      },
      body:JSON.stringify(params)
    })
    if(!response.ok){
      console.log(response)
    }else{
      console.log(response)
    }
  }

  // function chkPassword(){
  //   if(regPassword===confirmPassword){
  //     const msg = "ok";
  //   }else{
  //     const msg ="請重新確認密碼"
  //   }
  // }


    return (
        <>
        <div className="w-container__form w-signup01">
      <form className="w-form" id="form1">
        <h2 className="w-form__title">註冊 Sign Up</h2>
        <div className="form-group">
          <label htmlFor="">建立帳號 Account</label>
          <input 
            type="email" 
            placeholder="請輸入您的E-mail" 
            className="form-control w-input" 
            onChange={(e)=>setRegAccount(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="">密碼 Password</label>
          <small id="passwordinputnumber" className="form-text">*請輸入介於8-20位數之間密碼，需同時包含英文和數字。</small>
          <input 
            type="password" 
            placeholder="請輸入密碼" 
            className="form-control w-input"
            maxLength="20"
            onChange={(e)=>setRegPassword(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="">確認密碼 Password</label>
          <input 
            type="password" 
            placeholder="再次輸入密碼" 
            className="form-control w-input" 
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="">性別 Gender</label>
          <select 
            className="form-control"
            onChange={(e)=>setGender(e.target.value)}
            required
            >
            <option>不透露</option>
            <option>男</option>
            <option>女</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">出生日期 Birth Date</label>
          <div className="d-flex">
            <input 
              type="date" 
              placeholder="yyyy-mm-dd" 
              className="form-control"
              onChange={(e)=>setBirthdate(e.target.value)}
              required
              />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="" required/>
            <label className="form-check-label" htmlFor="">
              我已閱讀並同意遵守 <a className="w-form-checkbox-a">商店服務條款</a> 與 <a
                className="w-form-checkbox-a">會員責任規範及個資聲明。</a>
            </label>
          </div>
        </div>
        <NavLink to="#"
          onClick={(e)=>request(e)}
          >
          <button className="w-btn-clicksend">確認送出 Send</button>
          </NavLink>
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
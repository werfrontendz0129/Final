import React, {useEffect, useState, useContext} from 'react'
import './LogIn.scss'
import { NavLink } from 'react-router-dom'
import {UserContext} from '../Index/UserContext'

function LogIn(props) {
  const {isAuth, setIsAuth} = props
  const [useraccount, setAccount ] = useState()
  const [userpassword, setPassword] = useState()
  const {user, setUser} = useContext(UserContext) 

  async function request(){
    const params = {member_account:useraccount,member_password:userpassword}
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
  useEffect(()=>{

  })

    return (
        <>
        <div className="w-container__form w-signup02">
          <form className="w-form2" id="form2">
            <h2 className="w-form__title">登入 Sign In</h2>
              <div className="form-group">
                <label htmlFor="">帳號 Account</label>
                <input 
                type="email" 
                placeholder="請輸入您的E-mail" 
                className="form-control w-input" 
                onChange={(e)=>{setAccount(e.target.value)}} />
              </div>
              <div className="form-group">
                <label htmlFor="">密碼 Password</label>
                <input type="password" 
                placeholder="請輸入密碼" 
                className="form-control w-input" 
                onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
            <NavLink onClick={(e)=>{request(e);setUser({id:1,username:useraccount})}
            } to="/" >
            <button className="w-btn-clicksend">登入 Sign In</button>
            </NavLink>
            <NavLink to="/forgotpassword" >忘記密碼？</NavLink>
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
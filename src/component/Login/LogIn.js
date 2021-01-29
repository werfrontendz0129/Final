import React, {useEffect, useState, useContext} from 'react'
import './LogIn.scss'
import { NavLink ,useHistory} from 'react-router-dom'
import {UserContext} from '../Index/UserContext'
import {useForm} from './useForm'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function LogIn(props) {
  const {isAuth, setIsAuth} = props
  let history = useHistory()
  const {user,setUser} =useContext(UserContext)
  const [values, handleChange] = useForm({member_account:"",member_password:""})
  const ChkLogin =() =>{
    if(!values.member_account||!values.member_password){
      const MySwal = withReactContent(Swal)
        MySwal.fire({
          icon: 'error',
          title: '驗證錯誤',
          html:'請輸入有效帳戶密碼',
          showCancelButton: false,
          cancelButtonText: '返回',
          confirmButtonText: '確認',
          confirmButtonColor: '#6C8650'
        })
    }else if(values.member_password!=="dec9413578"){
      const MySwal = withReactContent(Swal)
        MySwal.fire({
          icon: 'error',
          title: '驗證錯誤',
          html:'密碼錯誤，請您確認密碼',
          showCancelButton: false,
          cancelButtonText: '返回',
          confirmButtonText: '確認',
          confirmButtonColor: '#6C8650'
        })
    }else if(values.member_account=="vivian@gmail.com" &&values.member_password =="dec9413578"){
      const MySwal = withReactContent(Swal)
        MySwal.fire({
          icon: 'success',
          title: '驗證成功',
          html:'歡迎您的登入',
          showCancelButton: false,
          cancelButtonText: '返回',
          confirmButtonText: '確認',
          confirmButtonColor: '#6C8650'
        }).then((result) => {
        console.log(result)
        if (result.value) {
          //這邊之後要改成登入頁面
          history.push('/')
        }
      })
    }
  }
  
    return (
        <>
        <div className="w-container__form w-signup02">
      <form className="w-form2" id="form2">
        <h2 className="w-form__title">登入 Sign In</h2>
        <div className="form-group">
          <label for="">帳號 Account</label>
          <input type="email" placeholder="請輸入您的E-mail" 
          name="member_account"
          value={values.member_account}
          onChange={handleChange}
          className="form-control w-input" />
        </div>
        <div className="form-group">
          <label for="">密碼 Password</label>
          <input type="password" placeholder="請輸入密碼"
          name="member_password"
          value={values.member_password}
          onChange={handleChange}
           className="form-control w-input" />
        </div>
        {/* <NavLink to="/" style={{textDecoration: 'none', color: "#FFF"}}> */}
        <button onClick={(e)=>{setUser(1);ChkLogin(e)}} className="w-btn-clicksend">登入 Sign In</button>
        {/* </NavLink> */}
        {console.log(user)}
        <NavLink to="/forgotpassword">忘記密碼？</NavLink>
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
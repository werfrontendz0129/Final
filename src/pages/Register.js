import React, {useState,useEffect} from 'react'

import '../component/RegisterContent/RegisterContent.scss'
import SignUp from '../component/Login/SignUp'
import LogIn from '../component/Login/LogIn'
import Overlay from '../component/Login/Overlay'
function Register() {
    
    // 使用useEffect
    // useEffect寫在這頁可抓取component資料
    useEffect(
        ()=>{
            
           const signInBtn = document.getElementById("signIn")
          const signUpBtn = document.getElementById("signUp")
          const container = document.querySelector(".w-container")
  
          signInBtn.addEventListener("click", () => {
            container.classList.remove("w-right-panel-active");
          });
          
          signUpBtn.addEventListener("click", () => {
            container.classList.add("w-right-panel-active");
          });
          }
        ,[])
       
    return (
        <>
        <div className="w-signbody">
        <div className="w-container w-right-panel-active">
        <SignUp /> 
        <LogIn />
        <Overlay />
         </div>
        </div>
        </>
    )
}

export default Register
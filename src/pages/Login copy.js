import React, {useEffect} from 'react'
import '../component/RegisterContent/LoginContent.scss'
import SignUp from '../component/Login/SignUp'
import LogIn from '../component/Login/LogIn'
import Overlay from '../component/Login/Overlay'

function Login() {
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
        <div className="w-container">
        <SignUp /> 
        <LogIn />
        <Overlay />
         </div>
        </div>
            
        </>
    )
}

export default Login

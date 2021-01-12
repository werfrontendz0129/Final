import React, {useState} from 'react'
import './RegisterContent.scss'
import SignUp from '../Login/SignUp'
import LogIn from '../Login/LogIn'
import Overlay from '../Login/Overlay'

function RegisterContent() {
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

export default RegisterContent
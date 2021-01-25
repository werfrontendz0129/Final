import React, {useState} from 'react'
import './ClicktoDetailButton.scss'
import { NavLink } from 'react-router-dom'

function ClicktoDetailButton() {
    return (
        <>
        {/* 這個要連結到結帳流程後的訂單詳情頁面 */}
        <NavLink to="/" className="w-btn-clicktodetail">訂單詳情</NavLink>
        </>
    )
}

export default ClicktoDetailButton
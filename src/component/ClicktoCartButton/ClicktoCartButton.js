import React, {useState} from 'react'
import './ClicktoCartButton.scss'
import { NavLink } from 'react-router-dom'

function ClicktoCartButton() {
    return (
        <>
        <NavLink to="/" className="w-btn-clicktodetail">加入購物車</NavLink>
        </>
    )
}

export default ClicktoCartButton
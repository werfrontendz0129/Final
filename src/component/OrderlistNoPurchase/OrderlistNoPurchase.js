import React, {useState} from 'react'
import './OrderlistNoPurchase.scss'
import { NavLink } from 'react-bootstrap'

function OrderlistNoPurchase() {
    return (
        <>
        <div className="w-collect-none">
            <p>目前還沒有選購商品喔，來去逛逛吧</p>
            <div>        
            {/* 這個要連結到所有選購商品的頁面 */}
                <NavLink to="/" className="w-btn-viewlesson">植物選購</NavLink>               
            </div>   
        </div>
        </>
    )
}

export default OrderlistNoPurchase
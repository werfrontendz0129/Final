import React, {useState} from 'react'
import './MyCollectionNone.scss'
import { NavLink } from 'react-router-dom'

function MyCollectionNone() {
    return (
        <>
        <div className="w-collect-none">
            <p>目前還沒有收藏商品，快去選購吧</p>
            <div className="d-flex">
            {/* 租賃button要連結到所有租賃商品的頁面 */}
                <NavLink to="/" className="w-btn-viewlesson">植物租賃</NavLink>
            {/* 選購button要連結到所有選購商品的頁面 */}
                <NavLink to="/" className="w-btn-viewlesson">植物選購</NavLink>  
            </div>   
        </div>
        </>
    )
}

export default MyCollectionNone
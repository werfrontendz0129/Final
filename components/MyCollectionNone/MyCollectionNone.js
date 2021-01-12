import React, {useState} from 'react'
import './MyCollectionNone.scss'

function MyCollectionNone() {
    return (
        <>
        <div className="w-collect-none">
            <p>目前還沒有收藏商品，快去選購吧</p>
            <div>
                <button type="button" className="w-btn-viewlesson">植物租賃</button>                
                <button type="button" className="w-btn-viewlesson">植物選購</button>                
            </div>   
        </div>
        </>
    )
}

export default MyCollectionNone
import React, {useState} from 'react'
import './LessonNone.scss'
import { NavLink } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function LessonNone() {
    let history = useHistory()
    return (
        <>
        <div className="w-collect-none">
            <p>目前還沒有預約課程，來去逛逛吧</p>
            <div>        
            {/* 這個button要連結到所有課程瀏覽的頁面 */}
                <NavLink onClick={()=>history.push("/course")} className="w-btn-viewlesson">教學課程</NavLink>                
            </div>   
        </div>
        </>
    )
}

export default LessonNone
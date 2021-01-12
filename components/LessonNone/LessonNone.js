import React, {useState} from 'react'
import './LessonNone.scss'

function LessonNone() {
    return (
        <>
        <div className="w-collect-none">
            <p>目前還沒有預約課程，來去逛逛吧</p>
            <div>        
                <button type="button" className="w-btn-viewlesson">教學課程</button>                
            </div>   
        </div>
        </>
    )
}

export default LessonNone
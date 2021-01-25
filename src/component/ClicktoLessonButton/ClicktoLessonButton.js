import React, {useState} from 'react'
import './ClicktoLessonButton.scss'
import { NavLink } from 'react-router-dom'

function ClicktoLessonButton() {
    return (
        <>
        <NavLink to="/lesson/lessondetail" className="w-btn-lessondetail">課程詳情</NavLink>
        </>
    )
}

export default ClicktoLessonButton
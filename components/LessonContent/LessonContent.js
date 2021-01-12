import React, {useState} from 'react'
import './LessonContent.scss'
import LessonNone from '../LessonNone/LessonNone'
import LessonBookinglist from '../LessonBookinglist/LessonBookinglist'

function LessonContent() {
    return (
        <>
        <div>
        <div className="w-div-title pl-4">
            <p>課程預約管理</p>
        </div>
                <div className="w-orderlist-main px-2">
                    {/* 有預約課程則顯示Bookinglist頁面，無預約則顯示None頁面 */}
                    <LessonBookinglist />
                    {/* <LessonNone /> */}
                </div>
            </div>
        </>
    )
}

export default LessonContent
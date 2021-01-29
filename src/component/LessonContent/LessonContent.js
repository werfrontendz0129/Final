import React, {useState,useEffect} from 'react'
import './LessonContent.scss'
// import LessonNone from '../LessonNone/LessonNone'
import LessonBookinglist from '../LessonBookinglist/LessonBookinglist'
import {withRouter} from 'react-router-dom'
// import Header from '../component/Header/Header'
// import Footer from '../component/Footer/Footer'

function LessonContent(props) {
    console.log('props?',props)

    // const display = <LessonBookinglist />
    // const none = <LessonNone />

    return (
        <>
        {/* <Header/> */}
        <div>
        <div className="w-div-title pl-4">
            <p>課程預約管理</p>
        </div>
                <div className="w-orderlist-main px-2">
                    <LessonBookinglist id={props.match.params.id}/>
                </div>
            </div>
        {/* <Footer /> */}
        </>
    )
}

export default withRouter(LessonContent)
import React, {useState} from 'react'
import './Member.scss'
import MemberHeader from '../component/MemberHeader/MemberHeader'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar'
import MemberContent from '../component/MemberContent/MemberContent'
import LessonContent from '../component/LessonContent/LessonContent'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'
import {withRouter} from 'react-router-dom'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

function Lesson(props) {
    const {isAuth} = props

    return (
        <>
        {/*  */}
         {/* <MemberHeader /> */}
         <Header />
         {/* <MyBreadcrumb /> */}
         {/* --測試登入狀態-- */}
         {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
         {/* --test-- */}

            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                <LessonContent />
            </div>
            </section>
            <Footer/>
        </> 
    )
}

export default withRouter(Lesson)
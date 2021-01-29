import React, {useState, useEffect} from 'react'
import './Member.scss'
import {withRouter} from 'react-router-dom'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar'
import MemberContent from '../component/MemberContent/MemberContent'
import NotifyTabs from '../component/NotifyTabs/NotifyTabs'
import Header from '../component/Header/Header'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'
import Footer from '../component/Footer/Footer'

function Notifications(props) {
    // const {isAuth} = props
    // console.log('test',props)

    return (
        <>
            <Header />
            {/* <MyBreadcrumb /> */}
            {/* test */}
            {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
            
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent id={props.id}/>
            </div>
            <div className="w-article">
                <NotifyTabs id={props.match.params.id}/>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default withRouter(Notifications)
import React, {useState} from 'react'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar'
import MemberContent from '../component/MemberContent/MemberContent'
import MemberHeader from '../component/MemberHeader/MemberHeader'
import MyCollectionContent from '../component/MyCollectionContent/MyCollectionContent'
import {withRouter} from 'react-router-dom'
import './Member.scss'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function MyCollections(props) {
    const {isAuth} = props

    return (
        <>
        <Header />
        {/* <MemberHeader /> */}
        {/* <MyBreadcrumb /> */}
        {/* test */}
        {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
        
        <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                <MyCollectionContent />
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default withRouter(MyCollections)
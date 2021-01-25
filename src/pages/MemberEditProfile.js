import React, {useState} from 'react'
import './Member.scss'
import MemberHeader from '../component/MemberHeader/MemberHeader'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar'
import MemberContent from '../component/MemberContent/MemberContent'
import ProfileEdit from '../component/ProfileEdit/ProfileEdit'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

// 測試編輯資料
// import ProfileEdittest from '../components/ProfileEdit/ProfileEdittest'

function MemberEditProfile(props) {
    const {isAuth} = props

    return (
        <>
        <Header />
            {/* <MemberHeader /> */}
            {/* <MyBreadcrumb /> */}
            {/* --test-- */}
            {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
            
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                <ProfileEdit />

                {/* --測試資料-- */}
                {/* <ProfileEdittest /> */}
                {/* --測試資料-- */}

            </div>
            </section>
            <Footer/>
        </>
    )
}

export default MemberEditProfile
import React from 'react'
import './Member.scss'
import MemberHeader from '../component/MemberHeader/MemberHeader'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar'
import MemberContent from '../component/MemberContent/MemberContent'
import PurchaseOrderContent from '../component/PurchaseOrderContent/PurchaseOrderContent'
import {withRouter} from 'react-router-dom'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
function PurchaseOrder(props) {
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
                <PurchaseOrderContent />
            </div>
            </section>
            <Footer/>
        </>
    )
}

export default withRouter(PurchaseOrder)
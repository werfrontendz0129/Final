import React from 'react'
import './Member.scss'
import Header from '../component/Header/Header'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar'
import MemberContent from '../component/MemberContent/MemberContent'
import PurchaseOrderContent from '../component/PurchaseOrderContent/PurchaseOrderContent'
import {withRouter} from 'react-router-dom'
import Footer from '../component/Footer/Footer'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function PurchaseOrder(props) {
    console.log('props?',props)
    const id = props.match.params.id
    console.log('???',id)
    
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
                <PurchaseOrderContent id={props.match.params.id}/>
            </div>
            </section>
        <Footer />
        </>
    )
}

export default withRouter(PurchaseOrder)
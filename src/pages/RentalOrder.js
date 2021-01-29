import React, { useState } from 'react'
import './Member.scss'
import MemberHeader from '../component/MemberHeader/MemberHeader'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar'
import MemberContent from '../component/MemberContent/MemberContent'
import OrderlistTableRental from '../component/OrderlistTableRental/OrderlistTableRental'
import {withRouter} from 'react-router-dom'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function RentalOrder(props) {
    // const {isAuth} = props
    // console.log('this?',props)
    // console.log('id?',props.match.params.id)

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
                <OrderlistTableRental id={props.match.params.id}/>
            </div>
            </section>

        <Footer />
        </>
    )
}

export default withRouter(RentalOrder)
import React, {useState} from 'react'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar'
import MemberContent from '../component/MemberContent/MemberContent'
import Header from '../component/Header/Header'
import MyCollectionContent from '../component/MyCollectionContent/MyCollectionContent'
import {withRouter} from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import './Member.scss'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function MyCollections(props) {
    // const {isAuth} = props
    // console.log('???',props)
    const id = props.match.params.id
    console.log('id?',id)

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
                <MyCollectionContent id={props.match.params.id}/>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default withRouter(MyCollections)
import React from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import LatestNews from '../components/LatestNews/LatestNews'
import AccountView from '../components/AccountView/AccountView'


function Member() {
    return (
        <>
        <MemberHeader />
        <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                <LatestNews />
                <AccountView />
            </div>
        </section>
        </>
    )
}

export default Member
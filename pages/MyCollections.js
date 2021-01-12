import React, {useState} from 'react'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MyCollectionContent from '../components/MyCollectionContent/MyCollectionContent'
import './Member.scss'


function MyCollections() {
    return (
        <>
        <MemberHeader />
        <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                <MyCollectionContent />
            </div>
        </section>
        </>
    )
}

export default MyCollections
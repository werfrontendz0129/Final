import React, {useState} from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import LessonContent from '../components/LessonContent/LessonContent'

function Lesson() {
    return (
        <>
         <MemberHeader />
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                <LessonContent />
            </div>
            </section>
        </>
    )
}

export default Lesson
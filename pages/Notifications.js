import React, { useState, useEffect } from 'react'
import './Member.scss'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import NotifyTabs from '../components/NotifyTabs/NotifyTabs'
import MemberHeader from '../components/MemberHeader/MemberHeader'

function Notifications(props) {
  return (
    <>
      <MemberHeader />
      <section className="w-wrapper d-flex">
        <div className="w-card">
          <MemberAvatar />
          <MemberContent />
        </div>
        <div className="w-article">
          <NotifyTabs />
        </div>
      </section>
    </>
  )
}

export default Notifications

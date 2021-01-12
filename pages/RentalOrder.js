import React from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import OrderlistTableRental from '../components/OrderlistTableRental/OrderlistTableRental'

function RentalOrder() {
    return (
        <>
        <MemberHeader />
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                <OrderlistTableRental />
            </div>
            </section>
        </>
    )
}

export default RentalOrder
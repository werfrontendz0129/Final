import React from 'react'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar';
import MemberContent from '../components/MemberContent/MemberContent';
import OrderManagementRentalInfoTable from '../components/Order-Management-Rental-InfoTable/OrderManagementRentalInfoTable'
import OrderManagementRentalItemTable from '../components/Order-Management-Rental-ItemTable/OrderManagementRentalItemTable'


function OrderManagementRental() {
    return (
        <>
           <section class="b-member-Rental-order-wrapper">
            <div className=" b-member-Rental-order-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="b-member-Rental-order-article">
                <OrderManagementRentalInfoTable />
                <OrderManagementRentalItemTable />
            </div>
            </section>
        </>
    )
}

export default OrderManagementRental

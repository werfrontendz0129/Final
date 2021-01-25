import React, {useState,useEffect} from 'react'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar';
import MemberContent from '../component/MemberContent/MemberContent';
import OrderManagementRentalInfoTable from '../component/Order-Management-Rental-InfoTable/OrderManagementRentalInfoTable'
import OrderManagementRentalItemTable from '../component/Order-Management-Rental-ItemTable/OrderManagementRentalItemTable'


function OrderManagementRental() {
  
    return (
        <> 
           <section className="b-member-Rental-order-wrapper">
            <div className=" b-member-Rental-order-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="b-member-Rental-order-article">
            
                <OrderManagementRentalInfoTable  />
        
                <OrderManagementRentalItemTable />
            </div>
            </section>
        
        </>
    )
}

export default OrderManagementRental

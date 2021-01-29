import React, {useState,useEffect} from 'react'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar';
import MemberContent from '../component/MemberContent/MemberContent';
import '../component/MemberContent/MemberContent.scss'
import OrderManagementRentalInfoTable from '../component/Order-Management-Rental-InfoTable/OrderManagementRentalInfoTable'
import OrderManagementRentalItemTable from '../component/Order-Management-Rental-ItemTable/OrderManagementRentalItemTable'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'


function OrderManagementRental() {
  
    return (
        <> 
            <Header />
           <section className="b-member-Rental-order-wrapper">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
                
            </div>
            <div className="b-member-Rental-order-article">
            
                <OrderManagementRentalInfoTable  />
        
                <OrderManagementRentalItemTable />
            </div>
            </section>
        <Footer />
        </>
    )
}

export default OrderManagementRental

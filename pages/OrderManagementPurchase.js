import React from 'react';
import MemberAvatar from '../components/MemberAvatar/MemberAvatar';
import MemberContent from '../components/MemberContent/MemberContent';
import OrderManagementPurchaseInfoTable from '../components/Order-Management-Purchase-InfoTable/OrderManagementPurchaseInfoTable'
import OrderManagementPurchaseItemTable from '../components/Order-Management-Purchase-ItemTable/OrderManagementPurchaseItemTable'
function OrderManagementPurchase() {
    return (
        <>
            <section class="b-member-purchase-order-wrapper">
            <div className=" b-member-purchase-order-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="b-member-purchase-order-article">
                <OrderManagementPurchaseInfoTable />
                <OrderManagementPurchaseItemTable />
            </div>
            </section>
        </>
    )
}

export default OrderManagementPurchase

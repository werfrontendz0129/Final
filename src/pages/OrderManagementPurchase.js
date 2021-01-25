import React from 'react';
import MemberAvatar from '../component/MemberAvatar/MemberAvatar';
import MemberContent from '../component/MemberContent/MemberContent';
import OrderManagementPurchaseInfoTable from '../component/Order-Management-Purchase-InfoTable/OrderManagementPurchaseInfoTable'
import OrderManagementPurchaseItemTable from '../component/Order-Management-Purchase-ItemTable/OrderManagementPurchaseItemTable'
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

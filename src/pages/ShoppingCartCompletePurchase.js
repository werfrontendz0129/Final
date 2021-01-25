import React from 'react'
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import CheckoutTableInfoPurchase from '../component/ShoppingCart_Purchase/Checkout-Table-Info-purchase/CheckoutTableInfoPurchase'
import CheckoutTableItemListPurchase from '../component/ShoppingCart_Purchase/Checkout-Table-ItemList-Purchase/CheckoutTableItemListPurchase'
import Footer from '../component/Footer/Footer'

function ShoppingCartComplete() {
    return (
        <>
        <div className="b-paddingLR">
            <div className="b-completepage-header">
                    <div>
                        <Breadcrumb />
                        <div className="b-complete-cart-title">
                            <p className="mb-2">結帳</p>
                        </div>
                    </div>
                    <Shoppingprocessbar shopping address payment complete ></Shoppingprocessbar>
                </div>
                <div className="b-complete-noonspace"></div>
                <CheckoutTableInfoPurchase />
                <CheckoutTableItemListPurchase />
        </div>
        <Footer />
        </>
    )
}

export default ShoppingCartComplete

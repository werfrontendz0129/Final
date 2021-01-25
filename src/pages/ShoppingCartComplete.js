import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../components/ShoppingCart-Process-Bar/shoppingprocessbar';
import CheckoutTableInfo from '../components/Checkout-Table-Info/CheckoutTableInfo'
import CheckoutTableItemListRental from '../components/Checkout-Table-ItemList-Rental/CheckoutTableItemListRental'
import CheckoutTableItemListPurchase from '../components/Checkout-Table-ItemList-Purchase/CheckoutTableItemListPurchase'

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
                <CheckoutTableInfo />
                <CheckoutTableItemListRental />
                <CheckoutTableItemListPurchase />
        </div>
            
        </>
    )
}

export default ShoppingCartComplete

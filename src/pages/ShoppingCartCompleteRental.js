import React from 'react'
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import CheckoutTableInfo from '../component/Checkout-Table-Info-Rental/CheckoutTableInfo'
import CheckoutTableItemListRental from '../component/Checkout-Table-ItemList-Rental/CheckoutTableItemListRental'


function ShoppingCartComplete() {
    return (
        <>
        <div className="b-paddingLR">
            <div className="b-completepage-header">
                    <div>
                        {/* <Breadcrumb /> */}
                        <div className="b-complete-cart-title">
                            <p className="mb-2">結帳</p>
                        </div>
                    </div>
                    <Shoppingprocessbar shopping address payment complete ></Shoppingprocessbar>
                </div>
                <div className="b-complete-noonspace"></div>
                <CheckoutTableInfo />
                <CheckoutTableItemListRental />
        </div>
            
        </>
    )
}

export default ShoppingCartComplete

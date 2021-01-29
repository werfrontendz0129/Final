import React from 'react'
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import CheckoutTableInfo from '../component/Checkout-Table-Info-Rental/CheckoutTableInfo'
import CheckoutTableItemListRental from '../component/Checkout-Table-ItemList-Rental/CheckoutTableItemListRental'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'


function ShoppingCartComplete() {
    return (
        <>
        <Header />
        <div className="test">
        <div className="b-paddingLR">
            <div className="b-completepage-header" style={{marginTop:0}}>
                    <div>
                        {/* <Breadcrumb /> */}
                        <div className="b-complete-cart-title" style={{marginTop:80}}>
                            <p className="mb-2">結帳</p>
                        </div>
                    </div>
                    <Shoppingprocessbar shopping address payment complete ></Shoppingprocessbar>
                </div>
                <CheckoutTableInfo />
                <CheckoutTableItemListRental />
        </div>
        </div>
        <Footer />
        </>
    )
}

export default ShoppingCartComplete

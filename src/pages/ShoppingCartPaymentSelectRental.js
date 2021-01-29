import React from 'react';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartShall from '../component/ShoppingCart-Shall/ShoppingCartShall'
import CheckoutCheckoutBoxPaymentSelectRental from '../component/Checkout-CheckoutBox-PaymentSelect-Rental/CheckoutCheckoutBoxPaymentSelectRental'
import CheckoutModalAddPayment from '../component/Checkout-Modal-AddPayment/CheckoutModalAddPayment'
import Footer from '../component/Footer/Footer'
import Header from '../component/Header/Header'


function ShoppingCartPaymentSelect() {
    return (
        <>
        <Header />
        <div className="test">
        <div className="b-paddingLR">
            <div className="b-checkout-payment-header" style={{marginTop:0}}>
                <div>
                    <Breadcrumb />
                    <div className="b-checkout-payment-breadtitle" style={{paddingTop:80}}>
                        <p>結帳</p>
                    </div>
                </div>
                <Shoppingprocessbar shopping address payment ></Shoppingprocessbar>
                </div>
                <div class="b-checkout-payment-titlebar" style={{marginTop:0}}>
                    <p>選擇付款方式</p>
                    <CheckoutModalAddPayment />
                </div>
                <ShoppingCartShall>
                    <CheckoutCheckoutBoxPaymentSelectRental />
                </ShoppingCartShall>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default ShoppingCartPaymentSelect

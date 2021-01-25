import React from 'react';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartShall from '../component/ShoppingCart-Shall/ShoppingCartShall'
import CheckoutCheckoutBoxPaymentSelectPurchase from '../component/ShoppingCart_Purchase/Checkout-CheckoutBox-PaymentSelect-Purchase/CheckoutCheckoutBoxPaymentSelectPurchase'
import CheckoutModalAddPayment from '../component/Checkout-Modal-AddPayment/CheckoutModalAddPayment'


function ShoppingCartPaymentSelect() {
    return (
        <>
        <div className="b-paddingLR">
            <div className="b-checkout-payment-header">
                <div>
                    <Breadcrumb />
                    <div className="b-checkout-payment-breadtitle">
                        <p className="mb-2">結帳</p>
                    </div>
                </div>
                <Shoppingprocessbar shopping address payment ></Shoppingprocessbar>
                </div>
                <div class="b-checkout-payment-titlebar">
                    <p>選擇付款方式</p>
                    <CheckoutModalAddPayment />
                </div>
                <ShoppingCartShall>
                    <CheckoutCheckoutBoxPaymentSelectPurchase />
                </ShoppingCartShall>
        </div>
        </>
    )
}

export default ShoppingCartPaymentSelect

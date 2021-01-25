import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../components/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartShall from '../components/ShoppingCart-Shall/ShoppingCartShall'
import CheckoutPaymentSelectTableTitle from '../components/Checkout-PaymentSelect-TableTitle/CheckoutPaymentSelectTableTitle'
import CheckoutPaymentSelectItemList from '../components/Checkout-PaymentSelect-ItemList/CheckoutPaymentSelectItemList'
import CheckoutCheckoutBoxPaymentSelect from '../components/Checkout-CheckoutBox-PaymentSelect/CheckoutCheckoutBoxPaymentSelect'
import CheckoutModalAddPayment from '../components/Checkout-Modal-AddPayment/CheckoutModalAddPayment'
import Table from 'react-bootstrap/Table'

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
                    <aside className="col-lg-9 p-0">
                    <div className="card border-0">
                        <div className="table-responsive">
                            <Table className="table table-borderless">
                                <thead style={{color: "#969696"}}>
                                    <CheckoutPaymentSelectTableTitle />
                                </thead>  
                                <tbody>
                                    <CheckoutPaymentSelectItemList />
                                    <CheckoutPaymentSelectItemList />
                                    <CheckoutPaymentSelectItemList />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    </aside>
                    <aside className="b-chekcout-payment-checkout-outterbox">
                    <CheckoutCheckoutBoxPaymentSelect />
                    </aside>
                </ShoppingCartShall>
        </div>
        </>
    )
}

export default ShoppingCartPaymentSelect

import React from 'react'
import './CheckoutCheckoutBoxPaymentSelect.scss'
import ModalShippingInfo from '../Modal-wanna-get-more-shipping-info/ModalShippingInfo'
import CheckoutPaymentVerification from '../Checkout-CheckoutBox-PaymentVerification/CheckoutPaymentVerification'

function CheckoutCheckoutBoxPaymentSelect() {
  return (
    <>
      <div className="card .b-checkout-checkoutbox-payment-card position-fixed">
        <div className="card-body">
          <dl className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
            <dt className="font-weight-normal">持卡人：</dt>
            <dd
              className="text-right font-weight-normal"
              style={{ marginLeft: 70 }}
            >
              傅芷萱
            </dd>
          </dl>
          <dl className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
            <dt className="font-weight-normal">卡號後四碼：</dt>
            <dd
              className="text-right text-dark font-weight-normal"
              style={{ marginLeft: 38 }}
            >
              8974
            </dd>
          </dl>
          <dl className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
            <dt className="font-weight-normal">有效期限：</dt>
            <dd
              className="text-right text-dark font-weight-normal"
              style={{ marginLeft: 53 }}
            >
              12/12
            </dd>
          </dl>
          <CheckoutPaymentVerification />
          <dl className="dlist-align mb-5 b-checkout-checkoutbox-payment-dlist-align">
            <dt className="font-weight-normal"></dt>
            <dd
              className="text-right font-weight-normal"
              style={{
                color: '#E58F80',
                marginTop: -10,
                marginBottom: -15,
                fontSize: 14,
              }}
            >
              驗證成功
            </dd>
          </dl>
          <hr />
          <dl className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
            <dt className="font-weight-normal">應付金額:</dt>
            <dd className="text-right text-danger ml-3 font-weight-normal">
              NT$21,000
            </dd>
          </dl>
          <a
            href="#"
            className="btn b-checkout-checkoutbox-payment-btn-main"
            data-abc="true"
            style={{ backgroundColor: '#6C8650', color: '#FFFFFF' }}
          >
            {' '}
            結帳{' '}
          </a>
          <div className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
            <ModalShippingInfo />
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutCheckoutBoxPaymentSelect

import React from 'react'
import './CheckoutBoxAddress.scss'
import ModalShippingInfo from '../Modal-wanna-get-more-shipping-info/ModalShippingInfo'

function CheckoutBoxAddress() {
  return (
    <>
      <div className="b-checkoutbox-address-card ">
        <div className="card-body">
          <dl className="b-checkoutbox-dlist-align-address">
            <dt className="font-weight-normal">收件人:</dt>
            <dd
              className="text-right font-weight-normal"
              style={{ marginLeft: 39 }}
            >
              傅芷萱
            </dd>
          </dl>
          <dl className="b-checkoutbox-dlist-align-address ">
            <dt className="font-weight-normal">連絡電話:</dt>
            <dd
              className="text-right text-dark font-weight-normal"
              style={{ marginLeft: 24 }}
            >
              0978-xxx-317
            </dd>
          </dl>
          <dl className="b-checkoutbox-dlist-align-address">
            <dt className="font-weight-normal">收件地址:</dt>
            <dd
              className="text-right text-dark font-weight-normal"
              style={{ marginLeft: 24, fontSize: 14 }}
            >
              台灣 桃園市 中壢區
            </dd>
          </dl>
          <dl className="b-checkoutbox-dlist-align-address justify-content-between">
            <dt className="font-weight-normal"></dt>
            <dd
              className="text-right text-dark font-weight-normal"
              style={{ marginTop: -10, fontSize: 14 }}
            >
              xxx300號國立中央大學
            </dd>
          </dl>
          <dl className="b-checkoutbox-dlist-align-address">
            <div style={{ height: 30 }}></div>
          </dl>
          <dl className="b-checkoutbox-dlist-align-address">
            <dt className="font-weight-normal">配送方式:</dt>
            <dd className="text-right text-dark ml-4 font-weight-normal">
              宅配
            </dd>
          </dl>
          <dl className="b-checkoutbox-dlist-align-address">
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
              *請注意：大型植栽僅能宅配。
            </dd>
          </dl>
          <hr />
          <dl className="b-checkoutbox-dlist-align-address">
            <dt className="font-weight-normal">應付金額:</dt>
            <dd className="text-right text-danger ml-4 font-weight-normal">
              NT$21,000
            </dd>
          </dl>
          <a
            href="#"
            className="btn b-checkout-checkoutbox-address-btn-main"
            data-abc="true"
          >
            {' '}
            下一步{' '}
          </a>
          <ModalShippingInfo />
        </div>
      </div>
    </>
  )
}

export default CheckoutBoxAddress

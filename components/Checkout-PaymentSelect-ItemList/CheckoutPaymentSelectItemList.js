import React from 'react'
import './CheckoutPaymentSelectItemList.scss'
function CheckoutPaymentSelectItemList({}) {
  return (
    <>
      <tr className="d-flex justify-content-between">
        <th
          className="d-flex justify-content-between align-items-center"
          scope="row"
          width="185"
          height="100"
        >
          <div className="form-check ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault1">
              {'\u00A0'}
              {'\u00A0'}
              {'\u00A0'}
              {'\u00A0'}玉山銀行
            </label>
          </div>
        </th>
        <td
          height="100"
          width="120"
          className="b-checkout-payment-wrap justify-content-center"
        >
          <div>
            <p className="b-payment-checkout-font-size">傅芷萱</p>
          </div>
        </td>
        <td
          className="d-flex justify-content-center align-items-center"
          height="100"
          width="200"
        >
          <div>
            <p className="b-payment-checkout-font-size">American Express</p>
            <p className="b-payment-checkout-font-size">ending 8974 </p>
          </div>
        </td>
        <td
          className="d-flex justify-content-center align-items-center"
          height="100"
          width="100"
        >
          <div className="b-checkout-payment-wrap">
            <p className="m-0">12/22</p>
          </div>
        </td>
        <td
          height="100"
          width="200"
          className="b-checkout-payment-wrap justify-content-center"
        >
          <div>
            <p className="b-checkoutpages1-font-size1">台灣 桃園市 中壢區</p>
            <p className="b-checkoutpages1-font-size1">xxx300號國立中央大學</p>
          </div>
        </td>
        <td className="d-flexer" width="60">
          <button type="button" className="close" aria-label="Close">
            <span>&times;</span>
          </button>
        </td>
      </tr>
      <tr>
        <td className="p-0">
          <div className="b-checkout-payment-line"></div>
        </td>
      </tr>
    </>
  )
}

export default CheckoutPaymentSelectItemList

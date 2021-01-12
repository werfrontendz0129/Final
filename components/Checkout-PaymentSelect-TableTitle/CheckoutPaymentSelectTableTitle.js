import React from 'react'
import './CheckoutPaymentSelectTableTitle.scss'

function CheckoutPaymentSelectTableTitle() {
  return (
    <>
      <tr className="large b-checkout-payment-title-table">
        <th scope="col" width="185" className="text-center p-2">
          自訂名稱
        </th>
        <th scope="col" width="120" className="text-center p-2">
          持卡人
        </th>
        <th scope="col" width="200" className="text-center p-2">
          信用卡
        </th>
        <th scope="col" width="100" className="text-center p-2">
          有效期限
        </th>
        <th scope="col" width="200" className="text-center p-2">
          帳單地址
        </th>
        <th scope="col" width="60" className="p-2"></th>
      </tr>
    </>
  )
}

export default CheckoutPaymentSelectTableTitle

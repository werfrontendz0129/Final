import React, { useState } from 'react'
import './OrderlistTbodyTrP.scss'
import ClicktoDetailButton from '../ClicktoDetailButton/ClicktoDetailButton'
import StatusPurchase from '../StatusPurchase/StatusPurchase'

function OrderlistTbodyTrP() {
  return (
    <>
      <tbody className="w-mycollect-tablebody">
        <tr>
          {/* 訂單編號 */}
          <td className="w-ordernumber align-middle">012021020201</td>
          {/* 訂單日期 */}
          <td className="w-orderdate align-middle">2021-02-02</td>
          {/* 訂單金額 */}
          <td className="align-middle" style={{ color: '#E58F80' }}>
            NT$1000
          </td>
          {/* 訂單狀態 */}
          <td className="align-middle">
            <StatusPurchase />
          </td>
          {/* 選購訂單縮圖 */}
          <td className="align-middle">
            <div className="d-flex">
              <img
                className="w-orderlist-buy-pics"
                src="images/孔雀1.jpg"
                alt=""
              />
              <img
                className="w-orderlist-buy-pics"
                src="images/白菲通尼亞草1.jpg"
                alt=""
              />
            </div>
          </td>
          {/* 訂單詳情button */}
          <td className="align-middle">
            <ClicktoDetailButton />
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default OrderlistTbodyTrP

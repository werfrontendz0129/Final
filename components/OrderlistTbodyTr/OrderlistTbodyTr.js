import React, { useState } from 'react'
import './OrderlistTbodyTr.scss'
import ClicktoDetailButton from '../ClicktoDetailButton/ClicktoDetailButton'
import StatusRental from '../StatusRental/StatusRental'

function OrderlistTbodyTr() {
  return (
    <>
      <tbody className="w-mycollect-tablebody">
        <tr>
          {/* 訂單編號 */}
          <td className="w-ordernumber align-middle">012021020201</td>
          {/* 訂單日期 */}
          <td className="w-orderdate align-middle">2021-02-02</td>
          {/* 訂單金額 */}
          <td className="align-middle" style={{ color: '#838383' }}>
            NT$1000
          </td>
          {/* 訂單狀態 */}
          <td className="align-middle">
            <StatusRental />
          </td>
          {/* 租賃訂單縮圖 */}
          <td className="align-middle">
            <div className="d-flex">
              <img
                className="w-orderlist-buy-pics"
                src="images/Fiddle 琴葉榕大型植栽.jpg"
                alt=""
              />
              <img
                className="w-orderlist-buy-pics"
                src="images/小天使大型植栽1.jpg"
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

export default OrderlistTbodyTr

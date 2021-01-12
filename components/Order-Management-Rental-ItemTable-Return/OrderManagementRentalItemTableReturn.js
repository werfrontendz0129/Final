import React from 'react'
import './OrderManagementRentalItemTableReturn.scss'

function OrderManagementRentalItemTableReturn() {
  return (
    <>
      <tr>
        <td className="align-middle text-center">
          <input type="checkbox" name="" id="" />
        </td>
        <td className="align-middle text-center">
          <div>
            <img
              className="b-member-return-order-orderlistpics"
              src="images/Fiddle 琴葉榕大型植栽.jpg"
              alt=""
            />
          </div>
        </td>
        <td className="b-member-return-order-prod-name align-middle text-center">
          <span>A01</span>
          <p>琴葉榕大型植栽</p>
        </td>
        <td className="align-middle text-center b-member-return-order-rent-starttoend">
          <p>2021-02-02</p>
          <p className="text-center">~</p>
          <p>2021-03-02</p>
        </td>
        <td className="rent-lease-days align-middle text-center">28日</td>
        <td className="orderstatus align-middle text-center">已預約</td>
        <td className="align-middle text-center">5</td>
        <td className="align-middle text-center">500/日</td>
        <td className="align-middle text-center">NT$70,000</td>
      </tr>
    </>
  )
}

export default OrderManagementRentalItemTableReturn

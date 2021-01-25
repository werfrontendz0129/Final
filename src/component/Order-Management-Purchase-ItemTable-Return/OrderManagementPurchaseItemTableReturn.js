import React from 'react'
import './OrderManagementPurchaseItemTableReturn.scss'

function OrderManagementPurchaseItemTableReturn() {
    return (
        <>
         <tr>
                <td className="align-middle text-center">
                    <input type="checkbox" name="" id="" />
                </td>
                <td className="align-middle text-center">
                    <div>
                        <img className="b-member-return-purchase-orderlistpics" src="images/Fiddle 琴葉榕大型植栽.jpg" alt="" />
                    </div>
                </td>
                <td className="b-member-return-purchase-prod-name align-middle text-center">
                    <span>A01</span>
                    <p>琴葉榕大型植栽</p>
                </td>
                <td className="align-middle text-center">NT$5000</td>
                <td className="align-middle text-center">2021-01-02</td>
                <td className="align-middle text-center">5</td>
                <td className="orderstatus align-middle text-center">已出貨</td>
                <td className="align-middle text-center">NT$25,000</td>
            </tr>            
        </>
    )
}

export default OrderManagementPurchaseItemTableReturn

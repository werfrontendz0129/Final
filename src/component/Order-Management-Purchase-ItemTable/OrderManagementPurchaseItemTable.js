import React from 'react';
import {NavLink} from 'react-router-dom'
import './OrderManagementPurchaseItemTable.scss'

function OrderManagementPurchaseItemTable() {
    return (
        <>
        <div className="b-member-purchase-order-account-view">
                <div className="b-member-purchase-order-div-title">
                    <p>選購明細資料</p>
                </div>
                <div className="px-2">
                    <table className="table" style={{width: 900}}>
                        <thead className="table-borderless" style={{backgroundColor: "#E6E9DA"}}>
                            <tr>
                                <th scope="col" width="70px">No.</th>
                                <th scope="col" width="120px"></th>
                                <th scope="col" width="190px">產品名稱</th>
                                <th scope="col" width="150px">產品分類</th>
                                <th scope="col" width="100px">狀態</th>
                                <th scope="col" width="70px">數量</th>
                                <th scope="col" width="100px">單價</th>
                                <th scope="col" width="100px">小計</th>
                            </tr>
                        </thead>
                        <tbody className="b-member-purchase-order-orderlist-rent-detailtable">
                            <tr>
                                <td className="order-id align-middle">01</td>
                                <td className="align-middle">
                                    <div>
                                        <img className="b-member-purchase-order-orderlistpics" src="images/孔雀1.jpg" alt="" />
                                    </div>
                                </td>
                                <td className="b-member-purchase-order-prod-name align-middle">
                                    <span>B01</span>
                                    <p>小星點</p>
                                </td>
                                <td className="align-middle">大型植栽</td>
                                <td className="b-member-purchase-orderorderstatus align-middle">已完成</td>
                                <td className="align-middle">1</td>
                                <td className="align-middle">NT$100</td>
                                <td className="align-middle">NT$100</td>
                            </tr>
                            <tr>
                                <td className="order-id align-middle">02</td>
                                <td className="align-middle">
                                    <div>
                                        <img className="b-member-purchase-order-orderlistpics" src="images/白菲通尼亞草1.jpg" alt="" />
                                    </div>
                                </td>
                                <td className="prod-name align-middle">
                                    <span>B03</span>
                                    <p>白菲通尼亞草</p>
                                </td>
                                <td className="align-middle">大型植栽</td>
                                <td className="b-member-purchase-order-orderstatus align-middle">已完成</td>
                                <td className="align-middle">1</td>
                                <td className="align-middle">NT$120</td>
                                <td className="align-middle">NT$120</td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="b-member-purchase-order-buttonblock d-flex justify-content-center">
                        <NavLink to='/members/:name/purchase_management' type="button" className="b-member-purchase-order-btn b-member-purchase-order-btn-checkelse">查看其他訂單</NavLink>
                        <NavLink to='/members/:name&:order_id/purchase_return' type="button" className="b-member-purchase-order-btn b-member-purchase-order-btn-cancelrent">申請退租</NavLink>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default OrderManagementPurchaseItemTable

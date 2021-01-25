import React from 'react';
import './OrderManagementPurchaseInfoTable.scss';

function OrderManagementPurchaseInfoTable() {
    return (
        <>
        <div class="b-member-purchase-order-orderlist-detail-all">
                <div class="b-member-purchase-order-div-title">
                    <p>選購訂單詳情</p>
                </div>
                <div class="row b-member-purchase-order-orderlist-detail">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td className="b-member-purchase-order-style1">訂單編號：</td>
                                <td className="b-member-purchase-order-style2">012021020201</td>
                                <td className="b-member-purchase-order-style1">配送編號：</td>
                                <td className="b-member-purchase-order-style2">00704329977</td>
                            </tr>
                            <tr>
                                <td className="b-member-purchase-order-style1">訂單日期：</td>
                                <td className="b-member-purchase-order-style2">2020-12-12</td>
                                <td className="b-member-purchase-order-style1">收件人：</td>
                                <td className="b-member-purchase-order-style2">傅芷萱</td>
                            </tr>
                            <tr>
                                <td className="b-member-purchase-order-style1">訂單狀態：</td>
                                <td style={{color: "#6C8650", fontSize: 14}}>已完成</td>
                                <td className="b-member-purchase-order-style1">收件地址：</td>
                                <td className="b-member-purchase-order-style2">320桃園市中壢區中大路300號國立中央大學</td>
                            </tr>
                            <tr>
                                <td className="b-member-purchase-order-style1">出貨日期：</td>
                                <td className="b-member-purchase-order-style2">2020-12-13</td>
                            </tr>
                            <tr>
                                <td className="b-member-purchase-order-style1">付款方式：</td>
                                <td className="b-member-purchase-order-style2">信用卡付款</td>
                            </tr>
                            <tr>
                                <td className="b-member-purchase-order-style1">配送方式：</td>
                                <td className="b-member-purchase-order-style2">宅配</td>
                            </tr>
                        </tbody>
                        <tbody style={{background: "#EBEBEB"}}>
                            <tr>
                                <td className="b-member-purchase-order-style1">訂單金額：</td>
                                <td className="b-member-purchase-order-style2">NT$140,000</td>
                                <td className="b-member-purchase-order-style1">訂單備註：</td>
                                <td style={{color: "#E58F80", fontSize: 14}}>無</td>
                            </tr>
                            <tr>
                                <td className="b-member-purchase-order-style1">運費：</td>
                                <td className="b-member-purchase-order-style2">NT$0</td>
                                <td className="b-member-purchase-order-style1">訂單狀態：</td>
                                <td className="b-member-purchase-order-style2">2已完成</td>
                            </tr>
                            <tr>
                                <td className="b-member-purchase-order-style1">折扣金額：</td>
                                <td className="b-member-purchase-order-style2">NT$0</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="b-member-purchase-order-style1">應付金額：</td>
                                <td className="b-member-purchase-order-style2">NT$140,000</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OrderManagementPurchaseInfoTable

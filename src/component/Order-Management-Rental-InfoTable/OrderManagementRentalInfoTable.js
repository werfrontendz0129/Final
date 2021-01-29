import React, {useState,useEffect} from 'react'
import './OrderManagementRentalInfoTable.scss'
import Axios from 'axios';

function OrderManagementRentalInfoTable() {
    const[orderview, setOrderview] = useState([]);
    const[orderpriceview, setOrderpriceview] = useState([]);
    const Return = JSON.parse(localStorage.getItem('submit')) || '[]'

    useEffect(()=>{
        Axios.get('http://localhost:3001/orderList/')
        .then((response) => {
            setOrderview(response.data[0].user_rental[0]) 
            setOrderpriceview(response.data[0].user_rental[0].Price[0]) 
        })
        .catch((error) => console.log(error))
        }, [])
    return orderview && (
        <>   
                <div class="b-member-Rental-order-orderlist-detail-all">
                <div class="b-member-Rental-order-div-title">
                    <p>租賃訂單詳情</p>
                </div>
                <div class="row b-member-Rental-order-orderlist-detail">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td className="b-member-Rental-order-style1">訂單編號：</td>
                                <td className="b-member-Rental-order-style2">{orderview.orderNumber}</td>
                                <td className="b-member-Rental-order-style1">配送編號：</td>
                                <td className="b-member-Rental-order-style2">00704329977</td>
                            </tr>
                            <tr>
                                <td className="b-member-Rental-order-style1">訂單日期：</td>
                                <td className="b-member-Rental-order-style2">{orderview.orderDate}</td>
                                <td className="b-member-Rental-order-style1">收件人：</td>
                                <td className="b-member-Rental-order-style2">{orderview.Receiver}</td>
                            </tr>
                            <tr>
                                <td className="b-member-Rental-order-style1">訂單狀態：</td>
                                <td style={{color: "#6C8650", fontSize: 14}}>已完成</td>
                                <td className="b-member-Rental-order-style1">收件地址：</td>
                                <td className="b-member-Rental-order-style2">{orderview.shippingaddress}</td>
                            </tr>
                            <tr>
                                <td className="b-member-Rental-order-style1">預計出貨日期：</td>
                                <td className="b-member-Rental-order-style2">{orderview.orderDate}</td>
                            </tr>
                            <tr>
                                <td className="b-member-Rental-order-style1">付款方式：</td>
                                <td className="b-member-Rental-order-style2">信用卡付款</td>
                            </tr>
                            <tr>
                                <td className="b-member-Rental-order-style1">配送方式：</td>
                                <td className="b-member-Rental-order-style2">宅配</td>
                            </tr>
                        </tbody>
                        <tbody style={{background: "#EBEBEB"}}>
                            <tr>
                                <td className="b-member-Rental-order-style1">訂單金額：</td>
                                <td className="b-member-Rental-order-style2">NT${orderpriceview.supTotal}</td>
                                <td className="b-member-Rental-order-style1">訂單備註：</td>
                                <td style={{color: "#E58F80", fontSize: 14}}>無</td>
                            </tr>
                            <tr>
                                <td className="b-member-Rental-order-style1">運費：</td>
                                <td className="b-member-Rental-order-style2">NT${orderpriceview.shippingCost}</td>
                                <td className="b-member-Rental-order-style1">訂單狀態：</td>
                                {Return == '[]'? (  <td className="b-member-Rental-order-style2">已完成</td>)
                                :
                                ( <td className="b-member-Rental-order-style2" style={{color:"#E58F80"}}>退租申請已送出</td>)
                                }
                            </tr>
                            <tr>
                                <td className="b-member-Rental-order-style1">折扣金額：</td>
                                <td className="b-member-Rental-order-style2">NT${orderpriceview.Coupon}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="b-member-Rental-order-style1">應付金額：</td>
                                <td className="b-member-Rental-order-style2">NT${orderpriceview.Total}</td>
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

export default OrderManagementRentalInfoTable

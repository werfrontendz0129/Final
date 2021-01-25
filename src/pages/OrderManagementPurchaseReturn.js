import React from 'react'
import {NavLink} from 'react-router-dom'
import MemberAvatar from '../component/MemberAvatar/MemberAvatar';
import MemberContent from '../component/MemberContent/MemberContent';
import OrderManagementPurchaseItemTableReturn from '../component/Order-Management-Purchase-ItemTable-Return/OrderManagementPurchaseItemTableReturn'

function OrderManagementPurchaseReturn() {
    return (
        <>
        <section className="b-member-return-purchase-wrapper">
            <div className=" b-member-return-purchase-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="b-member-return-purchase-article">
            <div>
                <div style={{marginLeft: 50}}>
                    <div className="b-member-return-purchase-div-title">
                        <p>選擇退貨商品</p>
                    </div>
                    <ul className="row list-unstyled" style={{color: "#E58F80"}}>
                        <li>*請注意：</li>
                        <li>
                            <p style={{marginBottom: 0}}>1.運送中商品無法進行退貨。</p>
                            <p>2.如需退貨或換貨，請於收到貨品後的7天內提出申請，否則恕不接受。</p>
                        </li>
                    </ul>
                </div>
                <div className="b-member-return-purchase-orderlist-main px-2">
                    <table className="table table-hover" style={{width: 900}}>
                        <thead className="table-borderless" style={{backgroundColor: "#E6E9DA"}}>
                            <tr>
                                <th scope="col" width="100px" className="text-center">選擇</th>
                                <th scope="col" width="120px" className="text-center"></th>
                                <th scope="col" width="150px" className="text-center">產品名稱</th>
                                <th scope="col" width="100px" className="text-center">單價</th>
                                <th scope="col" width="120px" className="text-center">購買日期</th>
                                <th scope="col" width="100px" className="text-center">數量</th>
                                <th scope="col" width="120px" className="text-center">訂單狀態</th>
                                <th scope="col" width="100px" className="text-center">小計</th>

                            </tr>
                        </thead>
                        <tbody className="b-member-return-purchase-orderlist-rent-detailtable">
                            <OrderManagementPurchaseItemTableReturn />
                            <OrderManagementPurchaseItemTableReturn />
                            <OrderManagementPurchaseItemTableReturn />
                        </tbody>
                    </table>
                    <div className="b-member-return-purchase-buttonblock d-flex justify-content-center">
                        <NavLink to='/members/:name&:order_id/purchase_detail' type="button" className="b-member-return-purchase-btn b-member-return-purchase-btn-checkelse">返回</NavLink>
                        <NavLink to='submit to backend' type="button" className="b-member-return-purchase-btn b-member-return-purchase-btn-cancelrent">申請退貨</NavLink>
                    </div>
                </div>
            </div>
        </div>
            </section>
             
        </>
    )
}

export default OrderManagementPurchaseReturn

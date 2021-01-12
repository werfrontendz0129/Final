import React from 'react'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar';
import MemberContent from '../components/MemberContent/MemberContent';
import OrderManagementRentalItemTableReturn from '../components/Order-Management-Rental-ItemTable-Return/OrderManagementRentalItemTableReturn'

function OrderManagementRentalReturn() {
    return (
        <>
            <section className="b-member-return-order-wrapper">
            <div className=" b-member-return-order-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="b-member-return-order-article">
            <div>
                <div style={{marginLeft: 50}}>
                    <div className="b-member-return-order-div-title">
                        <p>選擇退租商品</p>
                    </div>
                    <ul className="row list-unstyled" style={{color: "#E58F80"}}>
                        <li>*請注意：</li>
                        <li>
                            <p style={{marginBottom: 0}}>1.租賃中商品無法進行退租。</p>
                            <p>2.已預約商品，若要修改租賃區間，請退出後重新下單。</p>
                        </li>
                    </ul>
                </div>
                <div className="b-member-return-order-orderlist-main px-2">
                    <table className="table table-hover" style={{width: 900}}>
                        <thead className="table-borderless" style={{backgroundColor: "#E6E9DA"}}>
                            <tr>
                                <th scope="col" width="70px" className="text-center">選擇</th>
                                <th scope="col" width="100px" className="text-center"></th>
                                <th scope="col" width="150px" className="text-center">產品名稱</th>
                                <th scope="col" width="130px" className="text-center">租賃區間</th>
                                <th scope="col" width="100px" className="text-center">租賃時間</th>
                                <th scope="col" width="100px" className="text-center">購買狀態</th>
                                <th scope="col" width="70px" className="text-center">數量</th>
                                <th scope="col" width="100px" className="text-center">單價</th>
                                <th scope="col" width="100px" className="text-center">小計</th>

                            </tr>
                        </thead>
                        <tbody className="b-member-return-order-orderlist-rent-detailtable">
                            <OrderManagementRentalItemTableReturn />
                            <OrderManagementRentalItemTableReturn />
                            <OrderManagementRentalItemTableReturn />
                        </tbody>
                    </table>
                    <div className="b-member-return-order-buttonblock d-flex justify-content-center">
                        <button type="button" className="btn b-member-return-order-btn b-member-return-btn-checkelse">返回</button>
                        <button type="button" className="btn b-member-return-order-btn b-member-return-btn-cancelrent">申請退租</button>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </>
    )
}

export default OrderManagementRentalReturn

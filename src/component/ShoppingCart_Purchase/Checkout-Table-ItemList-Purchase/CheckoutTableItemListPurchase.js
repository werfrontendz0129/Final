import React from 'react';
import {NavLink} from 'react-router-dom';
import './CheckoutTableItemListPurchase.scss';

function CheckoutTableItemListPurchase() {
    return (
        <>
            <div className="b-completepage-itemlist-buy">
            <div className="row">
                    <h4>選購商品列表</h4>
                    <div className="card " style={{minWidth: "100%",  border:0}}>
                            <table className="table table-borderless">
                                <thead className="text-muted ">
                                    <tr className="large text-uppercase d-flex justify-content-between b-complete-tableTitle-buy">
                                        <th scope="col" width="10%" className="text-center p-2">No.</th>
                                        <th scope="col" width="12%" className="p-2"></th>
                                        <th scope="col" width="17%" className="text-center p-2">產品名稱</th>
                                        <th scope="col" width="11%" className="text-center p-2">價格</th>
                                        <th scope="col" width="20%" className="text-center p-2">租賃分類</th>
                                        <th scope="col" width="12%" className="text-center p-2">數量</th>
                                        <th scope="col" width="12%" className="text-center p-2">小記</th>
                                        <th scope="col" width="6%" className="text-center p-2"></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="d-flex justify-content-between"> 
                                        <td className="d-flex justify-content-center align-items-center" height="140" width="10%">
                                        <p>01</p>
                                        </td>
                                        <th className="d-flex justify-content-between align-items-center" scope="row" width="12%" height="140">
                                            <class className="aside"><img src="http://localhost:3000/images/檸檬香蜂草禮盒.jpg" className="b-complete-img-sm-buy" /></class>
                                        </th>
                                        <td className="d-flex justify-content-center align-items-center" width="17%" height="140">
                                            <div className="d-flex flex-column"> 
                                                <p className="text-dark mb-1" style={{fontSize: 16, fontWeight: "500"}}>白葉到手香禮盒</p>
                                                <div className="small" style={{fontSize: 12, color: "#838383"}}>
                                                    <p className="mb-0">白葉到手香緞帶小盆栽 x1</p>
                                                    <p className="mb-0">小菜小卡 x1</p>
                                                    <p className="mb-0">綠手指指南教學 x1</p>
                                                    <p className="mb-0">小菜植物設計專用禮物提盒 x1</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center" height="140" width="11%">
                                            <div >NT$1700</div>
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center" width="20%" height="140">
                                            <div>精緻禮盒</div>
                                        </td>
                                        <td height="140" width="12%" className="b-completepage-detailinfo-buy justify-content-center">
                                            <p>5</p>
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center" height="140" width="12%">
                                            <div >NT$500</div>
                                        </td>
                                        <th className="d-flex justify-content-between align-items-center" scope="row" width="6%" height="140">
                                        </th>
                                        
                                    </tr>
                                    <tr>
                                        <td className="p-0"><div style={{width: "100%", height: 1, borderTop: '1px solid #D1CFCF', padding: 0}}></div></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <NavLink  to="/" className="b-completepage-button-to-mainpages-buy" data-abc="true" > 返回購物 </NavLink>
            </div> 
        </>
    )
}

export default CheckoutTableItemListPurchase

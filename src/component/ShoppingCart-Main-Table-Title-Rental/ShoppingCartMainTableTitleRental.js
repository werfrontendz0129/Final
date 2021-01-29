import React from 'react';
import './ShoppingCartMainTableTitleRental.scss'

function ShoppingCartMainTableTitle(){
    return(
    <>
        <tr className="large b-shoppingcart-rental-table-title-style">
            <th scope="col" width="145" className="p-2"></th>
            <th scope="col" width="205" className="text-center p-2">產品名稱</th>
            <th scope="col" width="100" className="text-center p-2">價格</th>
            <th scope="col" width="200" className="text-center p-2">租賃區間</th>
            <th scope="col" width="120" className="text-center p-2">數量</th>
            <th scope="col" width="100" className="text-center p-2">小計</th>
            <th scope="col" width="30" className="p-0"></th>
        </tr>
    </>
    )}

export default ShoppingCartMainTableTitle
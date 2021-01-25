import React from 'react';
import './ShoppingCartMainTableTitlePurchase.scss'

function ShoppingCartMainTableTitlePurchase(){
    return(
    <>
        <tr className="large d-flex justify-content-between b-shoppingcart-purchase-table-title-text-uppercase">
            <th scope="col" width="150" className="p-2"></th>
            <th scope="col" width="200" className="text-center p-2">產品名稱</th>
            <th scope="col" width="150" className="text-center p-2">價格</th>
            <th scope="col" width="150" className="text-center p-2">租賃分類</th>
            <th scope="col" width="100" className="text-center p-2">數量</th>
            <th scope="col" width="100" className="text-center p-2">小記</th>
            <th scope="col" width="50" className="p-2"></th>
        </tr>
    </>
    )}

export default ShoppingCartMainTableTitlePurchase
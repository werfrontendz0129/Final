import React from 'react';
import './CheckoutAddressSelectTableTitle.scss'

function CheckoutAddressSelectTableTitle(){
    return(
    <>
        <tr class="large b-checkout-address-text-uppercase d-flex justify-content-between">
            <th scope="col" width="185" class="text-center p-2">自訂名稱</th>
            <th scope="col" width="170" class="text-center p-2">收件人</th>
            <th scope="col" width="90" class="text-center p-2">配送方式</th>
            <th scope="col" width="250" class="text-center p-2">收件地址</th>
            <th scope="col" width="150" class="text-center p-2">資料修改</th>
            <th scope="col" width="50" class="p-2"></th>
        </tr>
    </>
    )}

export default CheckoutAddressSelectTableTitle
import React, {useState} from 'react'
import './PurchaseOrderContent.scss'
import OrderlistTablePurchase from '../OrderlistTablePurchase/OrderlistTablePurchase'
import OrderlistNoPurchase from '../OrderlistNoPurchase/OrderlistNoPurchase'

function PurchaseOrderContent() {
    return (
        <>
        <div>
        <div className="w-div-title pl-4">
            <p>選購訂單管理</p>
        </div>
                <div className="orderlist-main px-2">
                    {/* 有商品則顯示table，無商品則顯示no */}
                    <OrderlistTablePurchase />
                    {/* <OrderlistNoPurchase /> */}
                </div>
            </div>
        </>
    )
}

export default PurchaseOrderContent
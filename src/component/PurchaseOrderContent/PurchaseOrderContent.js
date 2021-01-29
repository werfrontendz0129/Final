import React, {useState} from 'react'
import './PurchaseOrderContent.scss'
import OrderlistTablePurchase from '../OrderlistTablePurchase/OrderlistTablePurchase'
// import OrderlistNoPurchase from '../OrderlistNoPurchase/OrderlistNoPurchase'
import {withRouter} from 'react-router-dom'

function PurchaseOrderContent(props) {
    // console.log(props)
    
    return (
        <>
        <div>
        <div className="w-div-title pl-4">
            <p>選購訂單管理</p>
        </div>
                <div className="orderlist-main px-2">
                    <OrderlistTablePurchase id={props.match.params.id}/>
                    {/* <OrderlistNoPurchase /> */}
                </div>
            </div>
        </>
    )
}

export default withRouter(PurchaseOrderContent)
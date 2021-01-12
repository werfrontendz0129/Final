import React, {useState} from 'react'
import './OrderlistTableRental.scss'
import Pagination from '../Pagination/Pagination'
import OrderlistTbodyTr from '../OrderlistTbodyTr/OrderlistTbodyTr'
import OrderlistTableheadR from '../OrderlistTableheadR/OrderlistTableheadR'


function OrderlistTableRental() {
    return (
        <>
        <div>
        <div className="w-div-title pl-4">
            <p>租賃訂單管理</p>
        </div>
                <div className="orderlist-main px-2">
                    <table className="table table-responsive w-orderlist-buy-table" style={{width: 900}}>
                    <OrderlistTableheadR />
                    <OrderlistTbodyTr />
                    </table>
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default OrderlistTableRental
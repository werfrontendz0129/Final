import React, { useState } from 'react'
import './OrderlistTablePurchase.scss'
import Pagination from '../Pagination/Pagination'
import OrderlistTbodyTrP from '../OrderlistTbodyTrP/OrderlistTbodyTrP'
import OrderlistTableheadP from '../OrderlistTableheadP/OrderlistTableheadP'

function OrderlistTablePurchase() {
  return (
    <>
      <table
        className="table table-responsive w-orderlist-buy-table"
        style={{ width: 900 }}
      >
        <OrderlistTableheadP />
        <OrderlistTbodyTrP />
      </table>
      <Pagination />
    </>
  )
}

export default OrderlistTablePurchase

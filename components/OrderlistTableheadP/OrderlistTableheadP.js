import React, { useState } from 'react'

function OrderlistTableheadP() {
  return (
    <>
      <thead style={{ backgroundColor: '#E6E9DA' }}>
        <tr>
          <th scope="col" style={{ width: 150 }}>
            訂單編號
          </th>
          <th scope="col" style={{ width: 150 }}>
            訂單日期
          </th>
          <th scope="col" style={{ width: 150 }}>
            訂單金額
          </th>
          <th scope="col" style={{ width: 150 }}>
            訂單狀態
          </th>
          <th scope="col" style={{ width: 150 }}></th>
          <th scope="col" style={{ width: 150 }}></th>
        </tr>
      </thead>
    </>
  )
}

export default OrderlistTableheadP

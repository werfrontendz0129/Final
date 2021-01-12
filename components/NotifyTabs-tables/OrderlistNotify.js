import React, { useState } from 'react'
import './NotifyTables.scss'
import ClicktoRemoveButton from '../ClicktoRemoveButton/ClicktoRemoveButton'
import Pagination from '../Pagination/Pagination'

function OrderlistNotify() {
  return (
    <>
      <div className="w-notifydiv">
        <table className="table table-borderless w-notify-table">
          <tbody>
            <tr>
              <td style={{ width: 150, textAlign: 'center' }}>【訂單通知】</td>
              <td style={{ width: 500, textAlign: 'left' }}>
                您在2020年12月3日租賃了琴葉榕大型植栽
              </td>
              <td>
                <ClicktoRemoveButton />
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </>
  )
}

export default OrderlistNotify

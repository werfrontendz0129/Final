import React, { useState } from 'react'
import './NotifyTables.scss'
import ClicktoRemoveButton from '../ClicktoRemoveButton/ClicktoRemoveButton'

function AccountNotify() {
  return (
    <>
      <div className="w-notifydiv">
        <table className="table table-borderless w-notify-table">
          <tbody>
            <tr>
              <td style={{ width: 150, textAlign: 'center' }}>【帳戶通知】</td>
              <td style={{ width: 500, textAlign: 'left' }}>
                您在2020年12月3日修改了個人檔案
              </td>
              <td>
                <ClicktoRemoveButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AccountNotify

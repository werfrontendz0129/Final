import React, { useState } from 'react'
import './NotifyTables.scss'
import ClicktoRemoveButton from '../ClicktoRemoveButton/ClicktoRemoveButton'

function LessonNotify() {
  return (
    <>
      <div className="w-notifydiv">
        <table className="table table-borderless w-notify-table">
          <tbody>
            <tr>
              <td style={{ width: 150, textAlign: 'center' }}>【課程通知】</td>
              <td style={{ width: 500, textAlign: 'left' }}>
                您在2020年12月3日預約了雞蛋花手作課程
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

export default LessonNotify

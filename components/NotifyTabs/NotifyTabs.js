import React, { useState } from 'react'
import './NotifyTabs.scss'
import { Tabs, Tab } from 'react-bootstrap'
import AccountNotify from '../NotifyTabs-tables/AccountNotify'
import OrderlistNotify from '../NotifyTabs-tables/OrderlistNotify'
import LessonNotify from '../NotifyTabs-tables/LessonNotify'

function NotifyTabs() {
  const [key, setKey] = useState('accountnotify')
  return (
    <>
      <div>
        <div className="w-div-title">
          <p>訊息通知</p>
        </div>
        <div className="w-notify-main">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab
              tabClassName="w-notifytabtitle"
              eventKey="accountnotify"
              title="帳戶通知"
            >
              <AccountNotify />
            </Tab>
            <Tab
              tabClassName="w-notifytabtitle"
              eventKey="orderlistnotify"
              title="訂單通知"
            >
              <OrderlistNotify />
            </Tab>
            <Tab
              tabClassName="w-notifytabtitle"
              eventKey="lessonnotify"
              title="課程通知"
            >
              <LessonNotify />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default NotifyTabs

import React from 'react'
import './MemberContent.scss'
import { ListGroup } from 'react-bootstrap'
import { BsChevronUp } from 'react-icons/bs'

function MemberContent() {
  return (
    <>
      <ListGroup as="ul" variant="flush">
        <ListGroup.Item as="li" style={{ background: '#e6e9da' }}>
          <p className="w-cardlistp d-inline">
            會員中心
            <BsChevronUp className="w-iconup" size="20" />
          </p>
        </ListGroup.Item>
        <ListGroup.Item as="li">帳戶資訊</ListGroup.Item>
        <ListGroup.Item as="li">編輯個人檔案</ListGroup.Item>
        <ListGroup.Item as="li">訊息通知</ListGroup.Item>
        <ListGroup.Item as="li">我的收藏</ListGroup.Item>
      </ListGroup>
      <ListGroup as="ul" variant="flush">
        <ListGroup.Item as="li" style={{ background: '#e6e9da' }}>
          <p className="w-cardlistp d-inline">
            訂單管理
            <BsChevronUp className="w-iconup" size="20" />
          </p>
        </ListGroup.Item>
        <ListGroup.Item as="li">租賃訂單管理</ListGroup.Item>
        <ListGroup.Item as="li">選購訂單管理</ListGroup.Item>
      </ListGroup>
      <ListGroup as="ul" variant="flush">
        <ListGroup.Item as="li" style={{ background: '#e6e9da' }}>
          <p className="w-cardlistp d-inline">
            課程管理
            <BsChevronUp className="w-iconup" size="20" />
          </p>
        </ListGroup.Item>
        <ListGroup.Item as="li">課程預約管理</ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default MemberContent

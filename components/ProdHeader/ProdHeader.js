import React from 'react'

import { devUrl } from '../../config/index'
import './ProdHeader.scss'
// import Row from 'react-bootstrap/Row'
// import { Link, Router } from 'react-router-dom'

function ProdHeader() {
  return (
    <>
      <div className="header row no-gutters">
        <div className="d-flex col-md-1 align-items-center justify-content-center p-0">
          <figure className="logo">
            <img src={devUrl + '/images/svg/logo-dark.svg'} alt="" />
          </figure>
        </div>
        <div className="d-flex col-md-1"></div>
        <div className="d-flex col-md-5 align-items-center">
          <div className="menu1">植物租賃</div>
          <div className="menu1">植物選購</div>
          <div className="menu1">教學課程</div>
          <div className="menu1">關於我們</div>
        </div>
        <div className="d-flex col-md-5 justify-content-end align-items-center">
          <figure className="Avatar">
            <img src={devUrl + '/images/images/avatar.jpg'} alt="" />
          </figure>
          <div className="menu2">會員中心</div>
          <div className="menu2">|</div>
          <div className="menu2">購物車</div>
          <div className="menu2">|</div>
          <div className="menu2">登入</div>
        </div>
      </div>
    </>
  )
}

export default ProdHeader

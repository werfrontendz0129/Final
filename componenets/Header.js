import React from 'react'
import Logo from '../images/Logo.png'
import Avatar from '../images/avatar.png'
// import Row from 'react-bootstrap/Row'
// import { Link, Router } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header row no-gutters">
        <div className="d-flex col-md-1 align-items-center justify-content-center">
          <figure className="Logo">
            <img src={Logo} alt="" />
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
            <img src={Avatar} alt="" />
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

export default Header

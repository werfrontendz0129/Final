import React from 'react'
import { NavLink } from 'react-router-dom'
import { devUrl } from '../../config/index'
import './ProdHeader.scss'
import '../../pages/vpages.scss'
// import Row from 'react-bootstrap/Row'
// import { Link, Router } from 'react-router-dom'

function ProdHeaderL() {
  return (
    <>
      <div style={{background:'#E6E9DA'}} >
        <div style={{margin:'0 auto'}} className="v-max v-header row no-gutters justify-content-between">

          <div className="d-flex col-md-8 align-items-center justify-content-start p-0 v-mobile">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <div className="v-logo">
              <img src={devUrl + '/images/svg/logo-dark.svg'} alt="" />
            </div>
          </NavLink>
          <div className="justify-content-between row" style={{marginRight:"50px"}}>
          <NavLink style={{textDecoration: 'none'  ,color: "#494949" , marginLeft:"100px"}} to="/rentalguide" activeClassName="v-selected" className="menu1" >
              <div><p className="m-0">植物租賃</p></div>
           </NavLink>
           <NavLink style={{textDecoration: 'none' ,color: "#494949"}} to="/purchaseguide" activeClassName="v-selected2" className="menu1"  >
              <div><p className="m-0">植物選購</p></div>
           </NavLink>
            <div className="menu1"><p className="m-0">教學課程</p></div>
            <div className="menu1"><p className="m-0 ">關於我們</p></div>
          </div>
          
        </div>

        <div className="d-flex col-md-4 justify-content-around align-items-center">
          <div className="Avatar">
            <img src={devUrl + '/images/images/avatar.jpg'} alt="Avatar" />
          </div>

            <div ><p className="menu2 m-0">會員中心</p></div>
            <div ><p className="menu2 m-0">|</p></div>
            <div ><p className="menu2 m-0">購物車</p></div>
            <div ><p className="menu2 m-0">|</p></div>
            <div ><p className="menu2 m-0">登入</p></div>

          {/* <div className="row justify-content-center v-mobile-group">
            <div className="v-mobile-icon"><img style={{width:"18px"}} alt="" src={devUrl+ "/images/svg/mobile-icon-01.svg"} /></div>
            <div className="v-mobile-icon"><img style={{width:"22px"}} alt="" src={devUrl+ "/images/svg/mobile-icon-02.svg"} /></div>
            <div className="v-mobile-icon"><img style={{width:"22px"}} alt="" src={devUrl+ "/images/svg/mobile-icon-03.svg"} /></div>
          </div> */}
        </div>
          </div>
        
      </div>
    </>
  )
}

export default ProdHeaderL

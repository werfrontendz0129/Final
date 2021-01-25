import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../Index/UserContext'
import { devUrl } from '../../config/index'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import {
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

function HeaderIndex(){
  
  const {user , setUser} = useContext(UserContext)
  return (
    <>
      <div className="c-header2 container-fluid ">
        <div className="c-padd row">
          <div className="col-md-2 p-0 d-flex align-items-center">
            <Navbar.Brand>
              <figure>
                <img src={devUrl + '/images/index/Logo2.png'} alt="" />
              </figure>
            </Navbar.Brand>
          </div>
          <div className="col-md-4 p-0 row align-items-center m-0">
           <NavLink to="/rentalguide" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin30px h6">植物租賃</NavLink>
           <NavLink to="/purchaseguide" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin30px h6">植物選購</NavLink>
           <NavLink to="/course" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin30px h6">教學課程</NavLink>
           <NavLink to="/" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin30px h6">關於我們</NavLink>
          </div>
          {/* <div className="col-md-3 p-0"></div> */}
          <div className="col cwid p-0 d-flex align-items-center">
            <div className="c-cw row d-flex align-items-center">
            {
              user?<figure><img src={devUrl + '/images/index/avatar.png'} alt="" /></figure>:<figure><img src={""} alt="" /></figure>
            }
            {
              user?<NavLink to="/member" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin25px h6">會員中心</NavLink>:<NavLink style={{textDecoration: 'none', color: "#FFF"}} to="/register" className="c-margin25px h6">註冊會員</NavLink>
            } 
              <p className="c-margin25px h6">|</p>
              <NavLink to="/checkout/selectpayment-rental" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin25px h6">購物車</NavLink>
              <p className="c-margin25px h6">|</p>
            {
              user?<NavLink to="/" style={{textDecoration: 'none', color: "#FFF"}} onClick={()=>setUser(null)} className="c-margin25px h6">登出</NavLink>:<NavLink to="/login" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin25px h6">登入</NavLink>
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderIndex

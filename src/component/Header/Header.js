import React, {useContext} from 'react'
import {UserContext} from '../Index/UserContext'
import { devUrl } from '../../config/index'
import {NavLink} from 'react-router-dom'
import './header.scss'
function Header(){

  const {user , setUser} = useContext(UserContext)

  return (
    <>
      <div className="c-header1 container-fluid align-content-center">
        <div className="c-padd">
          <div className="col-md-2 p-0 d-flex justify-content-center">
            <NavLink to="/">
              <figure>
                <img src={devUrl + '/images/index/Logo.png'} alt="" />
              </figure>
            </NavLink>
          </div>
          <div className="col-md-10 p-0 row align-items-center justify-content-between m-0">
            <div>
              <NavLink to="/rentalguide" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin30px h6">植物租賃</NavLink>
              <NavLink to="/purchaseguide" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin30px h6">植物選購</NavLink>
              <NavLink to="/course" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin30px h6">教學課程</NavLink>
              <NavLink to="/" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin30px h6">關於我們</NavLink>
            </div>
            <div className="c-cw row d-flex align-items-center">
            {
              user?<figure><img src={devUrl + '/images/index/avatar.png'} alt="" /></figure>:<figure><img src={""} alt="" /></figure>
            }
            {
              user?<NavLink to="/member" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin25px h6">會員中心</NavLink>:<NavLink to="/register" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin25px h6">註冊會員</NavLink>
            } 
              <p className="c-margin25px h6"  style={{textDecoration: 'none', color: "#FFF"}} >|</p>
              <NavLink to="/shoppingcart" style={{textDecoration: 'none', color: "#FFF"}} className="c-margin25px h6">購物車</NavLink>
              <p className="c-margin25px h6"  style={{textDecoration: 'none', color: "#FFF"}}>|</p>
            {
              user?<NavLink to="/" style={{textDecoration: 'none', color: "#FFF"}} onClick={()=>setUser(null)} className="c-margin25px h6">登出</NavLink>:<NavLink to="/login" onClick={()=>setUser(true)} style={{textDecoration: 'none', color: "#FFF"}} className="c-margin25px h6">登入</NavLink>
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

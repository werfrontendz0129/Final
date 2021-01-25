import React from 'react'
import {NavLink} from 'react-router-dom'
import './ProdBreadcrumbs.scss'
import '../../pages/vpages.scss'

function RentBreadcrumbsShort() {
  return (
    <>
    <div className="v-max">
        <nav  aria-label="breadcrumb">
            <ol className="breadcrumb m-0 v-ol" style={{background:"#fff" ,padding:"25px 120px"}}>
            <li className="breadcrumb-item active"><NavLink style={{color: "#494949"}} to="/">首頁</NavLink></li>
                <li className="breadcrumb-item active"><NavLink style={{color: "#494949"}} to="/rentalguide">植物租賃</NavLink></li>
                <li className="breadcrumb-item active"><NavLink style={{color: "#838383"}}  to="/rental/list">租賃商品</NavLink></li>
            </ol>
        </nav>
      </div>
    </>
  )
}


export default RentBreadcrumbsShort

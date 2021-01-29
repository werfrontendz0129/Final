import React from 'react'
import {NavLink} from 'react-router-dom'
import './ProdBreadcrumbs.scss'
import '../../pages/vpages.scss'

function PurchaseBreadcrumbsShort() {
  return (
    <>
    <div className="v-max">
        <nav  aria-label="breadcrumb">
            <ol className="breadcrumb m-0 v-ol" style={{background:"#fff" ,padding:"25px 120px"}}>
            <li className="breadcrumb-item active"><NavLink className="v-li" style={{color: "#494949",textDecoration:"none"}} to="/">首頁</NavLink></li>
                <li className="breadcrumb-item active"><NavLink className="v-li" style={{color: "#494949",textDecoration:"none"}} to="/purchaseguide">植物選購</NavLink></li>
                <li className="breadcrumb-item active"><NavLink className="v-li" style={{color: "#6C8650",textDecoration:"none"}}  to="/purchase/list">選購商品</NavLink></li>
            </ol>
        </nav>
      </div>
    </>
  )
}


export default PurchaseBreadcrumbsShort

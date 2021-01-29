import React from 'react'
import {NavLink} from 'react-router-dom'
import './ProdBreadcrumbs.scss'
import '../../pages/vpages.scss'

function RentBreadcrumbs(props) {
  // console.log(props.value.product_name);
  return (
    <>
    <div className="v-max">
        <nav  aria-label="breadcrumb" >
            <ol className="breadcrumb m-0 v-ol " style={{background:"#fff" ,padding:"25px 120px"}}>
            <li className="breadcrumb-item active"><NavLink className="v-li" style={{color: "#494949"}} to="/">首頁</NavLink></li>
                <li className="breadcrumb-item active v-li"><NavLink className="v-li" style={{color: "#494949"}} to="/rentalguide">植物租賃</NavLink></li>
                <li className="breadcrumb-item active v-li"><NavLink className="v-li" style={{color: "#494949"}}  to="/rental/list">租賃商品</NavLink></li>
                <li className="breadcrumb-item active v-li" aria-current="page" style={{color:'#6C8650'}}>{props.value.product_name}</li>
            </ol>
        </nav>
        </div>
    </>
  )
}


export default RentBreadcrumbs

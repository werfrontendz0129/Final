import React, { useState } from 'react'
import './ProdCardMd.scss'
import { devUrl } from '../../config/index'
import { NavLink } from 'react-router-dom'



function PurchaseCardMd(props) {
  const { prod } = props
  // console.log(prod.product_img);


  return (
    <>
      {/* <div className="v-prod-cat">
        <h3>{prod.product_category}</h3>
        <p></p>
      </div> */}
      {/* 商品卡  */}
      <div className="col-4 p-0">
        <div className="v-product-card-md d-flex">
            <NavLink to={`/purchase/list/${prod._id}`} >
            <figure className="v-prod-figure">
            <img className="v-prod-img" src={prod.product_img} alt="" />
            <figcaption className="h5 v-prod-title">{prod.product_name} </figcaption>
            <p className="v-price">NT$ {prod.product_price}</p>
            </figure>
            </NavLink>
          </div>
      </div>
      
    </>
  )
}

export default PurchaseCardMd

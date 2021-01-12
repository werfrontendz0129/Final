import React from 'react';
import './ShoppingCartCheckoutBox.scss'
import ShoppingCartCoupon from '../ShoppingCart-Coupon/ShoppingCartCoupon'
import ModalShippingInfo from '../Modal-wanna-get-more-shipping-info/ModalShippingInfo'

function ShoppingCartCheckoutBox(){
    return(
    <>
    <div className="card position-fixed">
      <div className="card-body b-shippingcart-box-card-body">
        <dl className="b-shippingcart-boxdlist-align">
            <dt className="font-weight-normal">金額總計:</dt>
            <dd className="text-right ml-3 font-weight-normal">NT$21,000</dd>
        </dl>
            <dl className="b-shippingcart-boxdlist-align">
              <dt className="font-weight-normal">運費:</dt>
              <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 48}}>NT$0</dd>
            </dl>
        <dl className="b-shippingcart-boxdlist-align">
            <dt className="font-weight-normal">搬運費:</dt>
            <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 32}}>NT$0</dd>
        </dl>
            <ShoppingCartCoupon />
              <dl className="b-shippingcart-boxdlist-align">
                <dt className="font-weight-normal">折扣金額:</dt>
                <dd className="text-right mb-0 text-danger ml-3 font-weight-normal">-NT$0</dd>
              </dl>
            <hr className="mt-2 mb-2" /> 
              <dl className="b-shippingcart-boxdlist-align">
                <dt className="font-weight-normal">應付金額:</dt>
                <dd className="text-right text-danger ml-3 font-weight-normal">NT$21,000</dd>
              </dl>
          <a href="#" className="btn b-shippingcart-box-btn-main" data-abc="true"> 租賃結帳 </a> 
          <ModalShippingInfo />
        </div>
      </div>
     </>
    )}

export default ShoppingCartCheckoutBox
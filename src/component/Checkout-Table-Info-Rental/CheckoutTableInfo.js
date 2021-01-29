import React, {useState} from 'react'
import './CheckoutTableInfo.scss'
import Axios from 'axios';

function CheckoutTableInfo() {
    const url = "http://localhost:3001/orderList/create/fullover"
    const shippinginfo = JSON.parse(localStorage.getItem('shipping')) || '[]'
    const paymentinfo = JSON.parse(localStorage.getItem('payment'))|| '[]'
    const price = JSON.parse(localStorage.getItem('prices'))|| '[]'
    const Today= new Date()
    const today = Today.getFullYear() + '-' + (Today.getMonth() + 1) + '-' + Today.getDate();   

    return (
        <>
            <div className="b-completepage-title">
            <p>訂單總覽</p>
            </div>
            <div className="b-order-checkout-view-box">
            <div className="d-flex">
            <div className="card-body" style={{width: "50%"}}>
                <dl className="b-order-checout-info-table-dlist-align">
                    <dt className="font-weight-normal">收件人：</dt>
                    <dd className="text-right ml-5 font-weight-normal">{shippinginfo[0].receiver}</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align" style={{width: 500}}>
                    <dt className="font-weight-normal">收件地址：</dt>
                    <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 32}}>{shippinginfo[0].addressCity}{shippinginfo[0].addressDistrict}{shippinginfo[0].addressDetail}</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align">
                    <dt className="font-weight-normal">配送方式：</dt>
                    <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 32}}>宅配</dd>
                </dl>
            </div>
                <div className="card-body" style={{width: "50%"}}>
                <dl className="b-order-checout-info-table-dlist-align ">
                    <dt className="font-weight-normal">訂單日期：</dt>
                    <dd className="text-right text-dark font-weight-normal b-complete-left-pace">{today}</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align">
                    <dt className="font-weight-normal">訂單狀態：</dt>
                    <dd className="text-right text-dark font-weight-normal b-complete-left-pace">尚未下單</dd>
                </dl>
                </div>
            </div>   
            <div className="d-flex">
            <div className="card-body" style={{width: "50%",  backgroundColor: "#EBEBEB"}}>
                <dl className="b-order-checout-info-table-dlist-align">
                    <dt className="font-weight-normal">訂單金額：</dt>
                    <dd className="text-right font-weight-normal b-complete-left-pace">NT$ {price[0].supTotal}</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align ">
                    <dt className="font-weight-normal">運費：</dt>
                    <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 62}} >NT$ {price[0].shippingCost}</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align">
                    <dt className="font-weight-normal">折扣金額：</dt>
                    <dd className="text-right text-dark font-weight-normal b-complete-left-pace">NT$ {price[0].Coupon}</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align">
                <dt className="font-weight-normal">實付金額：</dt>
                <dd className="text-right text-dark font-weight-normal b-complete-left-pace" style={{color: '#E58F80'}}>NT$ {price[0].Total}</dd>
            </dl>
            </div>
                <div className="card-body" style={{width: "50%",  backgroundColor: "#EBEBEB"}}>
                <dl className="b-order-checout-info-table-dlist-align">
                    <dt className="font-weight-normal">付款方式：</dt>
                    <dd className="text-right font-weight-normal" style={{marginLeft: 32}}>信用卡</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align">
                    <dt className="font-weight-normal">持卡人姓名：</dt>
                    <dd className="text-right font-weight-normal" style={{marginLeft: 17}}>{paymentinfo[0].card_holder}</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align ">
                    <dt className="font-weight-normal">信用卡:</dt>
                    <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 65}}>VISA</dd>
                </dl>
                <dl className="b-order-checout-info-table-dlist-align">
                    <dt className="font-weight-normal">卡號後四碼：</dt>
                    <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 20}}>{paymentinfo=='[]' ? "" : paymentinfo[0].number.slice(-4)}</dd>
                </dl>
                </div>
            </div>
            </div>
        </>
    )
}

export default CheckoutTableInfo

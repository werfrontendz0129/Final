import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './CheckoutBoxAddressPurchase.scss'
import ModalShippingInfo from '../../Modal-wanna-get-more-shipping-info/ModalShippingInfo'

function CheckoutBoxAddressPurchase(props){
  const [myAddress, setMyAddress] = useState([])
  const updateAddressToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('shipping')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      //currentCart[index].amount++
      return
    } else {
      currentCart.push(item)
    }

    
    localStorage.setItem('shipping', JSON.stringify(currentCart))
    // 設定資料
    setMyAddress(currentCart)
  }
    return (
    <>
          <div className="b-checkoutbox-address-card ">
              <div className="card-body">
                  <dl className="b-checkoutbox-dlist-align-address">
                      <dt className="font-weight-normal">收件人:</dt>
                      <dd className="text-right font-weight-normal" style={{marginLeft: 39}}>{props.orderList[props.passdata].receiver}</dd>
                  </dl>
                  <dl className="b-checkoutbox-dlist-align-address ">
                      <dt className="font-weight-normal">連絡電話:</dt>
                      <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 24}}>{(props.orderList[props.passdata].phone)}</dd>
                  </dl>
                  <dl className="b-checkoutbox-dlist-align-address">
                      <dt className="font-weight-normal">收件地址:</dt>
                      <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 24, fontSize: 14}}>{(props.orderList[props.passdata].addressCity)}{(props.orderList[props.passdata].addressDistrict)}</dd>
                  </dl>
                  <dl className="b-checkoutbox-dlist-align-address">
                    <dt className="font-weight-normal"></dt>
                    <dd className="text-right text-dark font-weight-normal" style={{marginTop: -10, marginLeft:92, fontSize: 14}}>{(props.orderList[props.passdata].addressDetail)}</dd>
                  </dl>
                  <dl className="b-checkoutbox-dlist-align-address">
                   <div style={{height:30}}></div>
                  </dl>
                  <dl className="b-checkoutbox-dlist-align-address">
                    <dt className="font-weight-normal">配送方式:</dt>
                    <dd className="text-right text-dark ml-4 font-weight-normal">宅配</dd>
                  </dl>
                  <dl className="b-checkoutbox-dlist-align-address">
                    <dt className="font-weight-normal"></dt>
                    <dd className="text-right font-weight-normal" style={{color:'#E58F80', marginTop: -10, marginBottom: -15, fontSize: 14}}>*請注意：大型植栽僅能宅配。</dd>
                  </dl>
                  <hr /> 
                  {/* <dl className="b-checkoutbox-dlist-align-address">
                    <dt className="font-weight-normal">應付金額:</dt>
                    <dd className="text-right text-danger ml-4 font-weight-normal">NT$21,000</dd>
                  </dl> */}
                  <div className="d-flex justify-content-center align-items-center">
                    <NavLink to='/checkout/selectpayment-purchase' className="b-checkout-checkoutbox-address-btn-main" data-abc="true"
                    onClick={() => {
                      updateAddressToLocalStorage({
                        receiver: props.orderList[props.passdata].receiver,
                        phone: props.orderList[props.passdata].phone,
                        addressCity: props.orderList[props.passdata].addressCity,
                        addressDistrict: props.orderList[props.passdata].addressDistrict,
                        addressDetail: props.orderList[props.passdata].addressDetail
                      })
                    }}
                    > 下一步 </NavLink> 
                  </div>
          <ModalShippingInfo />
        </div>
      </div>
     </>
    )}

export default CheckoutBoxAddressPurchase
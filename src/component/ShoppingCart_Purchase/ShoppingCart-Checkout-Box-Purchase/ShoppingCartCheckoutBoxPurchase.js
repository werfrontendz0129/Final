import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './ShoppingCartCheckoutBoxPurchase.scss';
import ModalShippingInfo from '../../Modal-wanna-get-more-shipping-info/ModalShippingInfo';

function ShoppingCartCheckoutBoxPurchase(props){
  const { order } = props;
  const [coupon, setCoupon] = useState(0)
  const [couponCode, setcouponCode] = useState("")
  const [conponvar, setConponvar] = useState("")
    return(
    <>
    <div className="card position-fixed d-none">
      <div className="card-body b-shippingcart-box-card-body">
        <dl className="b-shippingcart-boxdlist-align">
            <dt className="font-weight-normal">金額總計:</dt>
            <dd className="text-right ml-3 font-weight-normal">NT$21,000</dd>
        </dl>
            <dl className="b-shippingcart-boxdlist-align">
              <dt className="font-weight-normal">運費:</dt>
              <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 48}}>NT${order}</dd>
            </dl>
        <dl className="b-shippingcart-boxdlist-align">
            <dt className="font-weight-normal">搬運費:</dt>
            <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 32}}>NT${order}</dd>
        </dl>
        <div class="mt-3">
          <form>
            <div class="input-group m-0"> 
              <input type="text" class="form-control b-Verification-payment-info mb-1" name="" onChange={(e)=>setcouponCode(e.target.value)} defaultvalue={couponCode} placeholder="驗證碼" />
              <span class="input-group-append"> 
              <input type="button" value="新增" 
              onClick={()=>{
                switch(couponCode){
                  case 'NEW10OFF':
                    return setCoupon(100), setConponvar("折抵成功");
                  case 'NEW15OFF':
                    return setCoupon(150), setConponvar("折抵成功");
                  case 'NEW20OFF':
                    return setCoupon(200), setConponvar("折抵成功");
                  case '':
                    return setCoupon(0), setConponvar("尚未輸入優惠碼");
                  default: 
                    return setCoupon(0), setConponvar("優惠碼不存在")
                }
              }
            }
              class="b-payment-btn-apply mb-1" />  
              </span> 
            </div>
            <dl className="dlist-align mb-2 b-checkout-checkoutbox-payment-dlist-align">
              <div className="text-right font-weight-normal" style={{color:'#E58F80', fontSize: 14}}
              >{conponvar}</div>
            </dl>
          </form>
        </div>
              <dl className="b-shippingcart-boxdlist-align">
                <dt className="font-weight-normal">折扣金額:</dt>
                <dd className="text-right mb-0 text-danger ml-3 font-weight-normal">-NT${order}</dd>
              </dl>
            <hr className="mt-2 mb-2" /> 
              <dl className="b-shippingcart-boxdlist-align">
                <dt className="font-weight-normal">應付金額:</dt>
                <dd className="text-right text-danger ml-3 font-weight-normal">NT$21,000</dd>
              </dl>
            <div className="d-flex align-items-center justify-content-center">
              <NavLink to='/checkout/selectaddress-purchase' className="b-shippingcart-box-btn-main" data-abc="true"> 租賃結帳 </NavLink> 
            </div>
          <ModalShippingInfo />
        </div>
      </div>
     </>
    )}

export default ShoppingCartCheckoutBoxPurchase
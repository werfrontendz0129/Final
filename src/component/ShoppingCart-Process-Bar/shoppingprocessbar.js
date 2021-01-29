import React from 'react';
import './shoppingprocessbar.scss';
import {Link} from 'react-router-dom'

function shoppingprocessbar(props){
    return(
    <>
<div className="helloworld">
  <div className="b-processingdui">
      <div className={props.shopping ? 'active' : ''} >1</div>
      <span></span>
      <div className={props.address ? 'active' : ''} >2</div>
      <span></span>
      <div className={props.payment ? 'active' : ''} >3</div>
      <span></span>
      <div className={props.complete ? 'active' :''}>4</div>
  </div>
  <div className="b-processingtext">
      <Link to="/main/shoppingcart-rental"  className={props.shopping? 'active' : ''} style={{color: "#494949", textDecoration: "none"}}>選購/租賃</Link>
      <Link to="/checkout/selectaddress-rental"  className={props.address? 'active' : ''} style={{color: "#494949" , marginLeft: 5, textDecoration: "none"}}>選擇配送方式及地址</Link>
      <Link to="/checkout/selectpayment-rental"  className={props.payment? 'active' : ''} style={{color: "#494949", marginRight: 30, textDecoration: "none"}}>選擇付款方式</Link>
      <Link to="/checkout/orderview-rental"  className={props.complete? 'active' : ''} style={{color: "#494949", textDecoration: "none"}}>完成訂單</Link>
  </div>
</div>
     </>
    )}

export default shoppingprocessbar
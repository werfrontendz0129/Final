import React from 'react';
import './shoppingprocessbar.scss';

function shoppingprocessbar(props){
    return(
    <>
<div>
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
      <p className={props.shopping? 'active' : ''}>選購/租賃</p>
      <p className={props.address? 'active' : ''} style={{ marginLeft: 5 }}>選擇配送方式及地址</p>
      <p className={props.payment? 'active' : ''} style={{ marginRight: 30 }}>選擇付款方式</p>
      <p className={props.complete? 'active' : ''}>完成訂單</p>
  </div>
</div>
     </>
    )}

export default shoppingprocessbar
import React from 'react';
import './shoppingprocessbar.scss';

function shoppingprocessbar(){
    return(
    <>
    <div>
    <div className="b-processingdui">
      <div className="b-checkouticon">1</div>
      <div className="b-link-cart"></div>
      <div className="b-checkouticongray">2</div>
      <div className="b-link-cart"></div>
      <div className="b-checkouticongray">3</div>
      <div className="b-link-cart"></div>
      <div className="b-checkouticongray">4</div>
    </div>
    <div className="b-processingtext">
      <p >選購/租賃</p>
      <p style={{ marginLeft: 5 }}>選擇配送方式及地址</p>
      <p style={{ marginRight: 30 }}>選擇付款方式</p>
      <p>完成訂單</p>
    </div>
  </div>
     </>
    )}

export default shoppingprocessbar
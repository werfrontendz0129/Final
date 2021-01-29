import React from 'react';
import './ShoppingCartMainPurchaseItemList.scss'

function ShoppingCartMainPurchaseItemList({

}) {
    return (
      <>
      <aside>
          <div className="table-responsive d-flex justify-content-center  flex-column text-center">
                <div style={{marginBottom: 10, marginTop: 50, fontSize: 20, color: "#838383", fontWeight:800}}>購物車尚未加入商品唷!</div>
                <div><img style={{width:275, height:275}} src="http://localhost:3000/images/svg/svg/noresult.gif"/></div>
                {/* <div style={{marginTop: -10, marginBottom: 60, color: "#838383", fontWeight:800}}>請點擊上方"新增信用卡"以便繼續完成付款流程</div> */}
          </div>
      </aside>
      </>
    );
  }
  
  export default ShoppingCartMainPurchaseItemList
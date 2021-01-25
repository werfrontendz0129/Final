import React,{useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './CheckoutCheckoutBoxPaymentSelectPurchase.scss'
import ModalShippingInfo from '../../Modal-wanna-get-more-shipping-info/ModalShippingInfo'
import Table from 'react-bootstrap/Table'
import Axios from 'axios';

function CheckoutCheckoutBoxPaymentSelectPurchase(){

  const[cerditcard, setCerditcard] = useState([]);
  const[selectcard, setSelectcard] = useState(0);
  const[isLoading, setIsLoading] = useState(1);
  const[myCard, setMyCard] = useState([]);
  const[cvc, setCvc]=useState();
  const[varcvc, setVarcvc] = useState("");

  function deleteOrderAddress(index){
    console.log(index)
    Axios.delete(`http://localhost:3005/orderList/deleteCard/`+ index)
        .then((response) => {
        console.log(response)
        window.location.reload()
        })
        .catch((error) => console.log(error))
  }      

  const updatePaymentToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('payment')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      localStorage.removeItem('payment')
      const currentCart = JSON.parse(localStorage.getItem('payment')) || []
      currentCart.push(item)
      localStorage.setItem('payment', JSON.stringify(currentCart))
      return
    } else {
      currentCart.push(item)
    }
    localStorage.setItem('payment', JSON.stringify(currentCart))
    // 設定資料
    setMyCard(currentCart)}

  useEffect(()=>{
    Axios.get('http://localhost:3005/orderList')
    .then((response) => {
     setCerditcard(response.data[0].member_creditcard)
    //  console.log("ppp",response.data[0].member_creditcard)
     setIsLoading(0)
    })
    .catch((error) => console.log(error))
    }, [])

    const display = (
      <>
      {cerditcard.map((v,index)=>{
        return (
          <>
          <tr class="d-flex justify-content-between">  
            <th class="d-flex justify-content-between align-items-center" scope="row" width="185" height="100">
              <div class="form-check ml-3">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                value={v.creditcard_owner}
                checked ={v.creditcard_owner === "v.creditcard_owner"}
                onChange={() =>{setSelectcard(index)}}/>
                <label class="form-check-label" for="flexRadioDefault1">
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{v.card_tag}

                </label>
              </div>
            </th>
            <td height="100" width="120" class="b-checkout-payment-wrap justify-content-center">
              <div> 
                <p class="b-payment-checkout-font-size">{v.card_holder}</p>
              </div>
            </td>
            <td class="d-flex justify-content-center align-items-center" height="100" width="200">
              <div> 
                <p class="b-payment-checkout-font-size">信用卡</p>
                <p class="b-payment-checkout-font-size">ending {v.number.slice(-4)} </p> 
              </div>
            </td>
            <td class="d-flex justify-content-center align-items-center" height="100" width="100">
              <div class="b-checkout-payment-wrap"> 
                <p class="m-0">{v.expiry}</p>
              </div>
            </td>
            <td height="100" width="200" class="b-checkout-payment-wrap justify-content-center">
              <div> 
              <p class="b-payment-checkout-font-size">{v.BillingCity}{v.BillingDistrict}</p>
              <p class="b-payment-checkout-font-size">{v.BillingDetail}</p>                     
              </div>
            </td>
            <td className="d-flex justify-content-center align-items-center" width="60">
              <button type="button" className="close" aria-label="Close"
              onClick={() => {
                deleteOrderAddress(index)
              }}>
                <span>&times;</span>
              </button>
            </td>
        </tr>
        <tr>
          <td class="p-0"><div className="b-checkout-payment-line"></div></td>
        </tr>
            </>
        )})}
            </>
          )





function cvcVar(){
  if(cerditcard[selectcard].cvc == cvc){
    setVarcvc("驗證成功")
  }else{
    setVarcvc("驗證失敗")
  }
}          
console.log("77777", cerditcard[selectcard])


return isLoading == 1 ? <h1>loading</h1> : (!cerditcard[selectcard]? 
<aside className="col-lg-9 p-0" style={{backgroundColor: "#EBEBEB"}}>
    <div className="table-responsive d-flex justify-content-center  flex-column text-center">
          <div style={{marginBottom: -40, marginTop: 70, fontSize: 20, color: "#838383"}}>信用卡資訊尚未添加</div>
          <div><img style={{width:275, height:275, opacity: "40%"}} src="http://localhost:3000/images/credit-card-with-add-button.png"/></div>
          <div style={{marginTop: -40, marginBottom: 60, color: "#838383"}}>請點擊上方"新增信用卡"以便繼續完成付款流程</div>
     </div>
</aside>

/////////上方為空頁面畫面
:( 
    <>
<aside className="col-lg-9 p-0">
  <div className="card border-0">
    <div className="table-responsive">
      <Table className="table table-borderless">
        <thead style={{color: "#969696"}}>
          <tr class="large b-checkout-payment-title-table">
            <th scope="col" width="185" class="text-center p-2">自訂名稱</th>
            <th scope="col" width="120" class="text-center p-2">持卡人</th>
            <th scope="col" width="200" class="text-center p-2">信用卡</th>
            <th scope="col" width="100" class="text-center p-2">有效期限</th>
            <th scope="col" width="200" class="text-center p-2">帳單地址</th>
            <th scope="col" width="60" class="p-2"></th>
        </tr>
        </thead>  
        <tbody>
        {display}
        </tbody>
      </Table>
    </div>
  </div>
</aside>
<aside className="b-chekcout-payment-checkout-outterbox">
 <div className="card .b-checkout-checkoutbox-payment-card position-fixed">
    <div className="card-body">
      <dl className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
        <dt className="font-weight-normal">持卡人：</dt>
        <dd className="text-right font-weight-normal" style={{marginLeft: 70}}>{cerditcard[selectcard].card_holder}</dd>
      </dl>
      <dl className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
        <dt className="font-weight-normal">卡號後四碼：</dt>
        <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 38}}>{cerditcard[selectcard].number.slice(-4)}</dd>
      </dl>
      <dl className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
        <dt className="font-weight-normal">有效期限：</dt>
        <dd className="text-right text-dark font-weight-normal" style={{marginLeft: 53}}>{cerditcard[selectcard].expiry}</dd>
      </dl>
      <div class="mt-3">
          <form>
            <div class="input-group m-0"> 
              <input type="text" class="form-control b-Verification-payment-info mb-1" name="" onChange={(e)=>setCvc(e.target.value)} defaultvalue={cvc} placeholder="驗證碼" />
              <span class="input-group-append"> 
              <input type="button" value="驗證" 
              onClick={(e)=>
                {if(cerditcard[selectcard].cvc == cvc){
                  setVarcvc("驗證成功")
                }else{
                  setVarcvc("驗證失敗")
                }}
              }
              class="b-payment-btn-apply mb-1" /> 
              {console.log("cerditcard[selectcard].cvc",cerditcard[selectcard].cvc )} {"cvc", console.log(cvc)} 
              </span> 
            </div>
            <dl className="dlist-align mb-2 b-checkout-checkoutbox-payment-dlist-align">
              <dt className="font-weight-normal"></dt>
              <dd className="text-right font-weight-normal" style={{color:'#E58F80', fontSize: 14}}>{varcvc}</dd>
            </dl>
          </form>
        </div>
      <hr />  
      {varcvc=="驗證成功"?
        <NavLink to='/checkout/orderview-rental' className="b-checkout-checkoutbox-payment-btn-main" data-abc="true" style={{backgroundColor: "#6C8650", color: "#FFFFFF"}}
        onClick={() => {
          updatePaymentToLocalStorage({
            card_holder : cerditcard[selectcard].card_holder,
            number : cerditcard[selectcard].number,
            expiry : cerditcard[selectcard].expiry,
            cvc : cerditcard[selectcard].cvc
          })
        }}
        > 結帳 </NavLink>: <button disabled className="b-checkout-checkoutbox-payment-btn-main" data-abc="true" style={{backgroundColor: "#D1CFCF", color: "#838383"}}>結帳</button>}
      <div className="dlist-align b-checkout-checkoutbox-payment-dlist-align">
        <ModalShippingInfo />
      </div>
    </div>
  </div>
</aside>
    </>
    ))}
export default CheckoutCheckoutBoxPaymentSelectPurchase
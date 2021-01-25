import React, {useState} from 'react';
import CheckoutModalEditAddress from '../Checkout-Modal-EditAddress/CheckoutModalEditAddress'
import './CheckoutAddressSelectItemList.scss'
import Axios from 'axios';

function CheckoutAddressSelectItemList(props) {
  
  function deleteOrderAddress(index){
    Axios.delete(`http://localhost:3005/orderList/deleteAddress/`+ index)
        .then((response) => {
        console.log(response)
        props.resetOrder()
        })
        .catch((error) => console.log(error))
  }      

  const { order, index } = props;
console.log("hhhhh", props)
     return (
     <>  <tr class="d-flex justify-content-between">  
        <th class="d-flex justify-content-between align-items-center" scope="row" width="185" height="100">
          <div class="form-check ml-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
            value={order.address_tag}
            checked ={order.address_tag === "order.address_tag"}
            onChange={() =>{props.setPassdata(props.index)}}
            />
            <label class="form-check-label" for="flexRadioDefault1">
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{order.address_tag}
            </label>
          </div>
        </th>
        <td class="d-flex justify-content-center align-items-center" height="100" width="170">
          <div> 
            <p class="b-checkoutpages-address-font-size1">{order.receiver}</p>
            <p class="b-checkoutpages-address-font-size1">{order.phone}</p> 
          </div>
        </td>
        <td class="d-flex justify-content-center align-items-center" height="100" width="90">
          <div class="b-address-wrap"> 
            <p class="b-address-info">{order.shipping_method}</p>
          </div>
        </td>
        <td class="d-flex justify-content-center align-items-center" height="100" width="250">
          <div> 
            <p class="b-checkoutpages-address-font-size1">{order.addressCity}{order.addressDistricta}</p>
            <p class="b-checkoutpages-address-font-size1">{order.addressDetail}</p> 
          </div>
        </td>
        <td height="100" width="155" class="b-address-wrap justify-content-center">
          <CheckoutModalEditAddress order={order} index={index} />
      </td>
      <td className="d-flex justify-content-center align-items-center" width="50">
        <button type="button" className="close" aria-label="Close" onClick={() => {
                      deleteOrderAddress(index)
                    }}>
            &times;
          </button>
      </td>
    </tr>
    <tr>
        <td className="p-0"><div style={{ width:'100%', height: 1, borderTop: '1px solid #D1CFCF', padding:'0%'}} ></div></td>
    </tr>
      </>
    )};
  
  
  export default CheckoutAddressSelectItemList



 
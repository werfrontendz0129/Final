import React, {useState} from 'react';
import CheckoutModalEditAddress from '../Checkout-Modal-EditAddress/CheckoutModalEditAddress'
import './CheckoutAddressSelectItemList.scss'
import Axios from 'axios';

function CheckoutAddressSelectItemList(props) {
  
  function deleteOrderAddress(index){
    Axios.delete(`http://localhost:3001/orderList/deleteAddress/`+ index)
        .then((response) => {
        console.log(response)
        
        props.resetOrder()
        })
        .catch((error) => console.log(error))
  }      

  const { order, index } = props;
     return (
     <>  <tr className="d-flex justify-content-between b-select-raido-box">  
        <th className="d-flex justify-content-between align-items-center" scope="row" width="185" height="100">
          <div className="form-check ml-3">
            <input className="form-check-input b-input-address"  type="radio" name="flexRadioDefault" id={"flexRadioDefault1"+ order.address_tag}
            value={order.address_tag}
            onClick={() =>{props.setPassdata(props.index)}} 
            />
            <label className="form-check-label" for={"flexRadioDefault1"+ order.address_tag}>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{order.address_tag}
            </label>
          </div>
        </th>
        <td className="d-flex justify-content-center align-items-center" height="100" width="170">
          <div> 
            <p className="b-checkoutpages-address-font-size1">{order.receiver}</p>
            <p className="b-checkoutpages-address-font-size1">{order.phone}</p> 
          </div>
        </td>
        <td className="d-flex justify-content-center align-items-center" height="100" width="90">
          <div className="b-address-wrap"> 
            <p className="b-address-info">{order.shipping_method}</p>
          </div>
        </td>
        <td className="d-flex justify-content-center align-items-center" height="100" width="250">
          <div> 
            <p className="b-checkoutpages-address-font-size1">{order.addressCity}{order.addressDistricta}</p>
            <p className="b-checkoutpages-address-font-size1">{order.addressDetail}</p> 
          </div>
        </td>
        <td height="100" width="155" className="b-address-wrap justify-content-center">
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



 
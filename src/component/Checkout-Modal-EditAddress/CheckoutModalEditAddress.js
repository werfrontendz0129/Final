import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';
import {Modal, Button, Col, Container, Form} from 'react-bootstrap';

function CheckoutModalEditAddress(props) {
  const [lgShow, setLgShow] = useState(false);
  const [addressCity, setAddressCity] = useState('')
  const [addressDistrict, setAddressDistrict] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [receiver, setReceiver] = useState('')
  const [phone, setPhone] = useState('')
  const [shipping_method, setShipping_method] = useState('')
  const [address_tag, setAddress_tag] = useState('')
  
    
    let history = useHistory()
    
    async function updateAddress(index) {
        const newAddress = {
          addressCity: addressCity,
          addressDistrict: addressDistrict,
          addressDetail: addressDetail,
          receiver: receiver,
          phone: phone,
          shipping_method: shipping_method,
          address_tag: address_tag,
        }
        try {
            console.log(newAddress)
            const response = await fetch(
                'http://localhost:3005/orderList/updateAddress/' + index,
                {
                    method:'put',
                    body:JSON.stringify(newAddress),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok) {
                const data = await response.json()
                console.log(data)
                if(data.id) alert('ok')
                history.go(0)
            }
        } catch(error) {
            alert('no data, try later')
            console.log(error)
        }
    }

   const {order, index}=props;
   
    return (
        <>
       <a type="button" className="b-checkoutpage1-updatebutton" onClick={() => setLgShow(true)}>修改</a>
       
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container">
              <form onSubmit="">
                <div className="form-group">
                  <label htmlFor="address_tag">收件人tag </label>
                  <input onChange={(e)=>(setAddress_tag(e.target.value))} Value={order.address_tag} type="text" name="address_tag"  id="address_tag" className="form-control" placeholder="請輸入tag"  />
                </div>
                <div className="form-group">
                  <label htmlFor="receiver">收件人</label>
                  <input onChange={(e)=>(setReceiver(e.target.value))} Value={order.receiver} type="text" name="receiver"  id="receiver" className="form-control" placeholder="請輸入收件人本名"  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">收件人電話</label>
                  <input onChange={(e)=>(setPhone(e.target.value))} Value={order.phone} type="text" name="phone"  id="phone" className="form-control" placeholder="請輸入收件人電話"  />
                </div>
                <div className="form-group">
                  <label htmlFor="addressCity">城市</label>
                  <input onChange={(e)=>(setAddressCity(e.target.value))} Value={order.addressCity} type="text" name="addressCity"  id="addressCity" className="form-control" placeholder="請輸寄件城市"  />
                </div>
                <div className="form-group">
                  <label htmlFor="addressDistrict">鄉鎮</label>
                  <input onChange={(e)=>(setAddressDistrict(e.target.value))} Value={order.addressDistrict} type="text" name="addressDistrict"  id="addressDistrict" className="form-control" placeholder="請輸寄件鄉鎮"  />
                </div>
                <div className="form-group">
                  <label htmlFor="addressDetail">地址</label>
                  <input onChange={(e)=>(setAddressDetail(e.target.value))} Value={order.addressDetail} type="text" name="addressDetail"  id="addressDetail" className="form-control" placeholder="請輸寄件地址"  />
                </div>
                <div className="form-group">
                  <label htmlFor="shipping_method">寄件方式</label>
                  <input onChange={(e)=>(setShipping_method(e.target.value))} Value="宅配" type="text" name="shipping_method"  id="shipping_method" className="form-control" placeholder="選擇寄件模式"  />
                </div>
                <button type="Submit" className="btn btn-primary" onClick={()=>updateAddress(index)}>Submit</button>
              </form>
            </div>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default CheckoutModalEditAddress

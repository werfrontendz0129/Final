import React, { useState } from 'react';
import Axios from 'axios';
import {Modal, Button, Col, Container, Form} from 'react-bootstrap';

function CheckoutModalAddAddress(props) {
    const url = "http://localhost:3001/orderList/create"
    const [lgShow, setLgShow] = useState(false);
    const [orderData, setOrderData] = useState([])
    const autoform = {
      addressCity:"台北市",
      addressDistrict:"松山區",
      addressDetail:"八德路1段1弄1號",
      receiver:"Vivian Lee",
      phone:"0958777888",
      shipping_method:"宅配",
      address_tag:"台北總店",
      }
    
    const [data, setData] = useState({
      addressCity:"",
      addressDistrict:"",
      addressDetail:"",
      receiver:"",
      phone:"",
      shipping_method:"宅配",
      address_tag:"",
    })
    function submit(e){
      // e.preventDefault()
      console.log("submit:" + data)
      Axios.post(url, data)
      .then(res=>{
        console.log(res.data[0])
        const myorder=[...orderData,res.data[0]]
        setOrderData(myorder)
      })
      .catch(error => {
        console.log(error.response)
      })
    }
    const handle= (e) =>{
      const newData={...data}
      newData[e.target.id]=e.target.value
      // console.log(newData)
      setData(newData)
      
    }

    return (
        <>
       <a type="button" style={{color:"#E58F80"}}onClick={() => setLgShow(true)}>新增地址 {console.log("888", data)}</a>
       
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           新增地址
          </Modal.Title>
          <button type="button"
            className="btn btn-outline-success ml-2"
            style={{ border:0, borderRadius:1}}
            onClick={()=> {
            setData(autoform)
            }}
            >小幫手</button>
        </Modal.Header>
        <Modal.Body>
        <div className="container">
              <form onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="address_tag">地址識別名稱 </label>
                  <input onChange={handle} value={data.address_tag} type="text" name="address_tag"  id="address_tag" className="form-control" placeholder="請輸入地址識別名稱"  />
                </div>
                <div className="form-group">
                  <label htmlFor="receiver">收件人</label>
                  <input onChange={handle} value={data.receiver} type="text" name="receiver"  id="receiver" className="form-control" placeholder="請輸入收件人本名"  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">收件人電話</label>
                  <input onChange={handle} value={data.phone} type="text" name="phone"  id="phone" className="form-control" placeholder="請輸入收件人電話"  />
                </div>
                <div className="form-group">
                  <label htmlFor="addressCity">城市</label>
                  <input onChange={handle} value={data.addressCity} type="text" name="addressCity"  id="addressCity" className="form-control" placeholder="請輸寄件城市"  />
                </div>
                <div className="form-group">
                  <label htmlFor="addressDistrict">鄉鎮</label>
                  <input onChange={handle} value={data.addressDistrict} type="text" name="addressDistrict"  id="addressDistrict" className="form-control" placeholder="請輸寄件鄉鎮"  />
                </div>
                <div className="form-group">
                  <label htmlFor="addressDetail">地址</label>
                  <input onChange={handle} value={data.addressDetail} type="text" name="addressDetail"  id="addressDetail" className="form-control" placeholder="請輸寄件地址"  />
                </div>
                <div className="form-group">
                  <label htmlFor="shipping_method">寄件方式</label>
                  <input onChange={handle} value="宅配" type="text" name="shipping_method"  id="shipping_method" className="form-control" placeholder="選擇寄件模式"  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-outline btn-primary" style={{width:200, backgroundColor: "#6C8650",border:0, borderRadius:1}}>新增地址</button>
                </div>
              </form>
            </div>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default CheckoutModalAddAddress

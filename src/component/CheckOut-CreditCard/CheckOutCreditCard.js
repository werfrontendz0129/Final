import React from "react";
import Card from "react-credit-cards";
import 'react-credit-cards/lib/styles.scss'
import {Row, Col, Form} from 'react-bootstrap'
import Axios from 'axios';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";

export default class App extends React.Component {
  state = {
    number: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: "",
    card_holder:"",
    card_tag: "",
    BillingCity: "",
    BillingDistrict: "",
    BillingDetail: "",
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
      Axios.post("http://localhost:3001/orderList/createCard", this.state)
      .then(res=>{
        const myorder=[...e,res.data[0]]
        this.setState({ myorder });
        this.form.reset();
        
      })
      .catch(error => {
        console.log(error.response)})   
  };

  render() {
    const { number, expiry, cvc, focused, issuer, formData, card_holder, card_tag, BillingCity, BillingDistrict, BillingDetail } = this.state;

    const updatedtoloaclstoragem = (item)=>{
      const currentCart = JSON.parse(localStorage.getItem('payment')) || []
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
      localStorage.setItem('payment', JSON.stringify(currentCart));
    }
    return (
      <div key="Payment">
        <div className="App-payment d-flex" >
          
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="d-flex">
            <div style={{width:"50%"}}>
          <Card
          className="mb-5"
            number={number}
            name={card_holder}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          /></div>
          <div>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control mt-3"
                placeholder="信用卡號碼"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="card_holder"
                className="form-control"
                placeholder="持卡人姓名"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="有效期限"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              </div>
            </div>
            </div>
        <hr />
        <div className="container pl-4 pr-1">
          <h5>帳單地址</h5>
                    <div className="form-group">
                      {/* <label htmlFor="card_tag">識別名稱</label> */}
                      <input  type="text"
                        name="card_tag"
                        className="form-control"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus} 
                        placeholder="自訂信用卡識別名稱"  />
                    </div>
                <Row>
                  <Col>
                    <div className="form-group">
                      {/* <label htmlFor="BillingCity">城市</label> */}
                      <input  type="text"
                        name="BillingCity"
                        className="form-control"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus} 
                        placeholder="城市"  />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-group">
                      {/* <label htmlFor="BillingDistrict">鄉鎮</label> */}
                      <input type="text"
                        name="BillingDistrict"
                        className="form-control"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}  
                        placeholder="鄉鎮"  />
                    </div>
                  </Col>
                </Row>
                <div className="form-group">
                  {/* <label htmlFor="BillingDetail">地址</label> */}
                  <input type="text"
                        name="BillingDetail"
                        className="form-control"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}  placeholder="詳細地址"  />
                </div>   
                  
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions d-flex justify-content-center">
              <button  onClick={() => {
                updatedtoloaclstoragem({
                  card_holder : card_holder,
                  number : number,
                  expiry : expiry,
                  cvc : cvc
                })
                window.location.replace('/checkout/orderview-rental')}}
            className="b-checkout-checkoutbox-address-btn-main btn-block m-1">確認</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

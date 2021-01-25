import React, { useState } from 'react';
import {Modal, Button, Row, Col, Container, Form} from 'react-bootstrap';
import CheckOutCreditCard from '../CheckOut-CreditCard/CheckOutCreditCard'



function MydModalWithGrid(props) {
    return (
      <Modal {...props} 
      aria-labelledby="contained-modal-title-vcenter" 
      backdrop="static"
      size="lg"
      centered
      >
        <Modal.Header closeButton className="p-2">
          <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="pl-5 mb-1 mt-1">新增信用卡</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
             <CheckOutCreditCard />
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

function CheckoutModalAddPayment() {

    const [modalShow, setModalShow] = useState(false);
  
    return (
        <>
            <a class="btn p-0" onClick={() => setModalShow(true)}>新增信用卡</a>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default CheckoutModalAddPayment

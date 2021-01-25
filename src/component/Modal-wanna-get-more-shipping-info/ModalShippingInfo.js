import React, { useState } from 'react';
import './ModalShippingInfo.scss'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            88
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            8
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  




function ModalShippingInfo(){

    const [modalShow, setModalShow] = React.useState(false);
    return(
    <>
    <div>
        <a type="btn" onClick={() => setModalShow(true)} href="#" className="mt-2" style={{color: "#6C8650", fontSize: 14}}>
        想進一步瞭解到貨流程?
        </a>
    </div>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
     </>
    )}

export default ModalShippingInfo
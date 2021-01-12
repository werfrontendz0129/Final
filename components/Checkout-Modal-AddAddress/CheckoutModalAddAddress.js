import React, { useState } from 'react'
import { Modal, Button, Row, Col, Container } from 'react-bootstrap'

function MydModalWithGrid(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Save Change</Button>
      </Modal.Footer>
    </Modal>
  )
}

function CheckoutModalAddAddress() {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <a className="btn p-0" onClick={() => setModalShow(true)}>
        新增地址
      </a>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default CheckoutModalAddAddress

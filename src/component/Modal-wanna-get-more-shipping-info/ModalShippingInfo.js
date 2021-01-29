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
          <h2>植園的到貨流程</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:30}}>
          <h4>《植園的配送》</h4>
          <ul className="list-unstyled ml-4" >
            <li > 1、由於商品會因其商品價值與體積等特性，故目前租賃服務以宅配為主。</li>
            <li > 2、當日下午1點前完成刷卡或匯款完成通知，當日即安排物流出貨至您指定的地址，正常情況下商品三個工作日內會送達。</li>
            <li > 3、訂單成立後，會有郵件通知。商品寄出時我們不會另再寄出貨通知信給您。</li>
            <li > 4、離島、貨到付款、訂單付款資料待確認、收貨人資料有誤或無法收貨、或遇颱風地震等天災。不在三個工作日送達之承諾。</li>
          </ul>
          <hr />
          <h4>《物流服務費》</h4>
          <ul className="list-unstyled ml-4" >
              <li> 1、若您訂購的商品未達免運標準，將酌收取的物流服務費。</li>
              <li> 2、訂單進入出貨作業前，您可取消全部訂單，物流服務費亦可一併取消退款；但若已進行出貨作業，物流服務費將無法退費。</li>
              <li> 3、取消訂單後，物流服務費將會一併取消，並盡快退款給您。</li>
          </ul>
          <hr />
          <h4>《未收到商品》</h4>
          <p className="ml-4">

            本網站商品皆在二個工作日內寄出，若您未收到商品，可能是商品在運送過程產生異常，建議您點選「聯絡客服」與我們聯絡 ，我們將會為您查詢貨品的運送狀況。

            若商品為預購商品，請至訂單明細中查詢商品預定的出貨日期。若已過預訂出貨日期但該商品並未顯示出貨日期，則表示該商品尚未出貨。如想知道目前商品處理進度，歡迎您點選「聯絡客服」與我們聯絡，我們將會為您查詢貨品的情況。
          </p>
          <hr />
          <h4>《指定配送時間》</h4>
          <p className="ml-4">
            目前宅配公司提供送件時間為週一至週六上午九點～下午六點，平日晚間與週日不送件。若造成您的不便，敬請見諒。

            為讓您能儘早收到訂購的商品，建議您在訂購前考量一下指定收件地址假日是否方便收件。
          </p>
          <hr />
          <h4>《變更收件地址》</h4>
          <p className="ml-4">
            請您至網頁上方的「連絡我們」來信或直接來電02-2356-8715通知我們變更收件地址。只要我們還未出貨，就會即時處理更改，如已出貨，就來不及更改，請您協助至原收件地址確認收件。
          </p>
          <hr />
          <div className="d-flex justify-content-center" >
            <Button onClick={props.onHide} style={{width:200, backgroundColor:"#6c8650", border:0, borderRadius:1}}>關閉頁面</Button>
          </div>
        </Modal.Body>
       
          {/* <div className="d-flex justify-content-center mb-5" >
            <Button onClick={props.onHide} style={{width:200, backgroundColor:"#6c8650", border:0, borderRadius:1}}>關閉頁面</Button>
          </div> */}
       
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
import React from 'react'
import './CheckoutTableInfo.scss'

function CheckoutTableInfo() {
  return (
    <>
      <div className="b-completepage-title">
        <p>訂單總覽</p>
      </div>
      <div className="b-order-checkout-view-box">
        <div className="d-flex">
          <div className="card-body" style={{ width: '50%' }}>
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">訂單編號：</dt>
              <dd className="text-right text-dark font-weight-normal b-complete-left-pace">
                012021020201
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align ">
              <dt className="font-weight-normal">訂單日期：</dt>
              <dd className="text-right text-dark font-weight-normal b-complete-left-pace">
                2020-12-12
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">訂單狀態：</dt>
              <dd className="text-right text-dark font-weight-normal b-complete-left-pace">
                已收到訂單
              </dd>
            </dl>
          </div>
          <div className="card-body" style={{ width: '50%' }}>
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">收件人：</dt>
              <dd className="text-right ml-5 font-weight-normal">傅芷萱</dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align ">
              <dt className="font-weight-normal">收件地址：</dt>
              <dd
                className="text-right text-dark font-weight-normal"
                style={{ marginLeft: 32 }}
              >
                320桃園市中壢區中大路300號國立中央大學
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">配送方式：</dt>
              <dd
                className="text-right text-dark font-weight-normal"
                style={{ marginLeft: 32 }}
              >
                宅配
              </dd>
            </dl>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="card-body"
            style={{ width: '50%', backgroundColor: '#EBEBEB' }}
          >
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">訂單金額：</dt>
              <dd className="text-right font-weight-normal b-complete-left-pace">
                NT$ 140,000
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align ">
              <dt className="font-weight-normal">運費：</dt>
              <dd
                className="text-right text-dark font-weight-normal"
                style={{ marginLeft: 62 }}
              >
                NT$ 0
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">折扣金額：</dt>
              <dd className="text-right text-dark font-weight-normal b-complete-left-pace">
                NT$ 0
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">實付金額：</dt>
              <dd
                className="text-right text-dark font-weight-normal b-complete-left-pace"
                style={{ color: '#E58F80' }}
              >
                NT$ 140,000
              </dd>
            </dl>
          </div>
          <div
            className="card-body"
            style={{ width: '50%', backgroundColor: '#EBEBEB' }}
          >
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">付款方式：</dt>
              <dd
                className="text-right font-weight-normal"
                style={{ marginLeft: 32 }}
              >
                信用卡
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">持卡人姓名：</dt>
              <dd
                className="text-right font-weight-normal"
                style={{ marginLeft: 17 }}
              >
                傅芷萱
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align ">
              <dt className="font-weight-normal">信用卡:</dt>
              <dd
                className="text-right text-dark font-weight-normal"
                style={{ marginLeft: 65 }}
              >
                VISA
              </dd>
            </dl>
            <dl className="b-order-checout-info-table-dlist-align">
              <dt className="font-weight-normal">卡號後四碼：</dt>
              <dd
                className="text-right text-dark font-weight-normal"
                style={{ marginLeft: 20 }}
              >
                2907
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutTableInfo

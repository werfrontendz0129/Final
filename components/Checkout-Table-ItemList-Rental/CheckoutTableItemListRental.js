import React from 'react'
import './CheckoutTableItemListRental.scss'

function CheckoutTableItemListRental() {
  return (
    <>
      <div className=" b-completepage-itemlist">
        <div className="row">
          <h4>租賃商品列表</h4>
          <div className="card " style={{ minWidth: '100%', border: 0 }}>
            <table className="table table-borderless">
              <thead className="text-muted ">
                <tr className="large text-uppercase d-flex justify-content-between b-complete-tableTitle">
                  <th scope="col" width="10%" className="text-center p-2">
                    No.
                  </th>
                  <th scope="col" width="12%" className="p-2"></th>
                  <th scope="col" width="15%" className="text-center p-2">
                    產品名稱
                  </th>
                  <th scope="col" width="19%" className="text-center p-2">
                    租賃區間
                  </th>
                  <th scope="col" width="15%" className="text-center p-2">
                    租賃天數
                  </th>
                  <th scope="col" width="9%" className="text-center p-2">
                    數量
                  </th>
                  <th scope="col" width="10%" className="text-center p-2">
                    價格
                  </th>
                  <th scope="col" width="10%" className="text-center p-2">
                    小記
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex justify-content-between">
                  <td
                    className="d-flex justify-content-center align-items-center"
                    height="140"
                    width="10%"
                  >
                    <p>01</p>
                  </td>
                  <th
                    className="d-flex justify-content-between align-items-center"
                    scope="row"
                    width="12%"
                    height="140"
                  >
                    <class className="aside">
                      <img
                        src="http://localhost:3000/images/小天使大型植栽1.jpg"
                        className="b-complete-img-sm"
                      />
                    </class>
                  </th>
                  <td
                    className="d-flex justify-content-center align-items-center"
                    width="15%"
                    height="140"
                  >
                    <p>琴葉榕大型植栽</p>
                  </td>
                  <td
                    className="d-flex justify-content-center align-items-center flex-column"
                    width="19%"
                    height="140"
                  >
                    <p className="text-center m-0">2021-02-02</p>
                    <p className="text-center m-0">~</p>
                    <p className="text-center m-0">2021-03-02</p>
                  </td>
                  <td
                    className="d-flex justify-content-center align-items-center"
                    width="15%"
                    height="140"
                  >
                    <p>28天</p>
                  </td>
                  <td
                    height="140"
                    width="9%"
                    className="b-completepage-detailinfo justify-content-center"
                  >
                    <p>5</p>
                  </td>
                  <td
                    className="d-flex justify-content-center align-items-center"
                    height="140"
                    width="10%"
                  >
                    <div className="b-completepage-detailinfo">
                      <p className="b-completepage-detail-daily b-completepage-fontSize">
                        NT$500
                      </p>
                      <p className="b-completepage-detail-daily b-completepage-fontSize">
                        {' '}
                        /日{' '}
                      </p>
                    </div>
                  </td>
                  <td
                    className="d-flex justify-content-center align-items-center"
                    height="140"
                    width="10%"
                  >
                    <div>NT$1700</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-0">
                    <div
                      style={{
                        width: '100%',
                        height: 1,
                        borderTop: '1px solid #D1CFCF',
                        padding: 0,
                      }}
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="b-completepage-button-to-mainpages">
        <a href="#" className="btn" data-abc="true">
          {' '}
          返回購物{' '}
        </a>
      </div>
    </>
  )
}

export default CheckoutTableItemListRental

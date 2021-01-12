import React from 'react'
import './OrderManagementRentalItemTable.scss'

function OrderManagementRentalItemTable() {
  return (
    <>
      <div className="b-member-Rental-order-account-view">
        <div className="b-member-Rental-order-div-title">
          <p>選購明細資料</p>
        </div>
        <div className="px-2">
          <table className="table" style={{ width: 900 }}>
            <thead
              className="table-borderless"
              style={{ backgroundColor: '#E6E9DA' }}
            >
              <tr>
                <th scope="col" width="50px" className="text-center">
                  No.
                </th>
                <th scope="col" width="90px" className="text-center"></th>
                <th scope="col" width="190px" className="text-center">
                  產品名稱
                </th>
                <th scope="col" width="190px" className="text-center">
                  租賃區間
                </th>
                <th scope="col" width="150px" className="text-center">
                  產品分類
                </th>
                <th scope="col" width="100px" className="text-center">
                  狀態
                </th>
                <th scope="col" width="70px" className="text-center">
                  數量
                </th>
                <th scope="col" width="100px" className="text-center">
                  單價
                </th>
                <th scope="col" width="100px" className="text-center">
                  小計
                </th>
              </tr>
            </thead>
            <tbody className="b-member-Rental-order-orderlist-rent-detailtable">
              <tr>
                <td className="order-id align-middle text-center">01</td>
                <td className="align-middle">
                  <div>
                    <img
                      className="b-member-Rental-order-orderlistpics"
                      src="images/孔雀1.jpg"
                      alt=""
                    />
                  </div>
                </td>
                <td className="b-member-Rental-order-prod-name align-middle text-center">
                  <span className="text-center">A01</span>
                  <p className="text-center">琴葉榕大型植栽</p>
                </td>
                <td className="b-member-Rental-order-prod-name align-middle">
                  <p className="text-center">2021-02-02</p>
                  <p className="text-center">~</p>
                  <p className="text-center">2021-03-02</p>
                </td>
                <td className="align-middle text-center">大型植栽</td>
                <td className="b-member-Rental-orderorderstatus align-middle text-center">
                  已完成
                </td>
                <td className="align-middle text-center">1</td>
                <td className="align-middle text-center">NT$100</td>
                <td className="align-middle text-center">NT$100</td>
              </tr>
              <tr>
                <td className="order-id align-middle text-center">01</td>
                <td className="align-middle">
                  <div>
                    <img
                      className="b-member-Rental-order-orderlistpics"
                      src="images/孔雀1.jpg"
                      alt=""
                    />
                  </div>
                </td>
                <td className="b-member-Rental-order-prod-name align-middle text-center">
                  <span className="text-center">A02</span>
                  <p className="text-center">小天使大型植栽</p>
                </td>
                <td className="b-member-Rental-order-prod-name align-middle">
                  <p className="text-center">2021-01-01</p>
                  <p className="text-center">~</p>
                  <p className="text-center">2021-03-02</p>
                </td>
                <td className="align-middle text-center">大型植栽</td>
                <td className="b-member-Rental-orderorderstatus align-middle text-center">
                  已完成
                </td>
                <td className="align-middle text-center">1</td>
                <td className="align-middle text-center">NT$100</td>
                <td className="align-middle text-center">NT$100</td>
              </tr>
            </tbody>
          </table>
          <div className="b-member-Rental-order-buttonblock d-flex justify-content-center">
            <button
              type="button"
              className="b-member-Rental-order-btn b-member-Rental-order-btn-checkelse"
            >
              查看其他訂單
            </button>
            <button
              type="button"
              className="b-member-Rental-order-btn b-member-Rental-order-btn-cancelrent"
            >
              申請退租
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderManagementRentalItemTable

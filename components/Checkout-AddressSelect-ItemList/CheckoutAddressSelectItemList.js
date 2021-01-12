import React from 'react'
import './CheckoutAddressSelectItemList.scss'
function CheckoutAddressSelectItemList({}) {
  return (
    <>
      <tr class="d-flex justify-content-between">
        <th
          class="d-flex justify-content-between align-items-center"
          scope="row"
          width="185"
          height="100"
        >
          <div class="form-check ml-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              {'\u00A0'}
              {'\u00A0'}
              {'\u00A0'}
              {'\u00A0'}傅芷萱
            </label>
          </div>
        </th>
        <td
          class="d-flex justify-content-center align-items-center"
          height="100"
          width="170"
        >
          <div>
            <p class="b-checkoutpages-address-font-size1">傅芷萱</p>
            <p class="b-checkoutpages-address-font-size1"> 0978-xxx-317 </p>
          </div>
        </td>
        <td
          class="d-flex justify-content-center align-items-center"
          height="100"
          width="90"
        >
          <div class="b-address-wrap">
            <p class="b-address-info">宅配</p>
          </div>
        </td>
        <td
          class="d-flex justify-content-center align-items-center"
          height="100"
          width="250"
        >
          <div>
            <p class="b-checkoutpages-address-font-size1">台灣 桃園市 中壢區</p>
            <p class="b-checkoutpages-address-font-size1">
              xxx300號國立中央大學
            </p>
          </div>
        </td>
        <td
          height="100"
          width="155"
          class="b-address-wrap justify-content-center"
        >
          <button
            type="button"
            class="b-checkoutpage1-updatebutton"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            修改
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td
          className="d-flex justify-content-center align-items-center"
          width="50"
        >
          <button type="button" className="close" aria-label="Close">
            <span>&times;</span>
          </button>
        </td>
      </tr>
      <tr>
        <td className="p-0">
          <div
            style={{
              width: '100%',
              height: 1,
              borderTop: '1px solid #D1CFCF',
              padding: '0%',
            }}
          ></div>
        </td>
      </tr>
    </>
  )
}

export default CheckoutAddressSelectItemList

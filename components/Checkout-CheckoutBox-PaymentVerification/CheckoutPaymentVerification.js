import React from 'react'
import './CheckoutPaymentVerification.scss'

function CheckoutPaymentVerification() {
  return (
    <>
      <div className="mb-2">
        <form>
          <div className="input-group m-0">
            <input
              type="text"
              className="form-control b-Verification-payment-info mb-1"
              name=""
              placeholder="驗證碼"
            />
            <span className="input-group-append">
              {' '}
              <button className="btn b-payment-btn-apply mb-1">
                驗證
              </button>{' '}
            </span>
          </div>
        </form>
      </div>
    </>
  )
}

export default CheckoutPaymentVerification

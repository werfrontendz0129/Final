import React, { useState } from 'react'
import './OrderlistNoPurchase.scss'

function OrderlistNoPurchase() {
  return (
    <>
      <div className="w-collect-none">
        <p>目前還沒有選購商品喔，來去逛逛吧</p>
        <div>
          <button type="button" className="w-btn-viewlesson">
            植物選購
          </button>
        </div>
      </div>
    </>
  )
}

export default OrderlistNoPurchase

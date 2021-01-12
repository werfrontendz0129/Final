import React from 'react'
import { devUrl } from '../../config/index'

function PopularItems() {
  return (
    <>
      <div className="container-fluid c-fulll p-0">
        <div className="c-padd c-popular">
          <div className="c-top">
            <p className="h2 text-center">熱門租品</p>
            <p className="h4 text-center">Popular Items</p>
            <div className="c-rbutton justify-content-center align-items-center">
              <p className="c-font6 m-0">更多商品</p>
            </div>
          </div>
          <div className="c-p200"></div>
          <div className="c-card-part justify-content-center align-items-end">
            <div className="c-card-item1 c-margin-x">
              <figure>
                <img src={devUrl + ''} alt="" />
              </figure>
            </div>
            <div className="c-card-item2 c-margin-x">
              <figure>
                <img src={devUrl + ''} alt="" />
              </figure>
            </div>
            <div className="c-card-item2 c-margin-x">
              <figure>
                <img src={devUrl + ''} alt="" />
              </figure>
            </div>
            <div className="c-card-item2 c-margin-x">
              <figure>
                <img src={devUrl + ''} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularItems

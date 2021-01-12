import React from 'react'
import { devUrl } from '../../config/index'
function BestSeller() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="c-bestseller align-items-center">
          <div className="c-top">
            <p className="h2 text-center">熱銷商品</p>
            <p className="h4 text-center">Best Sellers</p>
            <div className="c-rbutton justify-content-center align-items-center">
              <p className="h6 m-0">更多商品</p>
            </div>
          </div>
          <div className="c-productlist">
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestSeller

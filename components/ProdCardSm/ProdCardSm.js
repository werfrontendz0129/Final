import React from 'react'
import './ProdCardSm.scss'
import { devUrl } from '../../config/index'

function ProdCardSm() {
  return (
    <>
      <div className="v-recommend-goods ">
        <div className="text-center">
          <h3>你可能會喜歡</h3>
          <h5>You May Also Like...</h5>
        </div>
        <div className="d-flex justify-content-center v-card-group">
          <figure className="v-product-card ml-0">
            <img
              className="v-recommend-img"
              src={devUrl + '/images/images/九龍柱大理石落地盆栽.jpg'}
              alt=""
            />
            <figcaption>
              <p>九龍柱落地盆栽</p>
            </figcaption>
            <p className="v-price">NT$ 500/ 月</p>
          </figure>
          <figure className="v-product-card">
            <img
              className="v-recommend-img"
              src={devUrl + '/images/images/九龍柱大理石落地盆栽.jpg'}
              alt=""
            />
            <figcaption>
              <p>九龍柱落地盆栽</p>
            </figcaption>
            <p className="v-price">NT$ 500/ 月</p>
          </figure>
          <figure className="v-product-card">
            <img
              className="v-recommend-img"
              src={devUrl + '/images/images/九龍柱大理石落地盆栽.jpg'}
              alt=""
            />
            <figcaption>
              <p>九龍柱落地盆栽</p>
            </figcaption>
            <p className="v-price">NT$ 500/ 月</p>
          </figure>
          <figure className="v-product-card mr-0">
            <img
              className="v-recommend-img"
              src={devUrl + '/images/images/九龍柱大理石落地盆栽.jpg'}
              alt=""
            />
            <figcaption>
              <p>九龍柱落地盆栽</p>
            </figcaption>
            <p className="v-price">NT$ 500/ 月</p>
          </figure>
        </div>
      </div>
    </>
  )
}

export default ProdCardSm

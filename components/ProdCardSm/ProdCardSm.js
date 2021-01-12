import React, { useState } from 'react'
import './ProdCardSm.scss'
<<<<<<< Updated upstream
import { devUrl } from '../../config/index'
=======
// import { devUrl } from '../../config/index'
import { prod } from '../../data'
>>>>>>> Stashed changes

function ProdCardSm() {
  console.log(prod.porducts)
  const [products, setProducts] = useState(prod.porducts)

  return (
    <>
      <div className="v-recommend-goods ">
        <div className="text-center">
          <h3>你可能會喜歡</h3>
          <h5>You May Also Like...</h5>
        </div>
        <div className="d-flex justify-content-center v-card-group">
<<<<<<< Updated upstream
          <figure className="v-product-card ml-0">
            <img
              className="v-recommend-img"
              src={
                devUrl +
                '/images/images/rentproddetail/九龍柱大理石落地盆栽.jpg'
              }
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
              src={
                devUrl +
                '/images/images/rentproddetail/九龍柱大理石落地盆栽.jpg'
              }
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
              src={
                devUrl +
                '/images/images/rentproddetail/九龍柱大理石落地盆栽.jpg'
              }
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
              src={
                devUrl +
                '/images/images/rentproddetail/九龍柱大理石落地盆栽.jpg'
              }
              alt=""
            />
            <figcaption>
              <p>九龍柱落地盆栽</p>
            </figcaption>
            <p className="v-price">NT$ 500/ 月</p>
          </figure>
=======
          {products.map((e) => (
            <figure key={e.prod_id} className="v-product-card ml-0">
              <img className="v-recommend-img" src={e.image} alt="" />
              <figcaption>
                <p>{e.prod_name}</p>
              </figcaption>
              <p className="v-price">NT$ {e.price}/月</p>
            </figure>
          ))}
>>>>>>> Stashed changes
        </div>
      </div>
    </>
  )
}

export default ProdCardSm

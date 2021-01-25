import React from 'react'
import cardinfo from './cardinfo'
import './Cardsection.scss'
import {NavLink} from 'react-router-dom'
function Cardsection() {
  return (
    <>
      <div className="c-full row">
        <div className="col-md-1 d-flex p-0"></div>
        <div className="col-md-10 p-0 m-0 ">
          <div class="colplay p-0">
            {cardinfo.cards.map((product) => (
              <NavLink to={product.link} style={{textDecoration: 'none', color: "#494949"}}>
              <div key={product.card_id} className="c-card1 c-margin">
                <figure>
                  <img src={product.url} alt="" />
                </figure>
                <div className="c-text-part align-items-center">
                  <div className="h2 c-fit-with-content1">
                    {product.category1}
                  </div>
                  <div className="h6 c-fit-with-content2">
                    {product.category2}
                  </div>
                </div>
              </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-md-1 p-0"></div>
      </div>
    </>
  )
}

export default Cardsection

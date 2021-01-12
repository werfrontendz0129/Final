import React from 'react'
import { devUrl } from '../../config/index'
import './Cardsection.scss'
function XBox() {
  return (
    <>
      <div class="c-w100p">
        <div className="c-xbox">
          <div className="xbutton">
            <figure>
              <img src={devUrl + '/images/index/x.svg'} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}

export default XBox

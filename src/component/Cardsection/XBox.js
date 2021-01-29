import React, {useEffect, useState} from 'react'
import { devUrl } from '../../config/index'
import './Cardsection.scss'
function XBox() {
  const [show ,setShow] = useState(false)
  function Toggle() {
    setShow(!show)
  }

  return (
    <>
      <div class="c-w100p mb-6">
      {
        show?"":
        <div className="c-xbox row">
        <figure><img src={devUrl + '/images/index/banner-flat-01.jpg'} alt=""/></figure>
          <div className="xbutton" onClick={Toggle}>
            <figure>
              <img src={devUrl + '/images/index/x1.svg'} alt="" />
            </figure>
          </div>
        </div>
      }
        
      </div>
    </>
  )
}

export default XBox

import React from 'react'

import { devUrl } from '../../config/index'
import './ProdOccation.scss'

function ProdOccation() {
  return (
    <>
      {/* <div className="container"> */}
      <div className="section-tilte">
        <div className="title2">
          <h3>創造屬於你的居家森林</h3>
          <h5 className="mt-1">Home Decorating</h5>
        </div>
      </div>
      <div className="wrap">
        <div className="left-pic d-flex text-center">
          <img
            className="livingroom-pic"
            src={devUrl + '/images/images/客廳布置3.jpg'}
            alt=""
          />
          <div className="living-room-mask mask">
            <p>客廳空間佈置</p>
          </div>
        </div>
        <div className="right-pic-top d-flex text-center">
          <img
            className="wall-pic"
            src={devUrl + '/images/images/居家牆面.jpg'}
            alt=""
          />
          <div className="wall-mask mask">
            <p>居家牆面佈置</p>
          </div>
        </div>
        <div className="right-pic-bottom d-flex text-center">
          <img
            className="bathroom-pic"
            src={devUrl + '/images/images/浴室布置.jpeg'}
            alt=""
          />
          <div className="bathroom-mask mask">
            <p>居家浴室佈置</p>
          </div>
        </div>
      </div>

      <div className="section-tilte">
        <div className="title2">
          <h3>駕馭各種商業場合</h3>
          <h5 className="mt-1">Business Occasions</h5>
        </div>
      </div>
      <div className="wrap2">
        <div className="left-pic-top d-flex text-center">
          <img
            className="livingroom-pic"
            src={devUrl + '/images/images/辦公室布置.jpg'}
            alt=""
          />
          <div className="living-room-mask mask">
            <p>辦公室佈置</p>
          </div>
        </div>
        <div className="left-pic-bottom d-flex text-center">
          <img
            className="wall-pic"
            src={devUrl + '/images/images/咖啡廳5.jpg'}
            alt=""
          />
          <div className="wall-mask mask">
            <p>商業空間佈置</p>
          </div>
        </div>
        <div className="right-pic d-flex text-center">
          <img
            className="bathroom-pic"
            src={devUrl + '/images/images/婚禮布置.jpg'}
            alt=""
          />
          <div className="bathroom-mask mask">
            <p>婚禮活動佈置</p>
          </div>
        </div>
      </div>
      {/* container ends  */}
      {/* </div> */}
    </>
  )
}

export default ProdOccation

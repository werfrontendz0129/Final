import React from 'react'
import Login from './Login'
import { devUrl } from '../../../config/index'

function Header() {
  return (
    <>
      <div className="c-header container-fluid ">
        <div className="c-padd row">
          <div className="col-md-2 p-0">
            <figure>
              <img src={devUrl + '/images/Logo2.png'} alt="" />
            </figure>
          </div>
          <div className="col-md-4 p-0 row d-flex align-items-center">
            <p className="c-margin30px h5">植物租賃</p>
            <p className="c-margin30px h5">植物選購</p>
            <p className="c-margin30px h5">教學課程</p>
            <p className="c-margin30px h5">關於我們</p>
          </div>
          <div className="col-md-3 p-0"></div>
          <div className="col cwid p-0 d-flex align-items-center">
            <div className="c-cw row d-flex align-items-center">
              <figure>
                <img src={devUrl + '/images/avatar.png'} alt="" />
              </figure>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

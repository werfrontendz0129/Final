import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <>
      <div className="container-fluid c-width100">
        <div className="c-paddingtome"></div>
        <div className="c-footheight align-items-center row">
          <div className="col-md-3 p-0 m-0">
            <div className="c-email">
              <p className="c-subscription">訂閱電子報, 新品及優惠通知!</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="輸入電子信箱"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    我要訂閱
                  </span>
                </div>
              </div>
            </div>
            <div className="c-socialmedia align-items-center">
              <div className="c-mark">
                <figure>
                  <img src="./images/avatar.png" alt="" />
                </figure>
              </div>
              <div className="c-mark">
                <figure>
                  <img src="./images/avatar.png" alt="" />
                </figure>
              </div>
              <div className="c-mark">
                <figure>
                  <img src="./images/avatar.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-4 row m-0 p-0">
            <div className="c-help">
              <p className="m-0">title</p>
              <ul className="list-unstyled c-list-padding">
                <li>常見問題</li>
                <li>常見問題</li>
                <li>常見問題</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className=" c-reserved">2021 植園Garden All Rights Reserved</div>
        </div>
      </div>
    </>
  )
}

export default Footer

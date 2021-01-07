import React from 'react'
import { devUrl } from '../../config/index'
import './NineGrid.scss'

function NineGrid() {
  return (
    <>
      {/* 九宮格  */}
      <div className="container d-flex justify-content-center ">
        <div className="row ninegrid-row">
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/九龍柱大理石落地盆栽.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/金邊虎尾蘭盆栽.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/9-經典世代 – 龍骨木錦盆栽.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/9-雙色耽美 – 寶扇錦虎尾蘭.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/9-黃金山脈 – 金晃丸盆栽.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/9-青泥燭台 – 大型多肉盆栽.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/9-經典世代 – 龍骨木錦盆栽.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/9-朝霧閣－水泥波紋落地盆栽.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 pad-none mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/9-堅石之境 – 龍骨大理石盆栽.jpg'}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="v-normal-btn">
        <a className="v-btn-p">更多商品</a>
      </div>
    </>
  )
}

export default NineGrid

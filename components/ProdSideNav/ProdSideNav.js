import './ProdSideNav.scss'
import React from 'react'
import { devUrl } from '../../config/index'

function ProdSideNav() {
  return (
    <>
      <ul className="p-0">
        <li className="v-nav-title d-flex justify-content-between">
          <h5 className="m-0">居家佈置</h5>
          <img
            className="v-prod-arrow"
            src={devUrl + '/images/svg/nav arrow close.svg'}
            alt=""
          />
        </li>
        <li className="v-nav-item">大型植栽</li>
        <li className="v-nav-item">中型植栽</li>
        <li className="v-nav-item">小型植栽</li>
      </ul>
      <ul className="p-0 ">
        <li className="v-nav-title-closed d-flex justify-content-between">
          <h5 className="m-0">商業空間</h5>
          <img
            className="v-prod-arrow"
            src={devUrl + '/images/svg/nav arrow open.svg'}
            alt=""
          />
        </li>
        {/* <li className="v-nav-item">大型植栽</li>
                <li className="v-nav-item">中型植栽</li>  */}
      </ul>
      <ul className="p-0 ">
        <li className="v-nav-title d-flex justify-content-between">
          <h5 className="m-0">植栽價格</h5>
          <img
            className="v-prod-arrow"
            src={devUrl + '/images/svg/nav arrow close.svg'}
            alt=""
          />
        </li>
        <li className="v-nav-item"></li>
        <li className="v-nav-item"></li>
      </ul>
    </>
  )
}

export default ProdSideNav

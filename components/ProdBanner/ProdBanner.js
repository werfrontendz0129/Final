import React from 'react'
import { devUrl } from '../../config/index'
import './ProdBanner.scss'

function ProdBanner() {
  return (
    <>
      <div className="text-center">
        <img
          className="banner-wrapper"
          src={devUrl + '/images/images/banner.jpg'}
          alt=""
        />
      </div>
      {/* <div className="text-center">
        <img
          className="v-arrow-down"
          src={devUrl + '/images/svg/arrow-down-01.svg'}
          alt=""
        />
      </div> */}
    </>
  )
}

export default ProdBanner

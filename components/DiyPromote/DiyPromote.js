import React from 'react'
import { devUrl } from '../../config/index'
import './DiyPromote.scss'

function DiyPromote() {
  return (
    <>
      <div class="v-diy-ad row p-0">
        <div class="col-6 p-0">
          <img
            class="v-diy-photo1"
            src={devUrl + '/images/images/rentprodindex/DIY1.jpg'}
            alt=""
          />
        </div>
        <div class="col-6 d-flex justify-content-center p-0">
          <div class="v-diy-subtitle text-center">
            <h3>客製化盆栽</h3>
            <p class="m-0">Customed Potted Culture</p>
          </div>
          <h1 class="v-diy-title">Make It Unique</h1>

          <div class="col-6 d-flex align-self-center justify-content-center">
            <img
              class="v-diy-photo2 "
              src={devUrl + '/images/images/DIY2.jpg'}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DiyPromote

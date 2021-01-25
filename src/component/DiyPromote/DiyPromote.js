import React from 'react'
import { devUrl } from '../../config/index'
import './DiyPromote.scss'
import emailjs from 'emailjs-com';

function DiyPromote() {
  return (
    <>
      <div className="v-diy-ad row p-0">
        <div className="col-6 p-0">
          <img
            className="v-diy-photo1"
            src={devUrl + '/images/images/saleprodindex/DIY1.jpg'}
            alt=""
          />
        </div>
        <div className="col-6 d-flex justify-content-center p-0">

                <h1 className="v-diy-title">Make It Unique</h1>
                <div className="col-7 d-flex align-self-center justify-content-center row">
                        <img
                      className="v-diy-photo2 col-12"
                      src={devUrl + '/images/images/saleprodindex/DIY2.jpg'}
                        alt=""
                        />
                      <div className="text-center" style={{maxHeight:'60px'}}>
                        <button style={{background:'#E58F80',color:'#fff',padding:'15px 80px'}} className="btn text-center">訂製植栽</button>
                      </div>
                </div>

              </div>
      </div>
    </>
  )
}

export default DiyPromote

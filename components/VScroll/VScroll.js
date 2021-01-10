import React from 'react'
import { devUrl } from '../../config/index'
import './VScroll.scss'

function VScroll() {
  const scrollTo = () => {
    window.scrollTo({ top: 900, behavior: 'smooth' })
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <img
          alt=""
          className="VScroll"
          src={devUrl + '/images/svg/arrow-down-01.svg'}
          onClick={scrollTo}
        />
      </div>
    </>
  )
}

export default VScroll

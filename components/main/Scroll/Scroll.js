import React from 'react'
import { devUrl } from '../../../config/index'
import './Scroll.scss'

function Scroll() {
  const scrollTo = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' })
  }
  return (
    <>
      <img
        className="Scroll"
        src={devUrl + '/images/main/Scroll.jpg'}
        onClick={scrollTo}
      />
    </>
  )
}

export default Scroll

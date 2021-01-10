import React, { useState } from 'react'
import { devUrl } from '../../config/index'
import './VScrollTop.scss'

function VScrollTop() {
  const [showScroll, setShowScroll] = useState(false)

  //判斷Scroll到window的位置是哪
  const checkScrollTop = () => {
    window.pageYOffset <= 400 ? setShowScroll(false) : setShowScroll(true)
  }

  //回到window最頂端
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>
      <img
        alt=""
        className="ScrollTop"
        src={devUrl + '/images/svg/ScrollTop.jpg'}
        onClick={scrollToTop}
        style={{ display: showScroll ? 'block' : 'none' }}
      />
    </>
  )
}

export default VScrollTop

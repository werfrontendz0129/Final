import React from 'react'
import ProdHeader from '../components/ProdHeader/ProdHeader'
import ProdBanner from '../components/ProdBanner/ProdBanner'
import ProdOccation from '../components/ProdOccation/ProdOccation'
import NineGrid from '../components/NineGrid/NineGrid'
import VScroll from '../components/VScroll/VScroll'
import ScrollTop from '../components/VScrollTop/VScrollTop'

function RentProdIndex() {
  return (
    <>
      <ProdHeader />
      <ProdBanner />
      <VScroll />
      <ProdOccation />
      <NineGrid />
      <ScrollTop />
    </>
  )
}

export default RentProdIndex

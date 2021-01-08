import React from 'react'
import ProdHeader from '../components/ProdHeader/ProdHeader'
import ProdBanner from '../components/ProdBanner/ProdBanner'
import ProdOccation from '../components/ProdOccation/ProdOccation'
import NineGrid from '../components/NineGrid/NineGrid'
import DiyPromote from '../components/DiyPromote/DiyPromote'
import VScroll from '../components/VScroll/VScroll'
import ScrollTop from '../components/VScrollTop/VScrollTop'

function SaleProdIndex() {
  return (
    <>
      <ProdHeader />
      <ProdBanner />
      <VScroll />
      <ProdOccation />
      <DiyPromote />
      <NineGrid />
      <ScrollTop />
    </>
  )
}

export default SaleProdIndex

import React from 'react'
import ProductCardRent from '../components/ProdCardRent/ProductCardRent'
import ProdHeader from '../components/ProdHeader/ProdHeader'
import ProdDetail from '../components/ProdDetail/ProdDetail'
import ProdCardSm from '../components/ProdCardSm/ProdCardSm'
import VBreadCrumbs from '../components/VBreadCrumbs/VBreadCrumbs'

function RentProdDetail() {
  return (
    <>
      <ProdHeader />
      <VBreadCrumbs />
      <ProductCardRent />
      <ProdDetail />
      <ProdCardSm />
    </>
  )
}

export default RentProdDetail

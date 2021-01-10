import React, { useState, useEffect } from 'react'
import ProdHeader from '../components/ProdHeader/ProdHeader'
import VBreadCrumbs from '../components/VBreadCrumbs/VBreadCrumbs'
import ProdSearchBar from '../components/ProdSearchBar/ProdSearchBar'
import ProdSideNav from '../components/ProdSideNav/ProdSideNav'
import ProdCardMd from '../components/ProdCardMd/ProdCardMd'
import './RentProdList.scss'

function RentProdList() {
  return (
    <>
      <ProdHeader />
      <VBreadCrumbs />
      <div className="v-prod-list-wrapper row justify-content-between p-0">
        <div className="v-prod-sidenav col-2 p-0">
          <ProdSearchBar />
          <ProdSideNav />
        </div>
        <div className="v-prod-wrap col-9 p-0 m-0">
          <ProdCardMd />
        </div>
      </div>
    </>
  )
}

export default RentProdList

import React,{useEffect, useState} from 'react'
import { withRouter,useParams,NavLink ,useLocation} from 'react-router-dom'
import ProdHeader from '../component/ProdHeader/ProdHeader'
import PurchaseBanner from '../component/ProdBanner/PurchaseBanner'
import PurchaseOccation from '../component/ProdOccasion/PurchaseOccasion'
import PurchaseNineGrid from '../component/NineGrid/PurchaseNineGrid'
import DiyPromote from '../component/DiyPromote/DiyPromote'
import VScroll from '../component/VScroll/VScroll'
import ScrollTop from '../component/VScrollTop/VScrollTop'
import HeaderB from '../component/Header/HeaderB'
import Footer from '../component/Footer/Footer'


function PurchaseProdIndex(props) {
  const [occa,setO] =useState("")

useEffect(()=>{
 if (occa)
  props.setOccasion(occa)
  console.log(occa);
},[occa])
  return (
    <>
      <HeaderB />
      <PurchaseBanner />
      <VScroll />
      <div className="v-max">
      <PurchaseOccation setO={setO}/>
      </div>
      <DiyPromote />
      <div className="v-max">
      <PurchaseNineGrid />
      </div>
      <ScrollTop />
      <Footer />
    </>
  )
}

export default withRouter(PurchaseProdIndex)

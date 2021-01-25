import React,{useEffect, useState} from 'react'
import { withRouter,useParams,NavLink ,useLocation} from 'react-router-dom'
import ProdHeader from '../component/ProdHeader/ProdHeader'
import RentBanner from '../component/ProdBanner/RentBanner'
import RentOccasion from '../component/ProdOccasion/RentOccasion'
import RentNineGrid from '../component/NineGrid/RentNineGrid'
import VScroll from '../component/VScroll/VScroll'
import ScrollTop from '../component/VScrollTop/VScrollTop'
import HeaderB from '../component/Header/HeaderB'
import Footer from '../component/Footer/Footer'


function RentProdIndex(props) {
const [occa,setO] =useState("")

useEffect(()=>{
 if (occa)
  props.setOccasion(occa)
  console.log(occa);
},[occa])

  return (
    <>
      <HeaderB />
      <RentBanner />
      <VScroll />
      <RentOccasion 
        setO={setO}/>
      <RentNineGrid />
      <ScrollTop />
      <Footer />
    </>
  )
}

export default withRouter(RentProdIndex)

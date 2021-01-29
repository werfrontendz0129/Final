import React, { useState, useEffect, useContext,withRouter } from 'react'
import '../component/ProdCard/ProductCard.scss'
import './vpages.scss'
import ProdHeaderL from '../component/ProdHeader/ProdHeaderL'
import PurchaseBreadcrumbs from '../component/ProdBreadcrumbs/PurchaseBreadcrumbs'
import PurchaseCard from '../component/ProdCard/PurchaseCard'
import PurchaseDetail from '../component/ProdDetail/PurchaseDetail'
import PurchaseCardSm from '../component/ProdCardSm/PurchaseCardSm'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { devUrl } from '../config/index'
import { UserContext } from '../component/Index/UserContext'
import Footer from '../component/Footer/Footer'
import HeaderA from '../component/Header/HeaderA'



function PurchaseProdDetail(props) {
  //判斷登入狀態
  const [isAuth,setIsAuth]=useState(true)
  const { user,setUser } = useContext(UserContext)

  // useEffect(()=>{
  //   if(!user){setIsAuth(false)}
  //   else{setIsAuth(true)}
  // },[user])
  // if(user.id){
  //   setIsAuth(true)
  // }

  let {id} =useParams()
  console.log(id)
  let member_id = 1
  // let url =  `http://localhost:3001/products/get/${id}`  //not login

  let url =  `http://localhost:3001/purchase/get/${id}/` + member_id //login
  const[prod,setProd] =useState([])   
  useEffect(() =>{
    axios.get(url)
    .then((response)=>{
      //把預設值傳到下一層
      setProd(response.data)})
    .catch((err)=> console.log(err))
  },[])
  // console.log(prod);
  // console.log(props);
  return (
    <>

      <HeaderA />

      <PurchaseBreadcrumbs 
        value={prod}
      />

      <PurchaseCard
        isAuth={isAuth}
        value={prod}
      />
     <div className="v-max">          
      <PurchaseDetail 
        value={prod}
      />
      <PurchaseCardSm 
        category={prod.product_category}
        id={prod._id}
      />
    </div>
    <Footer />
    </>
  )
}

export default PurchaseProdDetail

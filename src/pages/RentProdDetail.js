import React, { useState, useEffect, useContext,withRouter } from 'react'
import '../component/ProdCard/ProductCard.scss'
import './vpages.scss'
import ProdHeaderL from '../component/ProdHeader/ProdHeaderL'
import RentBreadcrumbs from '../component/ProdBreadcrumbs/RentBreadcrumbs'
import RentCard from '../component/ProdCard/RentCard'
import RentDetail from '../component/ProdDetail/RentDetail'
import RentCardSm from '../component/ProdCardSm/RentCardSm'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { devUrl } from '../config/index'
import { UserContext } from '../component/Index/UserContext'
import HeaderA from '../component/Header/HeaderA'
import Footer from '../component/Footer/Footer'



function RentProdDetail(props) {
  // 判斷登入狀態
  const [isAuth,setIsAuth]=useState(true)

  // const {user, setUser} =useContext(UserContext)

  // setIsAuth(user)
  // const { user,setUser } = useContext(UserContext)

  // useEffect(()=>{
  //   if(!user){setIsAuth(false)}
  //   else{setIsAuth(true)}
  // },[user])

  let {id} =useParams()
  // console.log(id)
  let member_id = 1
  // let url =  `http://localhost:3001/products/get/${id}`  //not login

  let url =  `http://localhost:3001/products/get/${id}/` + member_id //login
  const[prod,setProd] =useState([])   
  useEffect(() =>{
    axios.get(url)
    .then((response)=>{
      // console.log(response)
      //把預設值傳到下一層
      setProd(response.data)})
    .catch((err)=> console.log(err))
  },[])
  console.log(id)
  // console.log(prod);
  // console.log(props);

  return (
    <>

      <HeaderA isAuth={true} />


      <RentBreadcrumbs 
        value={prod}
      />

      <RentCard
        isAuth={isAuth}
        value={prod}
      />
     <div className="v-max">          
      <RentDetail 
        value={prod}
      />
      <RentCardSm 
        category={prod.product_category}
        id={prod._id}
      />
    </div>
    <Footer />
    </>
  )
}

export default RentProdDetail

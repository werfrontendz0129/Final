import React, { useEffect, useState } from 'react'
import './ProdCardSm.scss'
import { NavLink, useParams } from 'react-router-dom'
// import { devUrl } from '../../config/index'
import axios from 'axios'

// 假資料
// import { prod } from '../../cardsmdata'


function PurchaseCardSm(props) {
  // console.log(props)

  //假資料測試
  // const [products, setProducts] = useState(prod.porducts)


  const[cat,setCat]=useState([])
  const id = useParams()
  console.log(props.category)
  console.log(props)
  useEffect(()=>{
    axios.get(`http://localhost:3001/purchase/getr/${props.category}/${props.id}`)
    .then((response) =>{
      // console.log(response.data);
      setCat(response.data)
    })
    .catch(function(error){
      console.log(error)})
} ,[props.category])


  return (
 <>
      <div className="v-recommend-goods ">
        <div className="text-center">
          <h3>你可能會喜歡</h3>
          <h5>You May Also Like...</h5>
        </div>
        <div className="d-flex justify-content-center v-card-group">
          {cat.map((e) => (
            <figure key={e._id} className="v-product-card ml-0" onClick={()=>window.location.reload()}>
            <a href={`/purchase/list/${e._id}`} style={{textDecoration:"none"}}>
              <img className="v-recommend-img" src={e.product_img} alt="" />
              <figcaption>
                <p style={{color:'#494949'}}>{e.product_name}</p>
              </figcaption>
              <p className="v-price">NT$ {e.product_price}/月</p>
              </a>
            </figure>
          ))}
        </div>
      </div>
    </>
  )
}

export default PurchaseCardSm

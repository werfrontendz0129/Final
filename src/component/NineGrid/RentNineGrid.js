import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { devUrl } from '../../config/index'
import './NineGrid.scss'
import axios from 'axios'

function RentNineGrid() {
  const[nineProd,setnineProd]=useState([])
  useEffect(() =>{
    getCategoryData()
  },[])

  async function getCategoryData() {
    try {
      const response = await axios.get(`http://localhost:3001/products/getn/大型植栽`)
      if (response.data) {
        setnineProd(response.data)
      }
    } catch (error) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  return (
    <>
      {/* 九宮格  */}
      <div className="container d-flex justify-content-center ">
        <div className="row ninegrid-row">
        {nineProd.map((e) => (
          <div key={e._id} className="col-lg-4 col-md-6" >
          <NavLink to={`/rental/list/${e._id}`}>
            <img
              className="v-ninegrid-item"
              src={e.product_img}
              alt=""
            />
          </NavLink>
          </div>
          ))}
          {/* <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/rentprodindex/金邊虎尾蘭盆栽.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={
                devUrl +
                '/images/images/rentprodindex/9-經典世代 – 龍骨木錦盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={
                devUrl +
                '/images/images/rentprodindex/9-雙色耽美 – 寶扇錦虎尾蘭.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl +
                '/images/images/rentprodindex/9-黃金山脈 – 金晃丸盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl +
                '/images/images/rentprodindex/9-青泥燭台 – 大型多肉盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl +
                '/images/images/rentprodindex/9-經典世代 – 龍骨木錦盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl +
                '/images/images/rentprodindex/9-朝霧閣－水泥波紋落地盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 pad-none mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl +
                '/images/images/rentprodindex/9-堅石之境 – 龍骨大理石盆栽.jpg'
              }
              alt=""
            />
          </div> */}
        </div>
      </div>
      <div  className="v-normal-btn">
        <NavLink style={{color:'#fff',textDecoration:"none"}}  to="/rental/list">
          <div className="v-btn-p">更多商品</div>
        </NavLink>
      </div>
    </>
  )
}

export default RentNineGrid

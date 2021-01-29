import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { devUrl } from '../../config/index'
import './NineGrid.scss'
import axios from 'axios'

function PurchaseNineGrid() {
  const[nineProd,setnineProd]=useState([])
  useEffect(() =>{
    getCategoryData()
  },[])

  async function getCategoryData() {
    try {
      const response = await axios.get(`http://localhost:3001/purchase/getn/小型植栽`)
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
          <NavLink to={`/purchase/list/${e._id}`}>
            <img
              className="v-ninegrid-item"
              src={e.product_img}
              alt=""
            />
          </NavLink>
          </div>
          ))}
      </div>
     </div>
      {/* <div className="container d-flex justify-content-center ">
        <div className="row ninegrid-row">
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={
                devUrl + '/images/images/saleprodindex/派拉蒙巴西里香草盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/朝天椒.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/貓薄荷.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/朝天椒.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/貓薄荷.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl + '/images/images/saleprodindex/派拉蒙巴西里香草盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/貓薄荷.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl + '/images/images/saleprodindex/派拉蒙巴西里香草盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 pad-none mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/朝天椒.jpg'}
              alt=""
            />
          </div>
        </div>
      </div> */}
      <div className="v-normal-btn">
        <NavLink style={{color:'#fff',textDecoration:"none"}} to="/purchase/list">
          <div className="v-btn-p">更多商品</div>
        </NavLink>
      </div>
    </>
  )
}

export default PurchaseNineGrid

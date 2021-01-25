import React from 'react'
import './ProdDetail.scss'

function PurchaseDetail(props) {
  // console.log(props.value);
  return (
    <>
      <div className="v-detail-lg row">
        {/* <!-- 第一列 --> */}
        <div className="col-6 p-0 m-0">
          <img
            className="v-product-detail-img m-0"
            src={props.value.product_detail_img1}
            alt=""
          />
        </div>
        <div className="col-6 d-flex p-0 justify-content-center">
          <div className="v-featuretext align-self-center ">
            <h3> 特性 </h3>
            <p>
              {props.value.product_detail1}
            </p>
          </div>
        </div>
        {/* <!-- 第二列 --> */}
        <div className="col-6 d-flex p-0 justify-content-center">
          <div className="v-featuretext align-self-center ">
            <h3> 光線 </h3>
            <p>
            {props.value.product_detail2}
            </p>
          </div>
        </div>
        <div className="col-6 p-0">
          <img
            className="v-product-detail-img p-0"
            src={props.value.product_detail_img2}
            alt=""
          />
        </div>
        {/* <!-- 第三列 --> */}
        <div className="col-6 p-0">
          <img
            className="v-product-detail-img p-0"
            src={props.value.product_detail_img3}
            alt=""
          />
        </div>
        <div className="col-6 d-flex p-0 justify-content-center">
          <div className="v-featuretext align-self-center ">
            <h3> 水分 </h3>
            <p>
            {props.value.product_detail3}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseDetail

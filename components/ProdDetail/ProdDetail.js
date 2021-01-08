import React from 'react'
import { devUrl } from '../../config/index'
import './ProdDetail.scss'

function ProdDetail() {
  return (
    <>
      <div className="v-detail-lg row">
        {/* <!-- 第一列 --> */}
        <div className="col-6 p-0">
          <img
            className="v-product-detail-img"
            src={devUrl + '/images/images/Fiddle 琴葉榕大型植栽2.jpg'}
            alt=""
          />
        </div>
        <div className="col-6 d-flex p-0 justify-content-center">
          <div className="v-featuretext align-self-center ">
            <h3> 特性 </h3>
            <p>
              葉子大片厚實，形狀有點像小提琴的輪廓，是個高個。換過幾次盆後，可長成大型植栽。
            </p>
          </div>
        </div>
        {/* <!-- 第二列 --> */}
        <div className="col-6 d-flex p-0 justify-content-center">
          <div className="v-featuretext align-self-center ">
            <h3> 光線 </h3>
            <p>
              置於室內通風透光的位置，避免養在密閉空間，最好每天有適當的散射光，起碼要光線明亮的位置。
            </p>
          </div>
        </div>
        <div className="col-6 p-0">
          <img
            className="v-product-detail-img p-0"
            src={devUrl + '/images/images/Fiddle 琴葉榕大型植栽3.jpg'}
            alt=""
          />
        </div>
        {/* <!-- 第三列 --> */}
        <div className="col-6 p-0">
          <img
            className="v-product-detail-img p-0"
            src={devUrl + '/images/images/Fiddle 琴葉榕大型植栽4.jpg'}
            alt=""
          />
        </div>
        <div className="col-6 d-flex p-0 justify-content-center">
          <div className="v-featuretext align-self-center ">
            <h3> 水分 </h3>
            <p>
              土面乾燥時，充分澆水至水從底流出，忌積水。保持盆土微不積水的狀態。乾燥天氣可用噴霧器噴灑葉子表面。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProdDetail

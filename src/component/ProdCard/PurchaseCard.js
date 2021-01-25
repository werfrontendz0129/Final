import React, {useEffect, useState} from 'react'

import './ProductCard.scss'
import { devUrl } from '../../config/index'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import { Modal } from 'react-bootstrap';
//date-calender2
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



function PurchaseCard(props) {
  console.log(props.value.product_info)
//判斷是否登入

const ifLogin =() =>{
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    icon: 'warning',
    title: '請先登入會員',
    html:'登入會員後，即能將商品加入購物車',
    showCancelButton: true,
    cancelButtonText: '稍後登入',
    confirmButtonText: '立即登入',
    confirmButtonColor: '#6C8650'
  }).then((result) => {
    // console.log(result)
    if (result.value) {
      //這邊之後要改成登入頁面
      // history.push('/course')
    }})
}

//判斷是否有選擇日期跟數量
const ifChoose =() => {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
  icon: 'warning',
  html:'請選擇租賃日期與數量',
  confirmButtonColor: '#6C8650'
  })
}

const ifInform =() =>{
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    icon: 'warning',
    title: '請先登入會員',
    html:'登入會員後，即可預約貨到通知',
    confirmButtonColor: '#6C8650'
  })
}

const ifAddlike =() =>{
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    icon: 'warning',
    title: '請先登入會員',
    html:'登入會員後，即可將商品加入收藏',
    confirmButtonColor: '#6C8650'
  })
}


//分享
  const url= window.location.href
  
  const showSuccess =() =>{
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      icon: 'success',
      // title: '網址複製成功',
      html:'網址複製成功，立即分享給好友！',
      confirmButtonColor: '#6C8650'
    })
  }

//日期
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const minDay = 14

//數量
const [number, setNumber] = useState('');
  const product = {countInStock:8}
  if (product.countInStock >10){
  product.countInStock=10
  }
  
  const printValues = e => {
    e.preventDefault();
  };
  // console.log(number);

//  加入購物車
const [mycart, setMycart] = useState([])
const updateCartToLocalStorage = (item) => {
  const currentCart = JSON.parse(localStorage.getItem('rent')) || []
  // find if the product in the localstorage with its id
  const index = currentCart.findIndex((v) => v.id === item.id)
  if (index > -1) {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      icon: 'warning',
      title: '此商品已經在購物車中',
      html:'您可至<a href="/course">購物車</a>查看或修改數量',
      confirmButtonColor: '#6C8650'
    })
    return
  } else {
    currentCart.push(item)
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      icon: 'success',
      title: '加入購物車成功',
      html:'您可至<a href="/course">購物車</a>查看或修改數量',
      confirmButtonColor: '#6C8650'
    })
  }
  localStorage.setItem('rent', JSON.stringify(currentCart))
  // 設定資料
  setMycart(currentCart)
}



//貨到通知
const [informMe, setInformMe] = useState([])
const updateInformMeToLocalStorage = (item) => {
  const currentInform = JSON.parse(localStorage.getItem('inform')) || []
  const index = currentInform.findIndex((v) => v.id === item.id)
  if (index > -1) {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      icon: 'warning',
      title: '已申請過到貨通知',
      html:'很抱歉，商品熱銷中，到貨時會以email通知您'
    })
    return
  } else {
    currentInform.push(item)
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      icon: 'success',
      title: '到貨通知',
      html:'到貨時會以email通知您',
      confirmButtonColor: '#6C8650'
    })
  }
  localStorage.setItem('inform', JSON.stringify(currentInform))
  // 設定資料
  setInformMe(currentInform)
}











//加入收藏

// console.log(props.value.member_collection)
const [isLike, setIsLike] = useState("");
useEffect(()=>{
  // console.log(props.value.member_collection)
  setIsLike(props.value.member_collection)
},[props.value.member_collection])


const toggleLike = () => 
props.isAuth ? setIsLike(!isLike) : setIsLike(false)



// console.log(props.value._id)
async function setLikeData() {
    const MySwal = withReactContent(Swal)
  // console.log(props.value._id) //找到該商品id
  props.isAuth ? 
    (await axios.patch(`http://localhost:3001/products/update/${props.value._id}`,{
    })
    .then((response)=>
    {
      MySwal.fire({
        icon: 'success',
        title: isLike === true ? "移除收藏" : "成功收藏",
        html:isLike === true ? "再次點選可以將商品重新收藏唷" : '您可至<a href="#">會員中心</a>查看我的收藏。'
         })
      }
    )
    .catch ((error) =>{
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        icon: 'warning',
        title: '無法加入收藏',
        html:'伺服器忙碌中，請稍後再試一次',
        confirmButtonColor: '#6C8650'
      })
    console.log(error)})) : (
      ifAddlike()
    )
  }


  return (
    <>
      <div className="v-bg">
        <div className="v-card-lg">
          <div className="row m-0 ">
            <div className="v-img-part col-xl-6 col-lg-12 p-0">
              <img
                className="v-product-img-lg"
                src={props.value.product_img}
                alt=""
              />
              <div className="v-product-img-browse  justify-content-between d-flex row m-0">
                <div className="v-product-left align-self-center">
                  <img
                    className="py-5 v-prod-arrow"
                    src={devUrl + '/images/svg/prod-arrow-01.svg'}
                    alt=""
                  />
                </div>
                <div className="col-3 p-0">
                  <img
                    className=" v-product-img-sm"
                    src={props.value.product_detail_img1}
                    alt=""
                  />
                </div>
                <div className="col-3 p-0">
                  <img
                    className=" v-product-img-sm"
                    src={props.value.product_detail_img2}
                    alt=""
                  />
                </div>
                <div className="col-3 p-0">
                  <img
                    className="  v-product-img-sm"
                    src={props.value.product_detail_img3}
                    alt=""
                  />
                </div>
                <div className="v-product-right align-self-center">
                  <img
                    className="py-5 v-prod-arrow"
                    src={devUrl + '/images/svg/prod-arrow-02.svg'}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* 這裡是表單處  */}
            <div className="v-form-part col-xl-5 position-relative">
              <h2>{props.value.product_name}</h2>
              <p className="v-price">NT$ {props.value.product_price}</p>
              <p className="v-product-description">
                {props.value.product_info}
              </p>
{/* 日期 */}
              <form action="" onSubmit={printValues}>
                <div className="form-group form-row">
                    {/* <label
                      className="col-6 p-0 rent-date"
                      htmlFor="v-start-rent-date"
                    >
                      開始租賃日期
                    </label>
                    <label
                      className="col-6 p-0 rent-date "
                      htmlFor="v-end-rent-date"
                    >
                      結束租賃日期
                    </label> */}
                 
                  {/* <div className="col-12 p-0">
                    <DateRangePicker
                            startDate={startDate}
                            endDate={endDate}
                            onStartDateChange={setStartDate}
                            onEndDateChange={setEndDate}
                            minimumDate={new Date()}
                            format='dd MMM yyyy'
                            locale={enGB}
                            minimumLength = {minDay}
                          >
                            {({ startDateInputProps, endDateInputProps, focus }) => (
                              <div className="form-row col-12 v-input-style p-0 m-0">
                                <input 
                                id="v-start-rent-date "
                                  className={'input col-6 rent-date' + (focus === START_DATE ? ' -focused' : '')}
                                  {...startDateInputProps}
                                  placeholder='開始租賃日期'
                                />
                                <input 
                                id="v-end-rent-date"
                                  className={'input col-6'  + (focus === END_DATE ? ' -focused' : '')}
                                  {...endDateInputProps}
                                  placeholder='結束租賃日期'
                                />
                              </div>
                            )}
                   </DateRangePicker>
                  </div> */}
                </div>
{/* 數量 */}
                <div className="form-group form-row v-input-style-lg">
                  <label className="col-12" htmlFor="v-buy-amount">
                    選擇數量
                  </label>
                  <select id="v-buy-amount"
                              className=" col-12 form-control"
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                            >
                            <option defaultValue="selected" disabled="disabled" style={{display: 'none'}} value=''>選擇數量</option>
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x+1} value={x+1} >
                                  {x+1}
                                  </option>
                                )
                              )}
                            </select>
                  {/* <input
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                    name="number"
                    className=" col-12 form-control"
                    id="v-buy-amount"
                    type="number"
                    placeholder="選購數量"
                  /> */}
                </div>
{/* 加入購物車 */}
                <div className="form-group form-row v-btn-g v-btn-checkdate">
                  <input
                    value="加入購物車"
                    className=" col-12 form-control btn-primary"
                    type="button"
                    onClick={() => 
                      props.isAuth ?  (
                        startDate!=='' && endDate!=='' && number!=="" ?
                      (  updateCartToLocalStorage({
                        id: props.value._id,
                        name: props.value.product_name,
                        qtys: number,
                        price: props.value.product_price,
                        image: props.value.product_img,
                        info: props.value.product_info,
                        startdates: startDate.toString().substring(3,15),
                        enddates: endDate.toString().substring(3,15)
                      })) : (
                        ifChoose()
                      )
                      ) : (
                        ifLogin()
                      ) 
                    }
                  />
    
{/* 貨到通知與加入收藏 */}
                </div>
                <div className="form-group form-row v-btn-g">
                  <div className="col-6 p-0 m-0">
                    <input
                      className={ props.value.product_inventory>0 ? "form-control":"form-control btn-secondary v-inform" }
                      type="button"
                      disabled= { props.value.product_inventory > 0 ? "disabled" : "" }
                      value="貨到通知"
                      onClick={() => 
                        props.isAuth ?  
                        updateInformMeToLocalStorage({
                        id: props.value._id,
                        name: "貨到通知"})
                       : 
                        ifInform()
                    }
                    />
                  </div>
                  <div className="col-6 p-0 m-0 v-btn-g v-btn-addlike">
                    <button className="form-control btn-danger"
                      onClick={()=> {
                          setLikeData()
                          toggleLike()
                      }}
                    >
                  { props.isAuth ? ( isLike === true ? "移除收藏" : "加入收藏") : ('加入收藏')}
                    </button>
                  </div>
                </div>
              </form>
{/* 這裡是分享 */}
              <div className="v-card-des-wrapper v-card-des-rwd">
                <div className="v-share d-flex align-items-center">
                  <p className="v-share-text m-0">分享商品：</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={'https://www.facebook.com/sharer.php?u='+url}
                  >
                    <img src={devUrl + '/images/svg/fb-icon.svg'} alt="" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={'https://lineit.line.me/share/ui?url='+url}
                  >
                    <img src={devUrl + '/images/svg/ig-icon.svg'} alt="" />
                  </a>
                  <div style={{border:"none",background:"transparent"}}
                       onClick={() => {navigator.clipboard.writeText(url) 
                      showSuccess()
                      //  handleShow()
                        }} >
                    <img src={devUrl + '/images/svg/link-icon.svg'} alt="" />
                  </div>

       {/* <Modal  centered size="sm" className="v-modal" show={show} onHide={handleClose}>
       <Modal.Header closeButton style={{border:'none' , padding:"16px 20px 10px 0" }}></Modal.Header>
        <Modal.Body className="mb-4 text-center p-0">網址複製成功</Modal.Body>
        <div className="d-flex mb-3 justify-content-center">
        <button style={{background:"#6c8650" , border:"0" , borderRadius:"1px" }} className="mx-5 v-got-it-btn btn btn-primary btn-block" onClick={handleClose}>
            我知道了
          </button>
        </div>
      </Modal> */}





                </div>
                <div className="shipping-des">
                  <h5>運送說明：大型植栽僅供宅配</h5>
                </div>
                <div className="other-des">
                  <p>備註：植株商品不適用七日鑑賞期，最短租期14日。</p>
                </div>
              </div>
            </div>
          </div>
          {/* card ends  */}
        </div>
      </div>
    </>
  )
}

export default PurchaseCard

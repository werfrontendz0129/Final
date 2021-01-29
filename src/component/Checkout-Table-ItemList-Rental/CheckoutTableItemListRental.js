import React,{useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './CheckoutTableItemListRental.scss';
import Axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from 'emailjs-com'

function CheckoutTableItemListRental() {
    const url = "http://localhost:3001/orderList/create/fullover"
    const [mycart, setMycart] = useState([])
    const [mycartDisplay, setMycartDisplay] = useState([])
    const shippinginfo = JSON.parse(localStorage.getItem('shipping')) || '[]'
    const paymentinfo = JSON.parse(localStorage.getItem('payment')) || '[]'
    const Today=new Date()
    const today = Today.getFullYear() + '-' + (Today.getMonth() + 1) + '-' + Today.getDate();
    const shippingaddress = shippinginfo[0].addressCity + shippinginfo[0].addressDistrict + shippinginfo[0].addressDetail;
    const receiver = shippinginfo[0].receiver;
    const cardHolder = paymentinfo[0].card_holder;
    const lastfodig = paymentinfo[0].number;
    const prodId = mycartDisplay;
    const MySwal = withReactContent(Swal)
    
    const orderid = require('order-id')('mysecret');
      const id = orderid.generate();
      orderid.getTime(id);
    const price = JSON.parse(localStorage.getItem('prices')) || '[]'

    const rentalOrder = ({
    orderDate : today,
    orderNumber : id,
    shippingaddress : shippingaddress,
    Receiver : receiver,
    CardHolder : cardHolder,
    Lastfodig : lastfodig,
    prodId:prodId,
    Price: price
      })

     function submit(e){
        // e.preventDefault()
        Axios.post(url, rentalOrder)
        .then(res=>{
          sendmail()
          if (res.data) {
            MySwal.fire({
              icon: 'success',
              title: '訂單已成立',
              showCloseButton: true,
              showCancelButton: true,
              focusConfirm: false,
              cancelButtonColor:'#6C8650',
              cancelButtonText:
                '<a href="/members/rentaldetail" style="color: #FFFFFF;"> 查看訂單詳情 </a>',
              cancelButtonAriaLabel: '查看訂單詳情',
              confirmButtonColor:'#E58F80',
              confirmButtonText:
                '<a href="/" style="color: #FFFFFF; width:140""> 返回首頁購物</a>',
              confirmButtonAriaLabel: '返回首頁購物',
              html:
                '可至<a href="/member">會員中心</a>查看查看訂單詳情' 
            }).then(() => {
              localStorage.removeItem('shipping')
              localStorage.removeItem('payment')
              localStorage.removeItem('rent')
              localStorage.removeItem('prices')
            })
          }
        })
        .catch(error => {
          console.log(error.response)
        })
      }
    
    function getCartFromLocalStorage() {
        const newCart = localStorage.getItem('rent') || '[]'
        setMycart(JSON.parse(newCart))
      }
    
      useEffect(() => {
        getCartFromLocalStorage()
      }, [])
    
      useEffect(() => {
        let newMycartDisplay = []
    
        for (let i = 0; i < mycart.length; i++) {
          const index = newMycartDisplay.findIndex(
            (value) => value.id === mycart[i].id
          )
          if (index !== -1) {
            newMycartDisplay[index].amount += mycart[i].amount
          } else {
            const newItem = { ...mycart[i] }
            newMycartDisplay = [...newMycartDisplay, newItem]
          }
        }
        setMycartDisplay(newMycartDisplay)
      }, [mycart])

      const currentCart = JSON.parse(localStorage.getItem('rent')) || '[]'
      const DAY = 1000 * 60 * 60  * 24
      const startdate = new Date(currentCart[0].startdates)
      const enddate = new Date(currentCart[0].enddates)
      const days_passed = Math.round((enddate.getTime() - startdate.getTime()) / DAY)
      
//寄信功能
function sendmail(e) {
  // e.preventDefault()
  let templateParams =
  {
  member: receiver, //要改成登入者姓名
  orderDate: today,
  orderNumber: id,
  name: mycartDisplay[0].name,
  startdates: mycartDisplay[0].startdates,
  enddates: mycartDisplay[0].enddates,
  image: mycartDisplay[0].images,
  dates: days_passed,
  qtys: mycartDisplay[0].qtys,
  price: mycartDisplay[0].price,
  Receiver: receiver,
  shippingaddress: shippingaddress,
  member_mail: 'billcyen@gmail.com', //要改成登入者信箱
  }
  
  
  let service_id = 'default_service'
  let template_id = 'template_xrdg0xn'
  let userID = 'user_V1xvLcD7TEshQMhDQrKmj'
  emailjs
  .send(service_id, template_id, templateParams, userID)
  .then((response) => {
  console.log('SUCCESS!', response.status, response.text)
  })
  .catch((error) => {
  console.log('FAILED...', error)
  })
  }

const display = (
    <>
    {mycartDisplay.map((item, index) => {
    return (
        <React.Fragment key={item.id}>
           
                                <tbody>
                                    <tr className="d-flex justify-content-between"> 
                                        <td className="d-flex justify-content-center align-items-center" height="140" width="10%">
                                        <p>{item.id}</p>
                                        </td>
                                        <th className="d-flex justify-content-between align-items-center" scope="row" width="12%" height="140">
                                            <class className="aside"><img src={item.image} className="b-complete-img-sm" /></class>
                                        </th>
                                        <td className="d-flex justify-content-center align-items-center" width="15%" height="140">
                                            <p>{item.name}</p>
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center flex-column" width="19%" height="140"> 
                                            <p className="text-center m-0">{item.startdates}</p>
                                            <p className="text-center m-0">~</p>
                                            <p className="text-center m-0">{item.enddates}</p>
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center" width="15%" height="140">
                                            <p>{days_passed}天</p>
                                        </td>
                                        <td height="140" width="9%" className="b-completepage-detailinfo justify-content-center">
                                                <p>{item.qtys}</p>
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center" height="140" width="10%">
                                            <div className="b-completepage-detailinfo"> 
                                                <p className="b-completepage-detail-daily b-completepage-fontSize">NT${item.price}</p>
                                                <p className="b-completepage-detail-daily b-completepage-fontSize"> /日 </p> 
                                            </div>
                                        </td>
                                        <td className="d-flex justify-content-center align-items-center" height="140" width="10%">
                                            <div >NT${item.price*item.qtys*days_passed}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-0"><div style={{width: "100%", height: 1, borderTop: '1px solid #D1CFCF', padding: 0}}></div></td>
                                    </tr>
                                    
                                </tbody>
                            
            </React.Fragment>
       )
       })}
      </>)

return (
    <>
     <div className=" b-completepage-itemlist">
            <div className="row">
                    <h4>租賃商品列表</h4>
                    <div className="card " style={{minWidth: "100%",  border:0}}>
                            <table className="table table-borderless">
                                <thead className="text-muted ">
                                    <tr className="large text-uppercase d-flex justify-content-between b-complete-tableTitle">
                                        <th scope="col" width="10%" className="text-center p-2">No.</th>
                                        <th scope="col" width="12%" className="p-2"></th>
                                        <th scope="col" width="15%" className="text-center p-2">產品名稱</th>
                                        <th scope="col" width="19%" className="text-center p-2">租賃區間</th>
                                        <th scope="col" width="15%" className="text-center p-2">租賃天數</th>
                                        <th scope="col" width="9%" className="text-center p-2">數量</th>
                                        <th scope="col" width="10%" className="text-center p-2">價格</th>
                                        <th scope="col" width="10%" className="text-center p-2">小記</th>
                                        
                                    </tr>
                                </thead>
                            {display}
                            </table>
                      </div>
              </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={submit}  className="b-completepage-button-to-mainpages">確認購買</button> 
      </div> 
    </>
  );
}

export default CheckoutTableItemListRental

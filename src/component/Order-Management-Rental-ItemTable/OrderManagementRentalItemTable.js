import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './OrderManagementRentalItemTable.scss'
import Axios from 'axios';

function OrderManagementRentalItemTable() {
    const[orderitemview, setOrderitemview] = useState([]);
    const [mycart, setMycart] = useState([])
    const Return = JSON.parse(localStorage.getItem('submit')) || '[]'

    const updateCartToLocalStorage = (item) => {
        const currentCart = JSON.parse(localStorage.getItem('return')) || []
        
    
        // find if the product in the localstorage with its id
        const index = currentCart.findIndex((v) => v.id === item.id)
        if (index > -1) {
            
            return
          } else {
            currentCart.push(item)
          
          }
      
  
        localStorage.setItem('return', JSON.stringify(currentCart))
        // 設定資料
        setMycart(currentCart)
      }
    


    useEffect(()=>{
        Axios.get('http://localhost:3001/orderList/')
        .then((response) => {
            setOrderitemview(response.data[0].user_rental[0].prodId[0]) 
        })
        .catch((error) => console.log(error))
        }, [])

    return orderitemview &&(
        <>
         <div className="b-member-Rental-order-account-view">
                <div className="b-member-Rental-order-div-title">
                    <p>租賃商品明細</p>
                </div>
                <div className="px-2">
                    <table className="table" style={{width: 900}}>
                        <thead className="table-borderless" style={{backgroundColor: "#E6E9DA"}}>
                            <tr>
                                <th scope="col" width="50px" className="text-center">No.</th>
                                <th scope="col" width="90px" className="text-center"></th>
                                <th scope="col" width="190px" className="text-center">產品名稱</th>
                                <th scope="col" width="190px" className="text-center">租賃區間</th>
                                <th scope="col" width="150px" className="text-center">產品分類</th>
                                <th scope="col" width="100px" className="text-center">狀態</th>
                                <th scope="col" width="70px" className="text-center">數量</th>
                                <th scope="col" width="100px" className="text-center">單價</th>
                                <th scope="col" width="100px" className="text-center">小計</th>
                            </tr>
                        </thead>
                        <tbody className="b-member-Rental-order-orderlist-rent-detailtable">
                        
                            <tr>
                                <td className="order-id align-middle text-center">{orderitemview.id}</td>
                                <td className="align-middle">
                                    <div>
                                        <img className="b-member-Rental-order-orderlistpics" src={orderitemview.image} alt="" />
                                    </div>
                                </td>
                                <td className="b-member-Rental-order-prod-name align-middle text-center">
                                    <span className="text-center">A01</span>
                                    <p className="text-center">{orderitemview.name}</p>
                                </td>
                                <td className="b-member-Rental-order-prod-name align-middle">
                                    <p className="text-center">{orderitemview.startdates}</p>
                                    <p className="text-center">~</p>
                                    <p className="text-center">{orderitemview.enddates}</p>
                                </td>
                                <td className="align-middle text-center">大型植栽</td>
                                {Return == '[]'? ( <td className="b-member-Rental-orderorderstatus align-middle text-center">租賃中</td>)
                                :
                                ( <td className="b-member-Rental-orderorderstatus align-middle text-center" style={{color:"#E58F80"}}>申請退租</td>)
                                }
                                <td className="align-middle text-center">{orderitemview.qtys}</td>
                                <td className="align-middle text-center">NT${orderitemview.price}</td>
                                <td className="align-middle text-center">NT${orderitemview.price * orderitemview.qtys}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="b-member-Rental-order-buttonblock d-flex justify-content-center">
                        <NavLink 
                        to='/members/:name/rental_management' 
                        type="button" 
                        className="b-member-Rental-order-btn b-member-Rental-order-btn-checkelse">
                        查看其他訂單
                        </NavLink>

                        <NavLink 
                        to='/members/rentalreturn' 
                        type="button" 
                        className="b-member-Rental-order-btn b-member-Rental-order-btn-cancelrent"
                        onClick={() => {
                            updateCartToLocalStorage({
                              id: orderitemview.id,
                              name: orderitemview.name,
                              qtys: orderitemview.qtys,
                              price: orderitemview.price,
                              image: orderitemview.image,
                              startdates: orderitemview.startdates,
                              enddates: orderitemview.enddates,
                              supTotal:orderitemview.price * orderitemview.qtys,
                            })
                          }}
                        >申請退租
                        </NavLink>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default OrderManagementRentalItemTable

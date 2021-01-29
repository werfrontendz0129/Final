import React, {useState, useEffect , useContext} from 'react';
import './ShoppingCartMainRentalItemList.scss'
import {SubTotal} from'../../pages/SubTotal'
import {ShippingCost} from'../../pages/ShippingCost'


function ShoppingCartMainItemList(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [countDate, setCountDate] = useState()
  const {val,setVal} = useContext(SubTotal)
  const {val1,setVal1}= useContext(ShippingCost)
  
  
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
    /////////////////////////////////////////////////////////////////////////////////////////
    
    const updateCartToLocalStorage = (item, isAdded = true) => {
      console.log(item, isAdded)
      const currentCart = JSON.parse(localStorage.getItem('rent')) || []
      // find if the product in the localstorage with its id
      const index = currentCart.findIndex((v) => v.id === item.id)
      console.log('index', index)
      // found: index! == -1
      if (index > -1) {
        isAdded ? currentCart[index].qtys++ : currentCart[index].qtys--
      } 
      localStorage.setItem('rent', JSON.stringify(currentCart))
      console.log('focus',currentCart)
      // 設定資料
      setMycart(currentCart)
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const updatedaterange = (item,e,isStart) => {
      const currentCart = JSON.parse(localStorage.getItem('rent')) || []

      // find if the product in the localstorage with its id
      const index = currentCart.findIndex((v) => v.id === item.id)
      if(isStart) {
        setStartDate(e.target.value)
        currentCart[index].startdates = e.target.value
      }else{
        setEndDate(e.target.value)
        currentCart[index].enddates = e.target.value
      }      
      localStorage.setItem('rent', JSON.stringify(currentCart))
      console.log('focus',currentCart)
      // 設定資料
      setMycart(currentCart)

    }
/////////////////////////////////////////////////////////////////////////////////////////////
const currentCart = JSON.parse(localStorage.getItem('rent')) || '[]'
const DAY = 1000 * 60 * 60  * 24
const startdate = new Date(currentCart[0].startdates)
const enddate = new Date(currentCart[0].enddates)
const days_passed = Math.round((enddate.getTime() - startdate.getTime()) / DAY)

    const sum = (items) => {
      let total = 0
      for (let i = 0; i < items.length; i++) {
        total += items[i].qtys * items[i].price* days_passed
      }
      return (total,setVal(total))
    
    }

    const bbt = (items) => {
      let shipping = 0
      for (let i = 0; i < items.length; i++) {
        if (items[i].qtys < 10) {
          shipping = 500
        }else{
          shipping = 0
      }
      return (shipping,setVal1(shipping))
    }}
    
    const display = (
      <>
       {mycartDisplay.map((item, index) => {
         return(
          <React.Fragment key={item.id}>
          <tr className="d-flex justify-content-between" >  
          <th className="d-flex justify-content-between align-items-center" scope="row" width="145" height="140">
            <div className="aside"><img src={item.image} className="b-shoppingcart-reantal-itemlist-img-sm" /></div>
          </th>
          <td width="205" height="140">
            <div className="mt-3 b-shoppingcart-reantal-itemlist-d-flexer flex-column"> 
              <a href="#" className="b-shoppingcart-reantal-itemlist-font-size1 text-dark" data-abc="true">{item.name}</a>
              <p className="text-muted small b-shoppingcart-reantal-itemlist-font-size2">{item.info}</p>
            </div>
          </td>
          <td className="b-shoppingcart-reantal-itemlist-d-flexer" height="140" width="100">
            <div className="b-shoppingcart-rental-itemlist-daily-price-wrap"> 
              <p className="b-shoppingcart-rental-itemlist-daily-price b-shoppingcart-reantal-itemlist-font-size3">NT${item.price}</p>
              <p className="b-shoppingcart-rental-itemlist-daily-price b-shoppingcart-reantal-itemlist-font-size3"> /日 </p> 
            </div>
          </td>
          <td className="b-shoppingcart-reantal-itemlist-d-flexer flex-column" width="200" height="140"> 
            <p style={{fontSize: 12, margin: 0}}>開始租賃日期<input onChange ={(e) => updatedaterange(item,e,true)} className="form-control p-0" type="date" defaultValue={item.startdates} value={startDate} style={{width: 150, height: 35, textAlign: "center"}} /></p>
            <p style={{fontSize: 12, margin: 0}}>結束租賃日期<input onChange ={(e) => updatedaterange(item,e,false)} className="form-control p-0" type="date" defaultValue={item.enddates} value={endDate} style={{width: 150, height: 35, textAlign: "center"}} /></p>
          </td>
          <td height="140" width="120" className="b-shoppingcart-rental-itemlist-qtypicker justify-content-center">
              <button
              className="b-shoppingcart-rental-qty-button"
                onClick={() => {
                  if (item.qtys === 1) return
                  updateCartToLocalStorage(item, false)
                }}
              >
                -
              </button>
              <div className="b-shoppingcart-rental-qty-input">{item.qtys}</div>
              <button 
               className="b-shoppingcart-rental-qty-button"
              onClick={() => updateCartToLocalStorage(item, true)}>
                +
              </button>
          </td>
          <td className="b-shoppingcart-reantal-itemlist-d-flexer" height="140" width="100">
            <div >NT${item.qtys*item.price*days_passed}</div>
            <div ></div>
          </td>
          <td className="b-shoppingcart-reantal-itemlist-d-flexer p-0" width="30">
            <button type="button" className="close" aria-label="Close">
              &times;
            </button>
          </td>
        </tr>
        <tr>
          <td className="p-0"><div style={{ width:'100%', height: 1, borderTop: '1px solid #D1CFCF', padding:'0%'}}></div></td>
        </tr>
        </React.Fragment>
       )
       })}
      </>)
    const shipping = bbt(mycartDisplay)
    const suptotal = sum(mycartDisplay)

          return (
      <>
      {!JSON.parse(localStorage.getItem('rent'))? (
        <aside>
          <div className="table-responsive d-flex justify-content-center  flex-column text-center">
                <div style={{marginBottom: 10, marginTop: 50, fontSize: 20, color: "#838383", fontWeight:800}}>購物車尚未加入商品唷!</div>
                <div><img style={{width:275, height:275}} src="http://localhost:3000/images/svg/svg/noresult.gif"/></div>
                {/* <div style={{marginTop: -10, marginBottom: 60, color: "#838383", fontWeight:800}}>請點擊上方"新增信用卡"以便繼續完成付款流程</div> */}
          </div>
      </aside>
      ) : (display)}
      </>
    );
  }
  
  export default ShoppingCartMainItemList
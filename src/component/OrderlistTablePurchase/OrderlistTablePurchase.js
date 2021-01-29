import React, {useState, useEffect} from 'react'
import './OrderlistTablePurchase.scss'
// import Pagination from '../Pagination/Pagination'
import ClicktoDetailButton from '../ClicktoDetailButton/ClicktoDetailButton'
import {withRouter,NavLink} from 'react-router-dom'
import OrderlistNoPurchase from '../OrderlistNoPurchase/OrderlistNoPurchase'

function OrderlistTablePurchase(props) {
    const id = props.match.params.id
    // console.log('id!',id)

     // date
     const year = new Date().getFullYear()
     const month = '0'+ (new Date().getMonth()+1)
     const date = new Date().getDate()
     const today = year + '-' + month + '-' + date

    const [purchaseorders, setPurchaseorders] = useState([])

    async function getPurchase(id){
        try {
            const response = await fetch(
                `http://localhost:3001/members/${id}`,
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok){
                // 取得會員&他的選購訂單
                const data = await response.json()
                const datas = data.user_purchase
                // console.log(data)
                // console.log(datas)
                setPurchaseorders(datas)
                
            } 
        } catch {
            alert('no data')
        }
    }

    useEffect(()=>{
        getPurchase(id)
    },[])

    const display = (
        <>
        <table className="table table-responsive w-orderlist-buy-table" style={{width: 900}}>
                    <thead style={{backgroundColor: '#E6E9DA'}}>
                            <tr>
                                <th scope="col" style={{width: 150}}>訂單編號</th>
                                <th scope="col" style={{width: 150}}>訂單日期</th>
                                <th scope="col" style={{width: 150}}>訂單金額</th>
                                <th scope="col" style={{width: 150}}>訂單狀態</th>
                                <th scope="col" style={{width: 150}}></th>
                                <th scope="col" style={{width: 150}}></th>
                            </tr>
                        </thead>
                        <tbody className="w-mycollect-tablebody">
                        {purchaseorders.map((v,i)=>{
                            return(
                                <tr key={i}>
                            {/* 訂單編號 */}
                            <td className="w-ordernumber align-middle">{v.order_purchasenumber}</td>
                            {/* 訂單日期 */}
                            <td className="w-orderdate align-middle">{today}</td>                    
                            {/* 訂單金額 */}
                            <td className="align-middle" style={{color: '#E58F80'}}>
                            {v.order_purchaseprice}
                            </td>  
                            <td className="align-middle">
                            <div className="d-inline-block w-statuspurchase">
                            {v.order_purchasestatus}
                            </div>
                            </td>                                        
                            {/* 選購訂單縮圖 */}
                            <td className="align-middle">                    
                                <div className="d-flex">
                                <img className="w-orderlist-buy-pics" src={v.prod_purchasepics1} alt="" />                        
                                <img className="w-orderlist-buy-pics" src={v.prod_purchasepics2} alt="" />                       
                                </div>                   
                                </td>
                            {/* 訂單詳情button */}
                            <td className="align-middle">    
                                {/* 這個要連結到結帳流程後的訂單詳情頁面 */}
                                <NavLink to={`/member/purchaseorder/${id}/`} className="w-btn-clicktodetail">訂單詳情</NavLink>
                            </td>                    
                            </tr>
                            )
                        })}  
                            </tbody>      
                    </table>
                    {/* <Pagination /> */}
        </>
    )

    const none = (
        <OrderlistNoPurchase />
    )

    return (
        <>
        {purchaseorders == 0 ? none : display }
        </>
    )
}

export default withRouter(OrderlistTablePurchase)
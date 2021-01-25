import React, {useState, useEffect} from 'react'
import './OrderlistTablePurchase.scss'
import Pagination from '../Pagination/Pagination'
import ClicktoDetailButton from '../ClicktoDetailButton/ClicktoDetailButton'
import {withRouter} from 'react-router-dom'
import OrderlistNoPurchase from '../OrderlistNoPurchase/OrderlistNoPurchase'

function OrderlistTablePurchase(props) {
    const [purchaseorders, setPurchaseorders] = useState([])

    async function getMembers(){
        try {
            const response = await fetch(
                'http://localhost:3001/members',
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok){
                const data = await response.json()
                const datas = data[0].user_purchase

                console.log(data)
                setPurchaseorders(datas)
                
            } 
        } catch {
            alert('no data')
        }
    }

    useEffect(()=>{
        getMembers()
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
                            <td className="w-orderdate align-middle">{v.order_purchasedate}</td>                    
                            {/* 訂單金額 */}
                            <td className="align-middle" style={{color: '#E58F80'}}>
                            {v.order_purchaseprice}
                            </td>  
                            {/* 選購訂單狀態-待出貨color：#838383、已完成：#6C8650 */}
                            <td className="align-middle">
                            <div className="d-inline-block w-statuspurchase">
                            {v.order_purchasestatus}</div>
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
                                <ClicktoDetailButton />
                            </td>                    
                            </tr>
                            )
                        })}  
                            </tbody>      
                    </table>
                    <Pagination />
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
import React, {useState,useEffect} from 'react'
import './OrderlistTableRental.scss'
import Pagination from '../Pagination/Pagination'
import ClicktoDetailButton from '../ClicktoDetailButton/ClicktoDetailButton'
import { withRouter } from 'react-router-dom'


function OrderlistTableRental(props) {
    const [rentalorders, setRentalorders] = useState([])

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
                const datas = data[0].user_rental

                console.log(data)
                setRentalorders(datas)
                
            } 
        } catch {
            alert('no data')
        }
    }

    useEffect(()=>{
        getMembers()
    },[])

    
    return (
        <>
        <div>
        <div className="w-div-title pl-4">
            <p>租賃訂單管理</p>
        </div>
                <div className="orderlist-main px-2">
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
                    {rentalorders.map((v,i)=>{
                        return (
                            <tr key={i}>
            {/* 訂單編號 */}
            <td className="w-ordernumber align-middle">{v.order_rentalnumber}</td>
            {/* 訂單日期 */}
            <td className="w-orderdate align-middle">{v.order_rentaldate}</td>                    
            {/* 訂單金額 */}
            <td className="align-middle" style={{color: '#838383'}}>{v.order_rentalprice}</td>  
            {/* 租賃訂單狀態-已預約color：#838383、租賃中：#E58F80、已完成：#A8AE91 */}
            <td className="align-middle">
            <div className="d-inline-block w-statusrental">{v.order_rentalstatus}</div>
            </td>                                        
            {/* 租賃訂單縮圖 */}
            <td className="align-middle">                    
                <div className="d-flex">
                <img className="w-orderlist-buy-pics" src={v.prod_rentalpics1} alt="" />                        
                 <img className="w-orderlist-buy-pics" src={v.prod_rentalpics2} alt="" />                       
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
                </div>
            </div>
        </>
    )
}

export default withRouter(OrderlistTableRental)
import React, {useState,useEffect} from 'react'
import './OrderlistTableRental.scss'
// import Pagination from '../Pagination/Pagination'
import ClicktoDetailButton from '../ClicktoDetailButton/ClicktoDetailButton'
import { withRouter,NavLink } from 'react-router-dom'


function OrderlistTableRental(props) {
    // console.log('id?',props.match.params.id)
    const id = props.match.params.id

    // date
    const year = new Date().getFullYear()
    const month = '0'+ (new Date().getMonth()+1)
    const date = new Date().getDate()
    const today = year + '-' + month + '-' + date

    const [rentalorders, setRentalorders] = useState([])

    async function getRental(id){
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
                // 取得會員以及他的租賃訂單
                const data = await response.json()
                const datas = data.user_rental
                // console.log('data',data)
                // console.log('datas',datas)
                setRentalorders(datas)
                
            } 
        } catch {
            alert('no data')
        }
    }

    useEffect(()=>{
        getRental(id)
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
            <td className="w-orderdate align-middle">{today}</td>                    
            {/* 訂單金額 */}
            <td className="align-middle" style={{color: '#838383'}}>{v.order_rentalprice}</td>  
            <td className="align-middle">
            <div className="d-inline-block w-statusrental">已申請退租</div>
            </td>                                        
            {/* 租賃訂單縮圖 */}
            <td className="align-middle">                    
                <div className="d-flex justify-content-center">
                <img className="w-orderlist-buy-pics" src={v.prod_rentalpics1} alt="" />                                              
                </div>                   
                </td>
            {/* 訂單詳情button */}
            <td className="align-middle">    
                {/* 這個要連結到結帳流程後的訂單詳情頁面 */}
                <NavLink to={`/members/rentaldetail`} className="w-btn-clicktodetail">訂單詳情</NavLink>
            </td>                    
            </tr>      
                        )
                    })}
        
                    </tbody>          
                    </table>
                    {/* <Pagination /> */}
                </div>
            </div>
        </>
    )
}

export default withRouter(OrderlistTableRental)
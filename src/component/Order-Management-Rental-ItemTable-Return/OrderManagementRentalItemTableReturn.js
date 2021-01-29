import React,{useState, useEffect} from 'react'
import './OrderManagementRentalItemTableReturn.scss'


function OrderManagementRentalItemTableReturn() {
    const Return = JSON.parse(localStorage.getItem('return')) || '[]'
    const DAY = 1000 * 60 * 60  * 24
    const startdate = new Date(Return[0].startdates)
    const enddate = new Date(Return[0].enddates)
    const days_passed = Math.round((enddate.getTime() - startdate.getTime()) / DAY)
    return (
        <>
            <tr>
                <td className="align-middle text-center">
                    <input type="checkbox" name="" id="" />
                </td>
                <td className="align-middle text-center">
                    <div>
                        <img className="b-member-return-order-orderlistpics" src={Return[0].image} alt="" />
                    </div>
                </td>
                <td className="b-member-return-order-prod-name align-middle text-center">
                    <span>A01</span>
                    <p>{Return[0].name} </p>
                </td>
                <td className="align-middle text-center b-member-return-order-rent-starttoend">
                    <p>{Return[0].startdates}</p>
                    <p className="text-center">~</p>   
                    <p>{Return[0].enddates}</p>
                </td>
                    <td className="rent-lease-days align-middle text-center">{days_passed}日</td>
                    <td className="orderstatus align-middle text-center">已預約</td>
                    <td className="align-middle text-center">{Return[0].qtys}</td>
                    <td className="align-middle text-center">{Return[0].price}/日</td>
                    <td className="align-middle text-center">NT${Return[0].supTotal}</td>
            </tr>            
        </>
    )
}

export default OrderManagementRentalItemTableReturn

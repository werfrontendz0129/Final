import React, {useState} from 'react'
import ClicktoCartButton from '../ClicktoCartButton/ClicktoCartButton'
import ClicktoRemoveButton from '../ClicktoRemoveButton/ClicktoRemoveButton'
import './MyCollectionTbodyTr.scss'

function MyCollectionTbodyTr() {
    return (
        <>
        <tr>
            <td className="align-middle">
                <img className="w-collect-pics" src="images/Fiddle 琴葉榕大型植栽.jpg" alt="" />                    
            </td>                                        
            <td className="align-middle">
                <div className="w-collect-prod d-inline-block">
                    <span>琴葉榕大型植栽</span>
                    <p>9cm*9cm*總高約27-33cm<br/>霧面白盆栽</p>                    
                </div>                    
            </td>                    
            <td className="align-middle" style={{color: '#E58F80'}}>
                <p>NT$500 / 月</p>
            </td>
            <td className="align-middle">
            <ClicktoCartButton />
            </td>
            <td className="align-middle d-flex" style={{textAlign: 'center'}}>
                <ClicktoRemoveButton />
            </td>
        </tr>
        </>
    )
}

export default MyCollectionTbodyTr
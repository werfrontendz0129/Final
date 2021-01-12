import React, {useState} from 'react'
import './MyCollectionTable.scss'
import MyCollectionTbodyTr from '../MyCollectionTbodyTr/MyCollectionTbodyTr'

function MyCollectionTable() {

    return (
        <>
        <table className="table" style={{width: 900}}>
                        <thead className="w-mycollect-tablehead" style={{backgroundColor: '#E6E9DA'}}>
                            <tr>
                                <th scope="col" style={{width: 180}}></th>
                                <th scope="col" style={{width: 270}}>商品</th>
                                <th scope="col" style={{width: 150}}>價格</th>
                                <th scope="col" style={{width: 200}}>加入購物車</th>
                                <th scope="col" style={{width: 100}}>移除收藏</th>
                            </tr>
                        </thead>
                        <tbody className="w-mycollect-tablebody">
                            <MyCollectionTbodyTr />
                        </tbody>
                    </table>
        </>
    )
}

export default MyCollectionTable
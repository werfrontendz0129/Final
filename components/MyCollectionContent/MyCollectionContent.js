import React, {useState} from 'react'
import './MyCollectionContent.scss'
import MyCollectionTable from '../MyCollectionTable/MyCollectionTable'
import MyCollectionNone from '../MyCollectionNone/MyCollectionNone'

function MyCollectionContent() {
    return (
        <>
        <div>
                <div className="w-div-title pl-4">
                    <p>我的收藏</p>
                </div>
                <div className="w-collect-main px-2">
                    {/* 有收藏則顯示table，無收藏則顯示none */}
                    <MyCollectionTable />
                    {/* <MyCollectionNone /> */}
                </div>
            </div>  
        </>
    )
}

export default MyCollectionContent
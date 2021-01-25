import React, {useState} from 'react'
import './MyCollectionContent.scss'
import MyCollectionTable from '../MyCollectionTable/MyCollectionTable'
import MyCollectionNone from '../MyCollectionNone/MyCollectionNone'
import {withRouter} from 'react-router-dom'

function MyCollectionContent(props) {
    const [data, setData] = useState(false)

    // const display = <MyCollectionTable />
    // const none = <MyCollectionNone />

    return (
        <>
        <div>
                <div className="w-div-title pl-4">
                    <p>我的收藏</p>
                </div>
                <div className="w-collect-main px-2">
                    <MyCollectionTable />

                </div>
            </div>  
        </>
    )
}

export default withRouter(MyCollectionContent)
import React, {useState} from 'react'
import './MyCollectionContent.scss'
import MyCollectionTable from '../MyCollectionTable/MyCollectionTable'
import MyCollectionNone from '../MyCollectionNone/MyCollectionNone'
import {withRouter} from 'react-router-dom'

function MyCollectionContent(props) {
    // const [data, setData] = useState(false)
    // console.log('?',props)
    // const id = props.match.params.id
    // console.log('id??',id)

    // const display = <MyCollectionTable />
    // const none = <MyCollectionNone />

    return (
        <>
        <div>
                <div className="w-div-title pl-4">
                    <p>我的收藏</p>
                </div>
                <div className="w-collect-main px-2">
                    <MyCollectionTable id={props.match.params.id}/>

                </div>
            </div>  
        </>
    )
}

export default withRouter(MyCollectionContent)
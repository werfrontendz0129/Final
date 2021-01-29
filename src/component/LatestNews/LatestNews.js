import React, {useState, useEffect, useContext} from 'react'
import './LatestNews.scss'
import { BsChevronRight } from "react-icons/bs"
import {withRouter} from 'react-router-dom'
import {useTEST} from '../useTEST'
import axios from 'axios'
function LatestNews(props) {
    // date
    const year = new Date().getFullYear()
    const month = '0'+ (new Date().getMonth()+1)
    const date = new Date().getDate()
    const today = year + '年' + month + '月' + date + '日'
    //
  
    const [data, setData] = useState()

    useEffect(() => {
        //取該會員的資料
            axios.get(`http://localhost:3001/members/${props.id}`)
            .then((response)=> {

                //有資料的話
                if(response.data){
                    setData(response.data)
                }
            }).catch((err) => console.log(err))
        
    },[])

    return (
        <>
            <div className="w-latestnews">
                <div className="w-div-title">
                    <p>最新消息</p>
                </div>
                <div className="w-news-main">
                    <p>{data && data.notifications_account[0].accountnotify_title}您在{today}{data && data.notifications_account[0].accountnotify_content}
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>{data && data.notifications_orders[0].orderlistnotify_title}您在{today}{data && data.notifications_orders[0].orderlistnotify_content}
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>{data && data.notifications_lesson[0].lessonnotify_title}您在{today}{data && data.notifications_lesson[0].lessonnotify_content}
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                </div>
            </div>
        </>
    )
}

export default withRouter(LatestNews)
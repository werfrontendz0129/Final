import React, {useState, useEffect} from 'react'
import './LatestNews.scss'
import { BsChevronRight } from "react-icons/bs"
import {withRouter} from 'react-router-dom'

function LatestNews(props) {
    const [accountNotify, setAccountNotify] = useState([])
    const [ordersNotify, setOrdersNotify] = useState([])
    const [lessonNotify, setLessonNotify] = useState([])

    async function getMembers(){

        try {
            const response = await fetch(
                'http://localhost:3001/members',
                {
                    method:'get',
                    // headers: {
                    //     Accept: 'application/json',
                    //     'Content-Type': 'application/json',
                    // },
                }
            )
            if(response.ok){
                const data = await response.json()
                console.log('data',data) 
                const datas = data[0].notifications_account[0]
                console.log('datas',datas)
                const orders = data[0].notifications_orders[0]
                console.log('orders',orders)
                const classsess = data[0].notifications_lesson[0]
                console.log('classsess',classsess)
                
                setAccountNotify(datas)
                setOrdersNotify(orders)
                setLessonNotify(classsess)
               
            } 
        } catch(error) {
            console.log('error',error)
        }
    }

    useEffect(()=>{
        getMembers()
    },[])

    return (
        <>
            <div className="w-latestnews">
                <div className="w-div-title">
                    <p>最新消息</p>
                </div>
                <div className="w-news-main">
                    <p>{accountNotify.accountnotify_title}{accountNotify.accountnotify_content}
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>{ordersNotify.orderlistnotify_title}{ordersNotify.orderlistnotify_content}
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>{lessonNotify.lessonnotify_title}{lessonNotify.lessonnotify_content}
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                </div>
            </div>
        </>
    )
}

export default withRouter(LatestNews)
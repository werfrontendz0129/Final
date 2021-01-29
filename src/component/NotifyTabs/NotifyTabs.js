import React, {useState,useEffect} from 'react'
import './NotifyTabs.scss'
import {Tabs, Tab, Modal, Button} from 'react-bootstrap'
import {useHistory,withRouter} from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

function NotifyTabs(props) {
    // console.log('this?',props)
    const data_id = props.match.params.id
    // console.log('data_id?',data_id)

    // Tab對應的eventKey
    const [key, setKey] = useState('accountnotifyTab')

    // Tab內容
    const {memberData, setMemberData} = useState([])
    const [accountNotify, setAccountNotify] = useState([])
    const [ordersNotify, setOrdersNotify] = useState([])
    const [lessonNotify, setLessonNotify] = useState([])
    // date
    const year = new Date().getFullYear()
    const month = '0'+ (new Date().getMonth()+1)
    const date = new Date().getDate()
    const today = year + '年' + month + '月' + date + '日'

    // console.log('memberData?',memberData)
    let history = useHistory()

    // sweet alert
    const MySwal = withReactContent(Swal)

    async function deleteNotifications(index){
        // const member_id = 1
        try {
            const response = await fetch(
                'http://localhost:3001/members/deleteNotifications/' + index + '/' + data_id,
                {
                    method:'delete'
                }
            )
            if(response.ok){
                // reload data
                getNotifications()
                
                history.push('/member/Notifications/'+ data_id)

                // window.location.reload()
                
            } 
        } catch(error) {
            console.log('error',error)
        }
    }

    async function getNotifications(){
        try {
            const response = await fetch(
                `http://localhost:3001/members/${props.id}`,
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok){
                // 取得會員資料
                const data = await response.json()
                console.log('data',data) 
                // 取得會員的各項通知
                const datas = data.notifications_account
                console.log('datas',datas)
                const orders = data.notifications_orders
                console.log('orders',orders)
                const classsess = data.notifications_lesson
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
        getNotifications()
    },[])


    return (
        <>
            <div>
                <div className="w-div-title">
                    <p>訊息通知</p>
                </div>
                <div className="w-notify-main">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)} 
                    >
                    <Tab tabClassName="w-notifytabtitle" eventKey="accountnotifyTab" title="帳戶通知">
                        
                        {accountNotify.map((v, i) => {
            return (
                <div className="w-notifydiv" key={i}>
                        <table className="table table-borderless w-notify-table">
                                <tbody>
                                
                                    <tr id="w-notifytbodytr1">
                                        <td style={{width: 150, textAlign: 'center'}}>
                                        {v.accountnotify_title}
                                        </td>
                                        <td style={{width: 500, textAlign: 'left'}}>
                                        您在{today}{v.accountnotify_content}
                                        </td>
                                        <td>
                                        <button
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否刪除訊息？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要刪除!',
                                                    cancelButtonText: '返回'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        'Deleted!',
                                                        deleteNotifications(v.index),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
            )
        })}
                    </Tab>
                    <Tab tabClassName="w-notifytabtitle" eventKey="orderlistnotifyTab" title="訂單通知">
                        {ordersNotify.map((v, i) => {
            return (
                <div className="w-notifydiv" key={i}>
                        <table className="table table-borderless w-notify-table">
                                <tbody>
                                    <tr>
                                        <td style={{width: 150, textAlign: 'center'}}>
                                        {v.orderlistnotify_title}
                                        </td>
                                        <td style={{width: 500, textAlign: 'left'}}>
                                        您在{today}{v.orderlistnotify_content}
                                        </td>
                                        <td>
                                        <button
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否刪除訊息？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要刪除!'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        'Deleted!',
                                                        deleteNotifications(v.index),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
            )
        })}
                    </Tab>
                    <Tab tabClassName="w-notifytabtitle" eventKey="lessonnotifyTab" title="課程通知">
                        {lessonNotify.map((v, i) => {
            return (
                <div className="w-notifydiv" key={i}>
                        <table className="table table-borderless w-notify-table">
                                <tbody>
                                    <tr>
                                        <td style={{width: 150, textAlign: 'center'}}>
                                        {v.lessonnotify_title}
                                        </td>
                                        <td style={{width: 500, textAlign: 'left'}}>
                                        您在{today}{v.lessonnotify_content}
                                        </td>
                                        <td>
                                        <button
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否刪除訊息？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#6c8650',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要刪除!'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        'Deleted!',
                                                        deleteNotifications(v.index),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
            )
        })}
                    </Tab>
                </Tabs>
                </div>
            </div>
                
        </>
    )
}

export default withRouter(NotifyTabs)
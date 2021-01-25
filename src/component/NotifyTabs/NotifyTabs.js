import React, {useState,useEffect} from 'react'
import './NotifyTabs.scss'
import {Tabs, Tab, Modal, Button} from 'react-bootstrap'
import {useHistory,withRouter} from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function NotifyTabs() {
    // Tab對應的eventKey
    const [key, setKey] = useState('accountnotifyTab')

    // Tab內容
    const [accountNotify, setAccountNotify] = useState([])
    const [ordersNotify, setOrdersNotify] = useState([])
    const [lessonNotify, setLessonNotify] = useState([])

    let history = useHistory()

    //
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // sweet alert
    const MySwal = withReactContent(Swal)


    async function deleteNotifications(index){
        const member_id = 1
        try {
            const response = await fetch(
                'http://localhost:3001/members/deleteNotifications/' + index + '/' + member_id,
                {
                    method:'delete'
                }
            )
            if(response.ok){
                // reload data
                // const data = await response.json()
                // const datas = data[0].notifications_account
                // console.log(datas)
                // const orders = data[0].notifications_orders
                // const classsess = data[0].notifications_lesson

                // setAccountNotify(datas)
                // setOrdersNotify(orders)
                // setLessonNotify(classsess)
                getNotifications()
                
                history.push('/Notifications')

                // window.location.reload()
                
            } 
        } catch(error) {
            console.log('error',error)
        }
    }

    async function getNotifications(){
        try {
            const response = await fetch(
                'http://localhost:3001/members',
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok){
                const data = await response.json()
                // console.log('data',data) 
                const datas = data[0].notifications_account
                // console.log('datas',datas)
                const orders = data[0].notifications_orders
                // console.log('orders',orders)
                const classsess = data[0].notifications_lesson
                // console.log('classsess',classsess)
                // console.log(data)
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
                                        {v.accountnotify_content}
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
                                        {/* <button 
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={handleShow}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>是否刪除訊息？</Modal.Title>
                                        </Modal.Header>
                                            <Modal.Body>
                                            <button 
                                            type="button" 
                                            className="close w-remove" 
                                            // id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={
                                                ()=>{deleteNotifications(v.index)}}
                                            >
                                            <span aria-hidden="true">是，刪除它！</span>
                                            </button>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                否，回到訊息通知
                                            </Button>
                                            </Modal.Footer>
                                        </Modal> */}
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
                                        {v.orderlistnotify_content}
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
                                        {/* <button 
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={handleShow}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>是否刪除訊息？</Modal.Title>
                                        </Modal.Header>
                                            <Modal.Body>
                                            <button 
                                            type="button" 
                                            className="close w-remove" 
                                            // id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{deleteNotifications({i})}}>
                                            <span aria-hidden="true">是，刪除它！</span>
                                            </button>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                否，回到訊息通知
                                            </Button>
                                            </Modal.Footer>
                                        </Modal> */}
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
                                        {v.lessonnotify_content}
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
                                        {/* <button 
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={handleShow}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>是否刪除訊息？</Modal.Title>
                                        </Modal.Header>
                                            <Modal.Body>
                                            <button 
                                            type="button" 
                                            className="close w-remove" 
                                            // id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{deleteNotifications({i})}}>
                                            <span aria-hidden="true">是，刪除它！</span>
                                            </button>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                否，回到訊息通知
                                            </Button>
                                            </Modal.Footer>
                                        </Modal> */}
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
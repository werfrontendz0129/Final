import React, {useState,useEffect} from 'react'
// import LessonBookinglistTbodyTr from '../LessonBookinglistTbodyTr/LessonBookinglistTbodyTr'
import './LessonBookinglist.scss'
import ClicktoLessonButton from '../ClicktoLessonButton/ClicktoLessonButton'
import {Modal, Button} from 'react-bootstrap'
import {NavLink, useHistory, withRouter} from 'react-router-dom'
import LessonNone from '../LessonNone/LessonNone'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function LessonBookinglist(props) {
    const [lessonbookings, setLessonbookings] = useState([])

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // sweet alert
    const MySwal = withReactContent(Swal)

    let history = useHistory()

    // useEffect(()=> {
    // const course_id = lessonbookings[0].lesson_number
    // },[lessonbookings])


    async function deleteCourse(index) {
        const member_id = 1
        try {
            const response = await fetch (
                'http://localhost:3001/members/deleteCourse/' + index + '/' + member_id,
                {
                    method:'delete',
                }
            )
            if(response.ok){
                // 重新載入
                // const data = await response.json()
                // const datas = data[0].course_booking

                // console.log(data)
                // setLessonbookings(datas)
                getCourse()
                history.push('/lesson')
                
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    async function getCourse(){
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
                const datas = data[0].course_booking
                // const course_id = datas[0].lesson_number
                // console.log('data?',data)
                // console.log('datas?',datas)
                // console.log('course_id:' ,datas[0].lesson_number)
                
                setLessonbookings(datas)
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    useEffect(()=>{
        getCourse()
    },[])

    const display = (
        <>
        <table className="table table-responsive w-lessonbookinglisttable">
                        <thead style={{backgroundColor: '#E6E9DA'}}>
                            <tr>
                                <th scope="col" style={{width: 50}}>No.</th>
                                <th scope="col" style={{width: 200}}></th>
                                <th scope="col" style={{width: 200}}>課程名稱</th>
                                <th scope="col" style={{width: 150}}>課程時間</th>
                                <th scope="col" style={{width: 100}}>課程費用</th>
                                <th scope="col" style={{width: 100}}>狀態</th>
                                <th scope="col" style={{width:50}}></th>
                            </tr>
                        </thead>
                        <tbody className="w-lessonbookinglisttbody">
                        {lessonbookings.map((v,i)=>{
                            return(
                                <tr key={i}>
                        {/* 課程No. */}
                        <td className="align-middle">{v.lesson_number}</td>                    
                        {/* 課程縮圖 */}
                        <td className="align-middle">      
                        <div>
                        <img className="w-lessonpics" src={v.img} alt="" />                           
                        </div>                        
                        {/* 課程名稱 */}
                        </td>
                        <td className="w-lessonname align-middle">{v.name}</td>                    
                        {/* 課程時間 */}
                        <td className="w-lessontime align-middle">                   
                        {v.date}<br/>{v.hours}
                        </td>            
                        {/* 課程費用 */}
                        <td className="align-middle" style={{color: '#838383'}}>NT$ {v.price}</td>                    
                        {/* 課程狀態 */}
                        <td className="w-lessonstatus-booked align-middle">{v.lesson_status}</td>
                        {/* 課程詳情&取消預約按鈕 */}
                        <td className="align-middle">
                        {/* <ClicktoLessonButton /> */}
                        <NavLink to={`/lesson/lessondetail/${v.lesson_number}`} className="w-btn-lessondetail">課程詳情</NavLink>
                        <button
                                            type="button" 
                                            className="w-btn-cancellesson"  
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否取消預約？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要取消!'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        'Deleted!',
                                                        deleteCourse(v.index),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            取消預約
                                        </button>
                        
                        {/* <button 
                            type="button" 
                            className="w-btn-cancellesson"
                            data-toggle="modal" data-target="#exampleModal"
                            onClick={handleShow}>
                            取消預約</button> 
                                        <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>取消預約？</Modal.Title>
                                        </Modal.Header>
                                            <Modal.Body>
                                            <button 
                                            type="button" 
                                            className="close w-remove" 
                                            aria-label="Close" 
                                            onClick={()=>{deleteCourse(v.index)}}>
                                            <span aria-hidden="true">是，我要取消！</span>
                                            </button>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                否，回到課程管理
                                            </Button>
                                            </Modal.Footer>
                                        </Modal> */}
                        
                        </td>
                        </tr>
                            )
                        })}
                                    </tbody>
                                </table>
                                
        </>
    )

    const none = (
        <LessonNone />
    )

    return (
        <>
        {lessonbookings == 0 ? none : display }
        </>

        // <LessonNone>
        // <table className="table table-responsive w-lessonbookinglisttable">
        //                 <thead style={{backgroundColor: '#E6E9DA'}}>
        //                     <tr>
        //                         <th scope="col" style={{width: 50}}>No.</th>
        //                         <th scope="col" style={{width: 200}}></th>
        //                         <th scope="col" style={{width: 200}}>課程名稱</th>
        //                         <th scope="col" style={{width: 150}}>課程時間</th>
        //                         <th scope="col" style={{width: 100}}>課程費用</th>
        //                         <th scope="col" style={{width: 100}}>狀態</th>
        //                         <th scope="col" style={{width:50}}></th>
        //                     </tr>
        //                 </thead>
        //                 <tbody className="w-lessonbookinglisttbody">
        //                 {lessonbookings.map((v,i)=>{
        //                     return(
        //                         <tr key={i}>
        //                 {/* 課程No. */}
        //                 <td className="align-middle">{v.lesson_number}</td>                    
        //                 {/* 課程縮圖 */}
        //                 <td className="align-middle">      
        //                 <div>
        //                 <img className="w-lessonpics" src={v.img} alt="" />                           
        //                 </div>                        
        //                 {/* 課程名稱 */}
        //                 </td>
        //                 <td className="w-lessonname align-middle">{v.name}</td>                    
        //                 {/* 課程時間 */}
        //                 <td className="w-lessontime align-middle">                   
        //                 {v.date}<br/>{v.hours}
        //                 </td>            
        //                 {/* 課程費用 */}
        //                 <td className="align-middle" style={{color: '#838383'}}>NT$ {v.price}</td>                    
        //                 {/* 課程狀態 */}
        //                 <td className="w-lessonstatus-booked align-middle">{v.lesson_status}</td>
        //                 {/* 課程詳情&取消預約按鈕 */}
        //                 <td className="align-middle">
        //                 {/* <ClicktoLessonButton /> */}
        //                 {/* 課程詳情頁面：不要用link，改用location href，或用push */}
        //                 <NavLink to={`/lesson/lessondetail/${v.lesson_number}`} className="w-btn-lessondetail">課程詳情</NavLink>
                        
        //                 <button 
        //                     type="button" 
        //                     className="w-btn-cancellesson"
        //                     data-toggle="modal" data-target="#exampleModal"
        //                     onClick={handleShow}>
        //                     取消預約</button> 
        //                                 <Modal show={show} onHide={handleClose}>
        //                                 <Modal.Header closeButton>
        //                                 <Modal.Title>是否取消預約？</Modal.Title>
        //                                 </Modal.Header>
        //                                     <Modal.Body>
        //                                     <button 
        //                                     type="button" 
        //                                     className="close w-remove" 
        //                                     aria-label="Close" 
        //                                     onClick={()=>{deleteCourse({i})}}>
        //                                     <span aria-hidden="true">是，我要取消！</span>
        //                                     </button>
        //                                     </Modal.Body>
        //                                     <Modal.Footer>
        //                                     <Button variant="secondary" onClick={handleClose}>
        //                                         否，回到課程管理
        //                                     </Button>
        //                                     </Modal.Footer>
        //                                 </Modal>
                        
        //                 </td>
        //                 </tr>
        //                     )
        //                 })}
        //                             </tbody>
        //                         </table>
                                
        // </LessonNone>
    )
}

export default  withRouter(LessonBookinglist)
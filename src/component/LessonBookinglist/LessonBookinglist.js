import React, {useState,useEffect} from 'react'
import './LessonBookinglist.scss'
import {NavLink, useHistory, withRouter} from 'react-router-dom'
import LessonNone from '../LessonNone/LessonNone'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
// import Footer from '../Footer/Footer'
// import Header from '../component/Header/Header'

function LessonBookinglist(props) {
    const id = props.match.params.id//會員ID
    // console.log('??',id)
    // let course_id = props.match.params.course_id
    // const new_course_id = course_id.slice(1,2)


    const [lessonbookings, setLessonbookings] = useState([]) //放本會員的課程預約ID
    const [data, setData] = useState([]) //放課程資料
    // const courses = lessonbookings.map((item) => item.lesson_number)
    // console.log(courses)
    // sweet alert
    const MySwal = withReactContent(Swal)

    let history = useHistory()


    async function deleteCourse(index,course_id) {
        try {
            const response = await fetch (
                'http://localhost:3001/members/deleteCourse/' + index + '/' + id + '/' + course_id,
                {
                    method:'delete',
                }
            )
            if(response.ok){
                // 重新載入
                // getCourse(id)
                setLessonbookings(response.data)
                setTimeout(()=>{
                    // history.push('/member/lesson/' +id)
                    window.location.replace('/member/lesson/' +id)
                }, 1000)
                // history.push('/member/lesson/' +id)
                // window.location.replace()
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    //先取會員ID
    useEffect(()=> {
        getMember(id)
    },[])

    //再取該會員的各筆的課程預約資料
    useEffect(()=>{
        getCourse()
        // lessonbookings.forEach((item) => console.log(item))
    },[lessonbookings])

    //取各個會員資料
    async function getMember(id){
        try {
            const response = await fetch(
                `http://localhost:3001/members/${id}`,
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
                // const datas = data.course_booking
                let datas = data.course_booking.map((item)=> item.course_id)
                // let new_datas = []
                // datas.forEach((item)=> {
                //     new_datas.push(item.slice(1,2))
                // })
                // console.log(new_datas)
                // console.log('data?',data)
                // console.log('datas?',datas[0].lesson_number)
                console.log(datas)
                // setLessonbookings(new_datas)
                setLessonbookings(datas)
                // console.log(datas)
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    // useEffect(()=>{
    //     getCourse()
    //     lessonbookings.forEach((item) => console.log(item))
    // },[lessonbookings])

    //取預約的課程資料
     function getCourse() {
        const data_arr = []
        // const course_arr = lessonbookings.length || 0
            console.log('hihihi',lessonbookings)
            if(lessonbookings) {
                lessonbookings.forEach((item)=> {
                    axios.get(`http://localhost:3001/members/lesson/${item}`)
                    .then((response) => {                  
                        data_arr.push(response.data)
                        // console.log('test',response.data)
                    }).then(()=> {
                        const course_arr = lessonbookings.length || 0
                        if(data_arr.length == course_arr) {
                            setData(data_arr)
                            console.log('final', data)
                        }
                    })
                    .catch((err)=> console.log(err))
                })
            }
            
        // lessonbookings.forEach((item)=> {
        //     axios.get(`http://localhost:3001/members/lesson/${item}`)
        //     .then((response) => {                  
        //         data_arr.push(response.data)
        //         // console.log('test',response.data)
        //     }).then(()=> {
        //         const course_arr = lessonbookings.length || 0
        //         if(data_arr.length == course_arr) {
        //             setData(data_arr)
        //             console.log('final', data)
        //          }
        //     })
        //     .catch((err)=> console.log(err))
        // })
    }


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
                        {data && data.map((v,i)=>{
                            return(
                                <tr>
                        {/* 課程No. */}
                        <td className="align-middle">{i+1}</td>                    
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
                        <td className="w-lessonstatus-booked align-middle">{lessonbookings? '已預約' : '已取消'}</td>
                        {/* 課程詳情&取消預約按鈕 */}
                        <td className="align-middle">
                        {/* <ClicktoLessonButton /> */}
                        <NavLink to={`/member/lesson/${id}/lessondetail/${v._id}`} className="w-btn-lessondetail">課程詳情</NavLink>
                        <button
                                            type="button" 
                                            className="w-btn-cancellesson"  
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否取消預約？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#6c8650',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要取消!',
                                                    cancelButtonText: '返回'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        '取消成功!',
                                                        deleteCourse(i,v._id),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            取消預約
                                        </button>
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
        {/* <Header /> */}
        {console.log("hello",lessonbookings)}
        {lessonbookings == 0 ? none : display }
        {/* <Footer /> */}
        </>
    )
}

export default  withRouter(LessonBookinglist)
import React, {useState,useEffect} from 'react'
import './LessonDetailContent.scss'
import {withRouter} from 'react-router-dom'
import LessonDetail from '../../pages/LessonDetail'

// 測試data
// import data from '../../data/lessondata'

function LessonDetailContent(props) {
    const [lessonDetail, setLessonDetail] = useState([])
    console.log('lessonDetail?:',lessonDetail)
    // lessonDetail x

    // console.log(props.data)
    // console.log('props:',props)

    const course_id = LessonDetail.lesson_number
    
    // const course_id = lesson_number

    async function getCourse(){
        // 先設為1
        // const member_id = 1
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
                const datas = data[0].course_booking
                // console.log(course_id)
                console.log('data:',data)
                console.log('datas:',datas)
                console.log('course_id:',datas[0].lesson_number)

                setLessonDetail(datas[0])
                
            } 
        } catch(error) {
            alert('no data')
        }
    }


    // x
    // async function getCourse(){
    //     // 先設為1
    //     // const member_id = 1
    //     try {
    //         const response = await fetch(
    //             // `http://localhost:3001/members/get/${member_id}/`+ course_id,
    //             {
    //                 method:'get',
    //                 // headers: {
    //                 //     Accept: 'application/json',
    //                 //     'Content-Type': 'application/json',
    //                 // },
    //             }
    //         )
    //         if(response.ok){
    //             const data = await response.json()
    //             const datas = data[0].course_booking
    //             // console.log(course_id)
    //             // console.log('data:',data)
    //             // console.log('datas:',datas)
    //             // console.log('course_id:',datas[0].lesson_number)

    //             setLessonDetail(datas)
    //             console.log('lessonDetail:',lessonDetail)
                
    //         } 
    //     } catch(error) {
    //         alert('no data')
    //     }
    // }

    useEffect(()=>{
        getCourse()
    },[])
   
   
    return (
        <>
        {/* ※目前只取到會員的第1筆課程 */}
        
                <div>
                <div className="w-div-title pl-4">
                    <p>課程預約詳情</p>
                </div>
                <div className="w-lessonbooking">
                    <table className="table table-borderless w-lessonbooking-detail-table">
                        <tbody>
                                <div>
                                <tr>
                                    <th scope="row">課程名稱：</th>
                                    <td>{lessonDetail.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">課程時間：</th>
                                    <td>{lessonDetail.date} {lessonDetail.hours}</td>
                                </tr>
                                <tr>
                                    <th scope="row">課程費用：</th>
                                    <td>NT$ {lessonDetail.price}</td>
                                </tr>
                                <tr>
                                    <th scope="row">預約狀態：</th>
                                    <td className="w-booking-status">{lessonDetail.lesson_status}</td>
                                </tr>
                                <tr>
                                    <th scope="row">上課地點：</th>
                                    <td>{lessonDetail.lesson_location}</td>
                                </tr>
                                <tr>
                                    <th scope="row">備註：</th>
                                    <td>{lessonDetail.lesson_note}</td>
                                </tr>
                                </div>
                        </tbody>
                    </table>
                </div>
                <div>
                    <img className="w-lessondetailpics" src={lessonDetail.img} alt="" />
                </div>
            </div>
        </>
    )
    
}

export default withRouter(LessonDetailContent)
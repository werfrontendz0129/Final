import React, {useState,useEffect} from 'react'
import './LessonDetailContent.scss'
import {withRouter} from 'react-router-dom'
import LessonDetail from '../../pages/LessonDetail'
import axios from 'axios'
// 測試data
// import data from '../../data/lessondata'

function LessonDetailContent(props) {
    // console.log('id?',props.match.params.id)
    console.log('hihihi',props.match.params.course_id)
    const id = props.match.params.id
    // console.log(props.match.params.id)
    let course_id = props.match.params.course_id
    // console.log('course_id',props.match.params.course_id)
    // const new_course_id = course_id.slice(1,2)
    // console.log(typeof(new_course_id))
    const [lessonDetail, setLessonDetail] = useState([])


    // test 
    // const {coursedata} = props
    useEffect(()=> {
        axios.get(`http://localhost:3001/members/lesson/${course_id}`)
        .then((response) => {
            console.log(response)
            if(response.data) {
                setLessonDetail(response.data)
            }
        })
        .catch((err) => console.log(err))
    },[])
    async function getCourse(id){
        try {
            const response = await fetch(
                `http://localhost:3001/members/${id}`,
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
                const datas = data.course_booking
                
                console.log('data:',data)
                console.log('datas:',datas)
            
                setLessonDetail(datas)
                
            } 
        } catch(error) {
            alert('no data')
        }
    }

    // useEffect(()=>{
    //     getCourse(id)
    // },[])
   
   
    return (
        <>
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
                                    <td className="w-booking-status">{lessonDetail._id ? '已預約' : '取消預約'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">上課地點：</th>
                                    <td>植園工作坊(中央大學)</td>
                                </tr>
                                <tr>
                                    <th scope="row">備註：</th>
                                    <td>無</td>
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
import React, {useState} from 'react'
import LessonBookinglistTbodyTr from '../LessonBookinglistTbodyTr/LessonBookinglistTbodyTr'
import './LessonBookinglist.scss'
import Pagination from '../Pagination/Pagination'

function LessonBookinglist() {
    return (
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
                            <LessonBookinglistTbodyTr />
                        </tbody>
                    </table>
                    <Pagination />
        </>
    )
}

export default LessonBookinglist
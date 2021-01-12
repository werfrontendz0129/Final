import React, {useState} from 'react'
import './LessonDetailContent.scss'

function LessonDetailContent() {
    return (
        <>
        <div>
                <div className="w-div-title pl-4">
                    <p>課程預約詳情</p>
                </div>
                <div className="w-lessonbooking">
                    <table className="table table-borderless w-lessonbooking-detail-table">
                        <tbody>
                            <tr>
                                <th scope="row">課程名稱：</th>
                                <td>多肉玻璃屋手作課</td>
                            </tr>
                            <tr>
                                <th scope="row">課程時間：</th>
                                <td>2021-02-28 15:30-17:30</td>
                            </tr>
                            <tr>
                                <th scope="row">課程費用：</th>
                                <td>NT$750</td>
                            </tr>
                            <tr>
                                <th scope="row">預約狀態：</th>
                                <td className="w-booking-status">已預約</td>
                            </tr>
                            <tr>
                                <th scope="row">上課地點：</th>
                                <td>320桃園市中壢區中大路300號國立中央大學</td>
                            </tr>
                            <tr>
                                <th scope="row">備註：</th>
                                <td>請學員自行攜帶......</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <img className="w-lessondetailpics" src="images/多肉玻璃屋手作課02.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default LessonDetailContent
import React, {useState} from 'react'
import ClicktoLessonButton from '../ClicktoLessonButton/ClicktoLessonButton'
import ClickCancelButton from '../ClickCancelButton/ClickCancelButton'
import './LessonBookinglistTbodyTr.scss'

function LessonBookinglistTbodyTr() {
    return (
        <>
        <tr>
            {/* 課程No. */}
            <td className="align-middle">01</td>                    
            {/* 課程縮圖 */}
            <td className="align-middle">      
            <div>
            <img className="w-lessonpics" src="images/仙人掌花圈手作課05.jpg" alt="" />                           
            </div>                        
            {/* 課程名稱 */}
            </td>
            <td className="w-lessonname align-middle">多肉玻璃屋手作課</td>                    
            {/* 課程時間 */}
            <td className="w-lessontime align-middle">                   
            2021-02-28<br/>15:30-17:30
            </td>            
            {/* 課程費用 */}
            <td className="align-middle" style={{color: '#838383'}}>NT$750</td>                    
            {/* 課程狀態 */}
            <td className="w-lessonstatus-booked align-middle">已預約</td>
            {/* 課程詳情&取消預約按鈕 */}
            <td className="align-middle">
            <ClicktoLessonButton />
            <ClickCancelButton />
            </td>
            
            </tr>
            <tr>
            <td className="ordernumber align-middle">02</td>
            <td className="align-middle">
            <div>
            <img className="w-lessonpics" src="images/仙人掌花圈手作課05.jpg" alt="" />
            </div>
            </td>
            <td className="w-lessonname align-middle">多肉水晶球工作坊</td>
            <td className="w-lessontime align-middle">
            2021-02-28<br/>15:30-17:30
            </td>
            <td className="align-middle" style={{color: '#838383'}}>NT$500</td>
            <td className="w-lessonstatus-end align-middle" style={{color: '#D1CFCF'}}>已結束</td>                    
            <td className="align-middle">
            <ClicktoLessonButton />                 
            </td>                    
            </tr>                
        </>
    )
}

export default LessonBookinglistTbodyTr
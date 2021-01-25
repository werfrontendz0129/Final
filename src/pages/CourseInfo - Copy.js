//基本套件引入
import React, { useState, useEffect } from 'react'
import './CourseInfo.scss'
import { withRouter } from 'react-router-dom'
// import data from '../data'//測試用
import { devUrl } from '../config/index'
import Axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//載入元件
// import TestBreadcrumb from '../components/main/TestBreadcrumb/TestBreadcrumb'
import Header from '../component/Header/Header'
import CourseMonth from '../component/course/courseMonth/CourseMonth'
import ScrollTop from '../component/main/ScrollTop/ScrollTop'
import Footer from '../component/Footer/Footer'

const MySwal = withReactContent(Swal)

function CourseInfo(props) {
  // console.log(props)

  //設一個useState準備接收API資料
  const [course, setCourse] = useState([])
  const [bookStatue, setBookStatue] = useState()
  //因為有"陣列"的資料，要再從course解構賦值出來，沒有陣列的資料則不需要做這一步(直接用-> coures .  yourDataName)
  const { learn_text, work_text } = course

  //預約課程
  async function booking() {
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await Axios.patch(
        `http://localhost:3001/courses/booking/${props.match.params.id}`
      )
      console.log(response)
      // console.log(response.data)

      // 有資料的話
      if (response.data) {
        MySwal.fire({
          icon: 'success',
          title: '預約成功',
          confirmButtonText: 'OK',
          html:
            '可至<a href="/course">會員中心</a>查看預約訊息， ' +
            '<br>同時寄出<b>通知信</b>至您的註冊信箱',
        }).then(() => {
          window.location.reload()
        })
      }
    } catch (error) {
      // 發生錯誤的處理情況
      MySwal.fire({
        icon: 'error',
        title: '預約失敗',
        text: '伺服器忙碌中，請稍後嘗試',
      })
      console.log(error)
    }
  }

  //抓取從後端丟出來的API路徑資料
  useEffect(() => {
    let member_id = 1
    // let url = `http://localhost:3001/courses/${props.match.params.id}` //not login
    let url = `http://localhost:3001/courses/${props.match.params.id}/${member_id}` //login
    Axios.get(url)
      .then((response) => {
        console.log(response.data)
        console.log(response.data.member_course_booking)
        setBookStatue(response.data.member_course_booking)
        setCourse(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {})
  return (
    <>
    <Header />
      <div className="r-container" key={course._id}>
        {/* <TestBreadcrumb /> 假的麵包屑*/}
        <h1 className="r-course-name pc">{course.name}</h1>
        <div className="banner-wrapper">
          <img src={course.banner} alt={course.name} />
        </div>

        <div className="r-course-info-wrapper">
          <ScrollTop />
          <div className="d-flex">
            <div className="left">
              <div className="title info">
                <h4>簡介</h4>
                <div className="box">
                  <p>{course.info_text}</p>
                </div>
              </div>
              <div className="title learn">
                <h4>體驗學習</h4>
                <div className="box">
                  <ol style={{ paddingLeft: '15px' }}>
                    {/* 陣列的資料迭代 */}
                    {learn_text &&
                      learn_text.map((item, i) => {
                        return <li key={i}>{item}</li>
                      })}
                  </ol>
                </div>
              </div>
              <div className="title work">
                <h4>課程成品</h4>
                <div className="box">
                  <figure>
                    <img src={course.work_img} alt={course.name} />
                  </figure>
                  <ol style={{ paddingLeft: '15px' }}>
                    {work_text && work_text.map((item) => <li>{item}</li>)}
                  </ol>
                </div>
              </div>
              <div className="title informatiom">
                <h4>課程資訊</h4>
                <div className="box">
                  <ul style={{ listStyleType: 'none' }}>
                    <li>課程日期: {course.date}</li>
                    <li>課程時間: {course.hours}</li>
                    <li>
                      課程費用: {course.price}
                      元(含所有材料、工具費、師資費用，無需再付額外費用。)
                    </li>
                    <li>課程講師: {course.teacher}</li>
                    <li>課程地點: 植園工作坊(桃園市中壢區中大路300號)</li>
                  </ul>
                  <div className="map">
                    <img
                      src={devUrl + '/images/course/show/植園地圖.jpg'}
                      alt={course.name}
                    />
                  </div>
                </div>
              </div>
              <div className="title note">
                <h4>注意事項</h4>
                <div className="box">
                  <ol style={{ listStyleType: 'none' }}>
                    <li>
                      開課日前 1 天，不予更改日期，如無法參加課程，請到會員中心
                      <span>取消預約課程</span>，將名額轉讓給其他人參加。
                    </li>
                    <li>
                      課程開班：2
                      人即可開班；若課程招生未滿或因天災等不可抗力因素，植園將於
                      2 天前主動寄信通知協助更改日期。
                    </li>
                    <li>
                      請學員提前 20
                      分鐘到達，完成課程報到繳費，讓課程可以準時開始，若遲到超過
                      30 分鐘則無法參與課程，視同取消。
                    </li>
                    <li>
                      學員只需帶著愉快的心情來上課，所有材料工具都會幫你準備好。
                    </li>
                  </ol>
                </div>
              </div>
              <div className="title demo">
                <h4>作品 / 課程示意圖</h4>
                <div className="box d-flex flex-xl-row flex-column">
                  <figure>
                    <img src={course.demo_img1} alt={course.name} />
                  </figure>
                  <figure>
                    {course.demo_img2 && (
                      <img src={course.demo_img2} alt={course.name} />
                    )}
                  </figure>
                </div>
              </div>
            </div>
            <div className="right mx-auto pc">
              <div className="book position-sticky">
                <div className="book-title mx-auto">
                  <h4>[{course.name}]</h4>
                </div>
                <div className="book-content">
                  <ul>
                    <li>日期: {course.date}</li>
                    <li>時間: {course.hours}</li>
                    <li>費用: {course.price}元</li>
                    <li>講師: {course.teacher}</li>
                    <li>地點: 植園手作坊</li>
                    <li>(桃園市中壢區中大路300號)</li>
                    <li>
                      剩餘名額: <span>{course.people}</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className={bookStatue ? 'booked' : 'default'}
                    disabled={
                      bookStatue || course.people === 0 ? 'disabled' : ''
                    }
                    onClick={() => {
                      //先判斷有無登入
                      booking()
                    }}
                  >
                    {course.people === 0
                      ? '已額滿'
                      : bookStatue === true
                      ? '已預約'
                      : '預約報名'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CourseMonth text={'recommend'} />
      </div>
      <Footer/>
    </>
  )
}

export default withRouter(CourseInfo)

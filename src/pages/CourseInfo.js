//基本套件引入
import React, { useState, useEffect, useContext } from 'react'
import './CourseInfo.scss'
import { withRouter, useHistory } from 'react-router-dom'
// import data from '../data'//測試用
import { devUrl } from '../config/index'
import Axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from 'emailjs-com'


//載入元件
import CourseBreadcrumb from '../component/course/courseBreadcrumb/CourseBreadcrumb'
import CourseRecommend from '../component/course/courseRecommend/CourseRecommend'
import ScrollTop from '../component/main/ScrollTop/ScrollTop'
import Footer from '../component/Footer/Footer'
import HeaderA from '../component/Header/HeaderA'
import {UserContext} from '../component/Index/UserContext'

const MySwal = withReactContent(Swal)

function CourseInfo(props) {
  // console.log(props)

  const [isAuth , setIsAuth] = useState(true)
  const {user, setUser} = useContext(UserContext)
  //設一個useState準備接收API資料
  const [course, setCourse] = useState([])
  const [bookStatue, setBookStatue] = useState()
  //因為有"陣列"的資料，要再從course解構賦值出來，沒有陣列的資料則不需要做這一步(直接用-> coures .  yourDataName)
  const { learn_text, work_text } = course

  const year = new Date().getFullYear()
  const month = '0' + (new Date().getMonth() + 1)
  const date = new Date().getDate()
  const today = year + '-' + month + '-' + date
  let history = useHistory()

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
      if (response.data){
        //寄信先暫時關掉
        sendmail()
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

  //寄信功能
  function sendmail(e) {
    // e.preventDefault()
    let templateParams = {
      member: 'Vivian', //要改成登入者姓名
      course_name: course.name,
      course_date: course.date,
      course_time: course.hours,
      course_price: course.price,
      member_mail: 'billcyen@gmail.com', //要改成登入者信箱
    }

    let service_id = 'default_service'
    let template_id = 'template_gwtl44t'
    let userID = 'user_8FPAvW2eePw6aRdtsPXCf'
    emailjs
      .send(service_id, template_id, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((error) => {
        console.log('FAILED...', error)
      })
  }

  return (
    <>
    <HeaderA isAuth={isAuth} />
      <div className="r-container" key={course._id}>
        <CourseBreadcrumb course={course.name} />
        <h1 className="r-course-name pc">{course.name}</h1>
        <div className="banner-wrapper">
          <img src={course.banner} alt={course.name} />
        </div>

        <div className="r-course-info-wrapper">
          <ScrollTop />
          <div className="d-flex" style={{ marginBottom: '100px' }}>
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
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.3725086995966!2d121.19176126086984!3d24.967421440010558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468236c3548196b%3A0x596f83296c212a97!2z5ZyL56uL5Lit5aSu5aSn5a245bel56iL5LqM6aSo!5e0!3m2!1szh-TW!2stw!4v1611221943786!5m2!1szh-TW!2stw"
                      width="400"
                      height="300"
                      frameborder="0"
                      style={{ border: '0' }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                      title="稙園"
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
                    // className={bookStatue ? 'booked' : 'default'}
                    className={
                      course.people === 0
                        ? 'booked'
                        : course.date <= today
                        ? 'booked'
                        : bookStatue === true
                        ? 'booked'
                        : 'default'
                    }
                    disabled={
                      bookStatue || course.people === 0 || course.date <= today
                        ? 'disabled'
                        : ''
                    }
                    onClick={() => {
                      //先判斷有無登入
                      // {
                      //   isAuth = true
                      //     ? MySwal.fire({
                      //         icon: 'warning',
                      //         title: '請先登入會員',
                      //         text: '登入會員後，再做預約課程',
                      //         confirmButtonText: '前往登入',
                      //         confirmButtonColor: '#6c8650',
                      //         showCancelButton: true,
                      //         cancelButtonText: '稍後登入',
                      //         cancelButtonColor: '#838383',
                      //       }).then((result) => {
                      //         console.log(result)
                      //         if (result.value) {
                      //           //這邊之後要改成登入頁面
                      //           history.push('/login')
                      //         }
                      //       })
                      //     : booking()
                      // }
                      booking()
                    }}
                  >
                    {course.people === 0
                      ? '已額滿'
                      : course.date <= today
                      ? '已結束'
                      : bookStatue === true
                      ? '已預約'
                      : '預約報名'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CourseRecommend id={props.match.params.id} type={course.type} />
      </div>
      <Footer />
    </>
  )
}

export default withRouter(CourseInfo)

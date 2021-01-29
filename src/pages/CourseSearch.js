//基本套件引入
import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { devUrl } from '../config/index'
// import data from '../data.js' //測試用
import './CourseSearch.scss'
import Axios from 'axios'


//元件引入
import CourseCategoryMenu from '../component/course/courseCategoryMenu/CourseCategoryMenu'
import TestBreadcrumb from '../component/main/TestBreadcrumb/TestBreadcrumb'
import CourseResultTitle from '../component/course/courseResultTitle/CourseResultTitle'
import CourseShowCard from '../component/course/courseShowCard/CourseShowCard'
import Footer from '../component/Footer/Footer'
import HeaderA from '../component/Header/HeaderA'
import {UserContext} from '../component/Index/UserContext'

function CourseSearch(props) {
  const{user , setUser} =useContext(UserContext) 
  console.log(props)
  console.log(props.Guide_type)
  const [data, setData] = useState([]) //等第一次預設資料
  const [isLoading, setIsLoading] = useState(false)

  const [type, setType] = useState('')
  const [all, setAll] = useState('')

  const [title, setTitle] = useState()
  const [subTitle, setSubTitle] = useState('')
  const [clickTitle, setClickTitle] = useState()
  const [clickSub, setClickSub] = useState()

  const [keyword, setKeyword] = useState('')
  // console.log(`current type is ${type}`)
  //預設初始資料(全部課程)
  // useEffect(() => {
  //   Axios.get('http://localhost:3001/courses/')
  //     .then((response) => {
  //       console.log(response)
  //       console.log(response.data)
  //       setData(response.data)
  //     })
  //     .catch((error) => console.log(error))
  // }, [])
  useEffect(() => {
    setClickTitle(title)
    setClickSub(subTitle)
  }, [title, subTitle])

  //預設初始資料(全部課程)
  useEffect(() => {
    // getAllData()
    // setType(props.match.params.type)
    setTimeout(() => {
      document.getElementById('succlent').click()
    }, 100)
    // getTypeData()
    // setType('succlent')
  }, [])

  //   setType(props.match.params.type)

  //全部課程
  useEffect(() => {
    getAllData()
    setKeyword('')
    setType('')
  }, [all])

  //主題式資料
  useEffect(() => {
    getTypeData()
    setKeyword('')
    setAll('')
  }, [type])

  const display = (
    <>
      <div className="course-search-content">
        <div className="course-search-content-top d-flex justify-content-between">
          <CourseResultTitle title={clickTitle} subTitle={clickSub} />
          <div className="search-input">
            <i
              onClick={function () {
                {
                  type === '' ? getAllSearch() : getSearch()
                }
                setTitle('搜尋結果:' + keyword)
                setSubTitle('Search results')
              }}
              className="fas fa-search"
              style={{ fontSize: '18px' }}
              title="點我!"
            ></i>
            <input
              type="text"
              // size="15"
              placeholder="搜尋課程"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              // onKeyPress={(e) => {
              //   {
              //     e.keyCode == 13 && type === '' ? getAllSearch() : getSearch()
              //   }
              //   setTitle('搜尋結果:' + keyword)
              //   setSubTitle('Search results')
              // }}
            />
          </div>
        </div>
        <div className="course-search-content-display d-flex flex-wrap">
          {data.length > 0 ? (
            data.map((course) => (
              <CourseShowCard key={course._id} course={course}></CourseShowCard>
            ))
          ) : (
            <div style={{ margin: 'auto' }}>
              <img
                style={{
                  width: '300px',
                  paddingRight: '25px',
                  // border: '1px solid red',
                }}
                alt=""
                src="http://localhost:3000/images/svg/noresult.gif"
              />
              <div>
                <h4 style={{ textAlign: 'center' }}>尚無此課程</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
  // {!props ? (<div>not data</div>): (<div>有資料</div>)}
  // const spinner = (
  //   <>
  //     <div
  //       className="d-flex align-items-center text-center"
  //       style={{ margin: '0 auto' }}
  //     >
  //       <strong>Loading...</strong>
  //       <div
  //         className="spinner-border ml-auto"
  //         role="status"
  //         aria-hidden="true"
  //       ></div>
  //     </div>
  //   </>
  // )
  const spinner = (
    <>
      <div className="d-flex">
        <img
          style={{ width: '300px', margin: '0 400px' }}
          alt="no"
          src="http://localhost:3000/images/svg/spinner.gif"
        />
        {/* <h4 className="mr-2">Loading... </h4> */}
        {/* <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div> */}
      </div>
    </>
  )

  //預設初始資料(全部課程)
  async function getAllData() {
    //開始載入資料，先出現spinner
    setIsLoading(true)

    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await Axios.get('http://localhost:3001/courses/')
      console.log(response)
      console.log(response.data)

      // 有資料的話
      if (response.data) {
        setData(response.data)
      }

      // 最後關起spinner，改呈現真正資料
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  //主題式類別資料
  async function getTypeData() {
    //開始載入資料，先出現spinner
    setIsLoading(true)

    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await Axios.get(
        `http://localhost:3001/courses/type/${type}`
      )
      console.log(response)
      console.log(response.data)

      // 有資料的話
      if (response.data) {
        setData(response.data)
      }

      // 最後關起spinner，改呈現真正資料
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  //所有關鍵字搜尋
  async function getAllSearch() {
    //開始載入資料，先出現spinner
    setIsLoading(true)

    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await Axios.get(
        `http://localhost:3001/courses/keywordfor/${keyword}`
      )
      console.log(response)
      console.log(response.data)

      // 有資料的話
      if (response.data) {
        setData(response.data)
      }

      // 最後關起spinner，改呈現真正資料
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  //關鍵字類別搜尋
  async function getSearch() {
    //開始載入資料，先出現spinner
    setIsLoading(true)

    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await Axios.get(
        `http://localhost:3001/courses/keyword/${keyword}/${type}`
      )
      console.log(response)
      console.log(response.data)

      // 有資料的話
      if (response.data) {
        setData(response.data)
      }

      // 最後關起spinner，改呈現真正資料
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  return (
    <>
    <HeaderA isAuth={user} />
      <div className="r-search-container">
        {/* <h1>這邊是課程搜尋</h1>
        <h1>這邊是課程搜尋</h1>
        <h1>這邊是課程搜尋</h1>
        <h1>這邊是課程搜尋</h1> */}
        <TestBreadcrumb />
        <div className="r-course-search-wrapper d-flex">
          <CourseCategoryMenu
            className="fixed-top"
            setAll={setAll}
            setType={setType}
            setTitle={setTitle}
            setSubTitle={setSubTitle}
          />
          {/* <div className="course-search-content">
            <div className="course-search-content-top d-flex justify-content-between">
              <CourseResultTitle />
              <div className="search-input">
                <i className="fas fa-search" style={{ fontSize: '18px' }}></i>
                <input type="text" size="15" placeholder="搜尋課程" />
              </div>
            </div>
            <div className="course-search-content-display d-flex flex-wrap">
              {data.map((course) => (
                <CourseShowCard
                  key={course._id}
                  course={course}
                ></CourseShowCard>
              ))}
            </div>
          </div> */}
          {isLoading ? spinner : display}
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default withRouter(CourseSearch)

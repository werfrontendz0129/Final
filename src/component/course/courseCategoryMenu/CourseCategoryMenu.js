import React, { useState } from 'react'
import './CourseCategoryMenu.scss'
import { devUrl } from '../../../config/index'
import { propTypes } from 'react-bootstrap/esm/Image'

function CourseCategoryMenu(props) {
  // const [childType, setChildType] = useState('')
  const [isActive, setIsActive] = useState('')
  // const [onClick, setOnClick] = useState(false)
  // const [childType, setChildType] = useState('')

  return (
    <div className="r-course-category pc">
      <ul className="course-category-searchbar position-sticky" style={{top: '10px'}}>
        <li className="category-title">課程分類</li>
        <a
          className={isActive == 'all' ? 'active' : 'default'}
          onClick={() => {
            props.setAll('all')
            props.setTitle('全部課程')
            props.setSubTitle('All Courses')
            setIsActive('all')
          }}
        >
          <li>全部課程</li>
        </a>
        <a
          className={isActive == 'succlent' ? 'active' : 'default'}
          onClick={() => {
            props.setType('succlent')
            props.setTitle('多肉課程')
            props.setSubTitle('Succlents Courses')
            setIsActive('succlent')
            props.setAll('')
          }}
        >
          <li id="succlent">多肉課程</li>
        </a>
        <a
          className={isActive == 'ball' ? 'active' : 'default'}
          onClick={() => {
            props.setType('ball')
            props.setTitle('苔球課程')
            props.setSubTitle('Kokedama Courses')
            setIsActive('ball')
            props.setAll('')
          }}
        >
          <li id="ball">苔球課程</li>
        </a>
        <a
          className={isActive == 'flower' ? 'active' : 'default'}
          onClick={() => {
            props.setType('flower')
            props.setTitle('乾燥花課程')
            props.setSubTitle('Dried Flowers Courses')
            setIsActive('flower')
            props.setAll('')
          }}
        >
          <li id="flower">乾燥花課程</li>
        </a>
        <a
          className={isActive == 'other' ? 'active' : 'default'}
          onClick={() => {
            props.setType('other')
            props.setTitle('其他課程')
            props.setSubTitle('Other Pot Culture Couses')
            setIsActive('other')
            props.setAll('')
          }}
        >
          <li id="plant">其他植栽課程</li>
        </a>
      </ul>
    </div>
  )
}

export default CourseCategoryMenu

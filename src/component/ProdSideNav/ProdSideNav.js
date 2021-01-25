import './ProdSideNav.scss'
import React, { useState, useEffect} from 'react';
import { devUrl } from '../../config/index'
import ProdSearchBar from '../ProdSearchBar/ProdSearchBar'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function ProdSideNav(props){
  const pageOccasion =props.pageOccasion
  console.log(props.occasion)
  console.log(pageOccasion)
  
  // 搜尋
  const[pKeyword,pSetKeyword] =useState("");
  // console.log(pKeyword)
  useEffect(()=>{
    props.keyword(pKeyword)
  },[pKeyword])


  useEffect(()=>{
    // if()
    // props.keyword(pageOccasion)
    props.setTitle(pageOccasion)
  },[pageOccasion])



  //居家佈置toggle
  const [isToggled, setToggled] = useState();
  const toggleTrueFalse = () => setToggled(!isToggled);
  //商業空間toggle
  const [isToggled2, setToggled2] = useState(true);
  const toggleTrueFalse2 = () => setToggled2(!isToggled2);
  //植栽尺寸toggle
  const [isToggled3, setToggled3] = useState(true);
  const toggleTrueFalse3 = () => setToggled3(!isToggled3);


  function pageDefault(){
    switch (pageOccasion) {
      case '客廳空間布置':
            setToggled(!isToggled);
            props.setOccasion('客廳空間布置')
            break
        case '居家牆面布置':
            setToggled(!isToggled);
            props.setOccasion('居家牆面布置') 
            break
        case '浴室空間布置':
            setToggled(!isToggled);
            props.setOccasion('浴室空間布置') 
            break
        case '辦公室布置':
          setToggled2(!isToggled2)
            props.setOccasion('辦公室布置') 
            break
        case '商業空間布置':
            setToggled2(!isToggled2)
            props.setOccasion('商業空間布置') 
            break
          case '婚禮活動布置':
            setToggled2(!isToggled2)
            props.setOccasion('婚禮活動布置') 
            break
        default :
            props.setAllProd(!props.allProd)
    }
  }
useEffect(()=>{
  pageDefault()
},[pageOccasion])
// console.log(pageOccasion)
  return (
    <>
      <ProdSearchBar 
      occasion={props.occasion} 
      category={props.category}
      allProd ={ props.allProd }
      keyword ={pSetKeyword}
      />
      <ul className="p-0 "> 
         <li className="v-nav-title d-flex justify-content-between align-items-center"  
          onClick={()=>{props.setAllProd(!props.allProd)
                            props.setTitle('全部商品')
                            }}>
          <h5 className="m-0">全部商品</h5>
        </li>
      </ul>

      <ul className="p-0">
        <li 
          id="home"
          className={ isToggled === true ? "v-nav-title d-flex justify-content-between align-items-center" : "v-nav-title-closed d-flex justify-content-between align-items-center"}
          onClick={()=>{toggleTrueFalse()}} 
          >
          <h5 className="m-0">居家佈置</h5>
          <img
            className="v-prod-arrow"
            src= { isToggled === true ?  devUrl+`/images/svg/nav arrow close.svg`: devUrl+`/images/svg/nav arrow open.svg`}
            // src=
            alt=""
          />
        </li>
        {/* <li className="v-nav-item">{isToggled.toString()}</li> */}
          <li 
          id="livingroom"
          onClick={()=>{props.setOccasion('客廳空間布置') 
                            }} 
          //onClick是作篩選用的，設的值要跟資料庫一模模一樣樣！！！
          className={isToggled === true ?  "v-nav-item" : "vclose"}>客廳空間布置</li>
          <li 
          id="wall"
          onClick={()=>{props.setOccasion('居家牆面布置') }}
          className={isToggled === true ?  "v-nav-item" : "vclose"}>居家牆面布置</li>
          <li 
           id="bathroom"
          onClick={()=>{props.setOccasion('浴室空間布置')  }}
          className={isToggled === true ?  "v-nav-item" : "vclose"}>浴室空間布置</li>
      </ul>
      
      <ul className="p-0 ">
      <li className={ isToggled2 === true ? "v-nav-title-closed d-flex justify-content-between align-items-center" : "v-nav-title d-flex justify-content-between align-items-center"}
        // className="v-nav-title d-flex justify-content-between align-items-center"
          onClick={toggleTrueFalse2} >
          <h5 className="m-0">商業空間</h5>
          <img
            className="v-prod-arrow"
            src= { isToggled2 === true ?  devUrl+`/images/svg/nav arrow open.svg`: devUrl+`/images/svg/nav arrow close.svg`}
            // src=
            alt=""
          />
        </li>
                {/* <li className="v-nav-item">{isToggled2.toString()}</li> */}
        <li 
        onClick={()=>{props.setOccasion('辦公室布置')
                           } } 
        className={isToggled2 === true ?  "vclose" : "v-nav-item"}>辦公室布置</li>
        <li
        onClick={()=>{props.setOccasion('商業空間布置')
                            } } 
        className={isToggled2 === true ?  "vclose" : "v-nav-item"}>商業空間布置</li>
        <li 
        onClick={()=>{props.setOccasion('婚禮活動布置')
                            } }
        className={isToggled2 === true ?  "vclose" : "v-nav-item"}>婚禮活動布置</li>
       </ul>
       
       <ul className="p-0 ">
      <li className={ isToggled3 === true ? "v-nav-title-closed d-flex justify-content-between align-items-center" : "v-nav-title d-flex justify-content-between align-items-center"}
        // className="v-nav-title d-flex justify-content-between align-items-center"
          onClick={toggleTrueFalse3} >
          <h5 className="m-0">植栽尺寸</h5>
          <img
            className="v-prod-arrow"
            src= { isToggled3 === true ?  devUrl+`/images/svg/nav arrow open.svg`: devUrl+`/images/svg/nav arrow close.svg`}
            // src=
            alt=""
          />
        </li>
        <li 
        onClick={()=>{props.setCategory('大型植栽')
                            } }
        className={isToggled3 === true ?  "vclose" : "v-nav-item"}>大型植栽</li>
        <li 
        onClick={()=>{props.setCategory('中型植栽')
                           } }
        className={isToggled3 === true ?  "vclose" : "v-nav-item"}>中型植栽</li>
        <li 
        onClick={()=>{props.setCategory('小型植栽')
                            } }
        className={isToggled3 === true ?  "vclose" : "v-nav-item"}>小型植栽</li>
       </ul>


      {/* <ul className="p-0 "> 
         <li className="v-nav-title d-flex justify-content-between align-items-center">
          <h5 className="m-0">植栽價格</h5>
        </li>
        <li className="v-nav-item">
        <RangeSlider
          variant='secondary'
          value={value}
          onChange={changeEvent => setValue(changeEvent.target.value)}
        />
        </li>
        <li className="v-nav-item"></li>
      </ul> */}
    </>
  )
}

export default ProdSideNav

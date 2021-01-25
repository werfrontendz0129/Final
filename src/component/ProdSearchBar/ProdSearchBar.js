import React,{useState, useEffect} from 'react'
import './ProdSearchBar.scss'
import { devUrl } from '../../config/index'

// const ProdSearchBar = ({ keyword, setKeyword }) => {

function ProdSearchBar(props) {
  const [keyword, setKeyword] = useState('');
  // const[result, setResult]=useState('')
  // const{ occasion,category, allProd} = props

// useEffect(() => {
//   setResult(occasion)
// }, [occasion])
// useEffect(() => {
//   setResult(category)
// }, [category])
// useEffect(() => {
//   setResult('全部商品')
// }, [allProd])



  const printValues = e => {
    e.preventDefault();
  };

  return (
    <>
      {/* <div className="v-search-result">
        <h4 >{result}</h4>
      </div> */}
      <div className="v-search-group">
      <form onSubmit={printValues}>
        <label className="col-2 m-0 p-0 " for="v-search">
          <img
            onClick ={function(){
              // setResult( `搜尋結果:` + keyword) 
              props.keyword(keyword)
          }}
            className="v-search-img"
            title="click and search"
            src={devUrl + '/images/svg/search.svg'}
            alt=""
          />
        </label>
        <input
          id="v-search"
          type="text"
          className="col-10 v-search-bar p-0 "
          placeholder="搜尋商品"
          value={keyword}
          onChange={event => setKeyword(event.target.value)}
          name="keyword"
        />
        </form>
      </div>

      {/* <input
        className="v-search-bar"
        key="random1"
        value={keyword}
        placeholder={'search country'}
        onChange={(e) => setKeyword(e.target.value)}
      /> */}
    </>
  )
}

export default ProdSearchBar

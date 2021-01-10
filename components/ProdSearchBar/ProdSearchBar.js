import React from 'react'
import './ProdSearchBar.scss'
import { devUrl } from '../../config/index'

// const ProdSearchBar = ({ keyword, setKeyword }) => {

function ProdSearchBar() {
  return (
    <>
      <div className="v-search-result">
        <h4>(搜尋商品)</h4>
      </div>
      <div className="v-search-group form-row align-items-center">
        <label className="col-2 m-0 p-0 " for="v-search">
          <img
            className="v-search-img"
            src={devUrl + '/images/svg/search.svg'}
            alt=""
          />
        </label>
        <input
          id="v-search"
          type="text"
          className="col-9 v-search-bar p-0"
          placeholder="搜尋商品"
          // value=""
          // onChange=""
        />
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

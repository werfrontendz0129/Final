import React from 'react';
import './ShoppingCartShall.scss'


function ShoppingCartShall(props){
    return(
    <>
    <div className="b-container-fluid">
          <div className="row d-flex" style={{flexWrap: "nowrap"}}>
          {props.children}
          </div>
    </div>      
    </>
    )}

export default ShoppingCartShall
import React from 'react';
import './ShoppingCartTitleExchange.scss'
import { Link } from 'react-router-dom'

function ShoppingCartTitleExchange(){
    return(
    <>
        
        <div className="b-shoppingcart-title-exchange mt-4">
          <Link className="disable p-0" to="../main/shoppingcart-rental" ><p className="b-shoppingcart-title-style1">租賃商品-購物車</p></Link>
          <Link className="p-0 " to="../main/shoppingcart-purchase"><p className="b-shoppingcart-title-style2">選購商品-購物車</p></Link>
          <div><div></div></div>
          <div></div>
        </div>
     </>
    )}

export default ShoppingCartTitleExchange
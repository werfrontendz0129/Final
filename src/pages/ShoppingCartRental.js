import React, {useState, useEffect, useContext} from 'react';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartTitleExchange from '../component/ShoppingCart-Titles/ShoppingCartTitleExchange';
import ShoppingCartShall from '../component/ShoppingCart-Shall/ShoppingCartShall';
import ShoppingCartMainTableTitleRental from '../component/ShoppingCart-Main-Table-Title-Rental/ShoppingCartMainTableTitleRental'
import ShoppingCartMainRentalItemList from '../component/ShoppingCart-Main-Rental-Item-List/ShoppingCartMainRentalItemList'
import ShoppingCartCheckoutBoxRental from '../component/ShoppingCart-Checkout-Box-Rental/ShoppingCartCheckoutBoxRental';
import Table from 'react-bootstrap/Table';
import {SubTotal} from './SubTotal'
import {ShippingCost} from './ShippingCost'

function ShoppingCartRental(props){
    const [val, setVal] = useState()
    const [val1, setVal1] = useState()
  

    return(
        <>
        <SubTotal.Provider value={{val, setVal}}>
        <ShippingCost.Provider value={{val1, setVal1}}>
        
        <div className="b-paddingLR">
            <div className="b-shoppingcart-rental-main-header">
                <div>
                {console.log('test',(val+val1))}
                    {/* <Breadcrumb /> */}
                    <div className="b-shoppingcart-rental-main-carts">
                        <p className="mb-2">購物車</p>
                    </div>
                </div>
                <Shoppingprocessbar shopping></Shoppingprocessbar>
            </div>
            <ShoppingCartTitleExchange rental></ShoppingCartTitleExchange>
            <ShoppingCartShall>
                <aside className="col-lg-9 p-0">
                    <div className="card b-shoppingcart-rental-main-card-style">
                        <div className="table-responsive">
                            <Table className="table table-borderless b-shoppingcart-rental-main-line">
                                <thead style={{color: "#969696"}}>
                                    <ShoppingCartMainTableTitleRental />
                                </thead>  
                                <tbody>
                                        <ShoppingCartMainRentalItemList></ShoppingCartMainRentalItemList>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </aside>
                <aside className="b-shoppingcart-rental-main-outter-box">
                    <ShoppingCartCheckoutBoxRental val={val} val1={val1}></ShoppingCartCheckoutBoxRental>
                </aside>
            </ShoppingCartShall>
        </div>
        </ShippingCost.Provider>
        </SubTotal.Provider>
     </>
    )}

export default ShoppingCartRental
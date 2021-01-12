import React, {useState} from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../components/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartTitleExchange from '../components/ShoppingCart-Titles/ShoppingCartTitleExchange'
import ShoppingCartShall from '../components/ShoppingCart-Shall/ShoppingCartShall'
import ShoppingCartMainTableTitleRental from '../components/ShoppingCart-Main-Table-Title-Rental/ShoppingCartMainTableTitleRental'
import ShoppingCartMainRentalItemList from '../components/ShoppingCart-Main-Rental-Item-List/ShoppingCartMainRentalItemList'
import ShoppingCartCheckoutBox from '../components/ShoppingCart-Checkout-Box/ShoppingCartCheckoutBox'
import './ShoppingCartRental.scss'
import Table from 'react-bootstrap/Table'


function ShoppingCartRental(){
    return(
    <>
        <div className="b-paddingLR">
            <div className="b-shoppingcart-rental-main-header">
                <div>
                    <Breadcrumb />
                    <div className="b-shoppingcart-rental-main-carts">
                        <p className="mb-2">購物車</p>
                    </div>
                </div>
                <Shoppingprocessbar />
            </div>
            <ShoppingCartTitleExchange />
            <ShoppingCartShall>
                <aside className="col-lg-9 p-0">
                    <div className="card b-shoppingcart-rental-main-card-style">
                        <div className="table-responsive">
                            <Table className="table table-borderless b-shoppingcart-rental-main-line">
                                <thead style={{color: "#969696"}}>
                                    <ShoppingCartMainTableTitleRental />
                                </thead>  
                                <tbody>
                                    <ShoppingCartMainRentalItemList />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </aside>
                <aside className="b-shoppingcart-rental-main-outter-box">
                    <ShoppingCartCheckoutBox />
                </aside>
            </ShoppingCartShall>
        </div>
        {/* <div className="b-shoppingcart-rental-main-header">
            <div>
                <Breadcrumb />
                <div className="b-shoppingcart-rental-main-carts">
                    <p className="mb-2">購物車</p>
                </div>
            </div>
            <Shoppingprocessbar />
        </div>
        <ShoppingCartTitleExchange />
        <ShoppingCartShall>
              <aside className="col-lg-9 p-0">
                  <div className="card b-shoppingcart-rental-main-card-style">
                      <div className="table-responsive">
                          <Table className="table table-borderless b-shoppingcart-rental-main-line">
                            <thead style={{color: "#969696"}}>
                                <ShoppingCartMainTableTitleRental />
                            </thead>  
                            <tbody>
                                <ShoppingCartMainRentalItemList />
                            </tbody>
                          </Table>
                      </div>
                  </div>
              </aside>
              <aside className="b-shoppingcart-rental-main-outter-box">
                  <ShoppingCartCheckoutBox />
              </aside>
        </ShoppingCartShall> */}
     </>
    )}

export default ShoppingCartRental
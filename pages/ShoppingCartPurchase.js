import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../components/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartTitleExchange from '../components/ShoppingCart-Titles/ShoppingCartTitleExchange'
import ShoppingCartShall from '../components/ShoppingCart-Shall/ShoppingCartShall'
import ShoppingCartMainTableTitlePurchase from '../components/ShoppingCart-Main-Table-Title-Purchase/ShoppingCartMainTableTitlePurchase'
import ShoppingCartMainPurchaseItemList from '../components/ShoppingCart-Main-Purchase-Item-List/ShoppingCartMainPurchaseItemList'
import ShoppingCartCheckoutBox from '../components/ShoppingCart-Checkout-Box/ShoppingCartCheckoutBox'
import './ShoppingCartPurchase.scss'
import Table from 'react-bootstrap/Table'


function ShoppingCartPurchase(){
    return(
    <>
        <div className="b-paddingLR">
            <div className="b-shoppingcart-main-purchase-header">
                <div>
                    <Breadcrumb />
                    <div className="b-shoppingcart-main-purchase-carts">
                        <p className="mb-2">購物車</p>
                    </div>
                </div>
                <Shoppingprocessbar />
            </div>
            <ShoppingCartTitleExchange />
            <ShoppingCartShall>
                <aside className="col-lg-9 p-0">
                    <div className="card border-0 b-shoppingcart-main-purchase-cart-style">
                        <div className="table-responsive">
                            <Table className="table table-borderless b-shoppingcart-main-purchase-table-cart">
                                <thead style={{color:"#838383"}}>
                                    <ShoppingCartMainTableTitlePurchase />
                                </thead>  
                                <tbody>
                                    <ShoppingCartMainPurchaseItemList />
                                    <ShoppingCartMainPurchaseItemList />
                                    <ShoppingCartMainPurchaseItemList />
                                    <ShoppingCartMainPurchaseItemList />
                                    <ShoppingCartMainPurchaseItemList />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </aside>
                <aside className="b-shoppingcart-main-purchase-outter-box">
                    <ShoppingCartCheckoutBox />
                </aside>
            </ShoppingCartShall>
        </div>
        
     </>
    )}

export default ShoppingCartPurchase
import React from 'react';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartTitleExchange from '../component/ShoppingCart-Titles/ShoppingCartTitleExchange'
import ShoppingCartShall from '../component/ShoppingCart-Shall/ShoppingCartShall'
import ShoppingCartMainTableTitlePurchase from '../component/ShoppingCart_Purchase/ShoppingCart-Main-Table-Title-Purchase/ShoppingCartMainTableTitlePurchase'
import ShoppingCartMainPurchaseItemList from '../component/ShoppingCart_Purchase/ShoppingCart-Main-Purchase-Item-List/ShoppingCartMainPurchaseItemList'
import ShoppingCartCheckoutBoxPurchase from '../component/ShoppingCart_Purchase/ShoppingCart-Checkout-Box-Purchase/ShoppingCartCheckoutBoxPurchase'
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
                <Shoppingprocessbar shopping></Shoppingprocessbar>
            </div>
            <ShoppingCartTitleExchange purchase></ShoppingCartTitleExchange>
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
                    <ShoppingCartCheckoutBoxPurchase ></ShoppingCartCheckoutBoxPurchase>
                </aside>
            </ShoppingCartShall>
        </div>
        
     </>
    )}

export default ShoppingCartPurchase
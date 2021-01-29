import React,{useState, useEffect} from 'react';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartShall from '../component/ShoppingCart-Shall/ShoppingCartShall'
import CheckoutAddressSelectTableTitle from '../component/Checkout-AddressSelect-TableTitle/CheckoutAddressSelectTableTitle'
import CheckoutAddressSelectItemList from '../component/Checkout-AddressSelect-ItemList/CheckoutAddressSelectItemList'
import CheckoutBoxAddressRental from '../component/Checkout-CheckoutBox-AddressSelect-Rental/CheckoutBoxAddressRental'
import CheckoutModalAddAddress from '../component/Checkout-Modal-AddAddress/CheckoutModalAddAddress'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

function ShoppingCartAddressSelect(props){

const[orderList, setOrderList] = useState([])
const[passdata, setPassdata] = useState(0)
const[isLoading, setIsLoading] = useState(1);

    useEffect(()=>{
        Axios.get('http://localhost:3001/orderList')
        .then((response) => {
        setOrderList(response.data[0].order_address)
        setIsLoading(0)
        })
        .catch((error) => console.log(error))
        }, [])

        const resetOrder=()=>{
            Axios.get('http://localhost:3001/orderList')
            .then((response) => {
            setOrderList(response.data[0].order_address)
            })
            .catch((error) => console.log(error))
            }
    return (
    //     isLoading == 1 ?
    // <>
    // <div className="d-flex v-spinner">
    //           <img style={{width:'300px'}} alt="" src='http://localhost:3000/images/svg/spinner.gif' />
    //            {/* <h4 className="mr-2">Loading... </h4> */}
    //            {/* <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div> */}
    //   </div>
    //   </> 
    //   : 
        <>
        <Header />
        <div className="test">
        <div className="b-paddingLR">
            <div className="b-Checkout-AddressSelect-header">
                <div>
                    <Breadcrumb />
                    <div className="b-checkout-address-breadtitle" style={{paddingTop:80}}>
                        <p>結帳</p>
                    </div>
                </div>
                <Shoppingprocessbar shopping address ></Shoppingprocessbar>
            </div>
            <div class="b-Checkout-AddressSelect-title" style={{marginTop:10}}>
                <p>選擇配送方式及地址</p>
                <CheckoutModalAddAddress />
            </div>
            <ShoppingCartShall>
                <aside className="col-lg-9 p-0">
                    <div className="card border-0">
                        <div className="table-responsive">
                        <Table className="table table-borderless">
                            <thead className="text-muted ">
                                {orderList.length>0?
                                <CheckoutAddressSelectTableTitle />: ""}
                            </thead>
                            <tbody>
                                {orderList.length>0? orderList.map((order,index)=>(
                                <CheckoutAddressSelectItemList key={index} index={index} order={order} resetOrder={resetOrder} setPassdata ={setPassdata}></CheckoutAddressSelectItemList>

                                )): <>
                                <aside className="col-lg-9 p-0" style={{marginLeft:80}}>
                                    <div className="table-responsive d-flex justify-content-center flex-column text-center">
                                    <div style={{marginTop: 50, marginBottom: 30, fontSize: 20, color: "#838383"}}>寄件資訊尚未添加，請點擊上方<span style={{color:"#E58F80"}}>"新增地址"</span>以便繼續完成付款流程</div>
                                    <div className="mb-5"><img style={{width:230, height:"100%", opacity: "40%"}} src="http://localhost:3000/images/address.png"/></div>
                                    </div>
                                </aside>
                                </> }
                            </tbody>
                        </Table>
                        </div>
                    </div>
                </aside>
                <aside className="b-Checkout-AddressSelect-checkout-outterbox">
                    <CheckoutBoxAddressRental orderList={orderList} passdata={passdata} />
                </aside>
            </ShoppingCartShall>
        </div>
        </div>
        
        <Footer />
        </>
    )
}

export default ShoppingCartAddressSelect

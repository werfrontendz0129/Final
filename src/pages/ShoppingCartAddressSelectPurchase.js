import React,{useState, useEffect} from 'react';
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartShall from '../component/ShoppingCart-Shall/ShoppingCartShall'
import CheckoutAddressSelectTableTitle from '../component/Checkout-AddressSelect-TableTitle/CheckoutAddressSelectTableTitle'
import CheckoutAddressSelectItemList from '../component/Checkout-AddressSelect-ItemList/CheckoutAddressSelectItemList'
import CheckoutBoxAddressPurchase from '../component/ShoppingCart_Purchase/Checkout-CheckoutBox-AddressSelect-Purchase/CheckoutBoxAddressPurchase'
import CheckoutModalAddAddress from '../component/Checkout-Modal-AddAddress/CheckoutModalAddAddress'
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

function ShoppingCartAddressSelect(props){

const[orderList, setOrderList] = useState([])
const[passdata, setPassdata] = useState(0)
const[isLoading, setIsLoading] = useState(1);

    useEffect(()=>{
        Axios.get('http://localhost:3001/orderList/')
        .then((response) => {
        setOrderList(response.data[0].order_address)
        setIsLoading(0)
        })
        .catch((error) => console.log(error))
        }, [])

        const resetOrder=()=>{
            Axios.get('http://localhost:3001/orderList/')
            .then((response) => {
            setOrderList(response.data[0].order_address)
            })
            .catch((error) => console.log(error))
            }
    return isLoading == 1 ? <h1>loading</h1> : (
        <>
        <div className="b-paddingLR">
            <div className="b-Checkout-AddressSelect-header">
                <div>
                    <Breadcrumb />
                    <div className="b-checkout-address-breadtitle">
                        <p className="mb-2">結帳</p>
                    </div>
                </div>
                <Shoppingprocessbar shopping address ></Shoppingprocessbar>
            </div>
            <div class="b-Checkout-AddressSelect-title">
                <p>選擇配送方式及地址</p>
                <CheckoutModalAddAddress />
            </div>
            <ShoppingCartShall>
                <aside className="col-lg-9 p-0">
                    <div className="card border-0">
                        <div className="table-responsive">
                            <Table className="table table-borderless">
                                <thead className="text-muted ">
                                    <CheckoutAddressSelectTableTitle />
                                </thead>  
                                <tbody>
                                {orderList.map((order,index)=>(
                                        <CheckoutAddressSelectItemList key={index} index={index} order={order} resetOrder={resetOrder} setPassdata ={setPassdata}></CheckoutAddressSelectItemList>

                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </aside>
                <aside className="b-Checkout-AddressSelect-checkout-outterbox">
                    <CheckoutBoxAddressPurchase orderList={orderList} passdata={passdata} />
                </aside>
            </ShoppingCartShall>
        </div>
        </>
    )
}

export default ShoppingCartAddressSelect

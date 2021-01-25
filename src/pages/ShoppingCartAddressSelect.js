import React,{useState, useEffect} from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../components/ShoppingCart-Process-Bar/shoppingprocessbar';
import ShoppingCartShall from '../components/ShoppingCart-Shall/ShoppingCartShall'
import CheckoutAddressSelectTableTitle from '../components/Checkout-AddressSelect-TableTitle/CheckoutAddressSelectTableTitle'
import CheckoutAddressSelectItemList from '../components/Checkout-AddressSelect-ItemList/CheckoutAddressSelectItemList'
import CheckoutBoxAddress from '../components/Checkout-CheckoutBox-AddressSelect/CheckoutBoxAddress'
import CheckoutModalAddAddress from '../components/Checkout-Modal-AddAddress/CheckoutModalAddAddress'
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

function ShoppingCartAddressSelect(){

const[orderList, setOrderList] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/orderList')
        .then((response) => {
        console.log("ppp",response.data[0].member_address)
        setOrderList(response.data[0].member_address)
        })
        .catch((error) => console.log(error))
        }, [])

        const resetOrder=()=>{
            Axios.get('http://localhost:3001/orderList')
            .then((response) => {
            console.log("ppp",response.data[0].member_address[0])
            setOrderList(response.data[0].member_address)
            })
            .catch((error) => console.log(error))
            }
    return (
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
                                {orderList.map((order)=>(
                                        <CheckoutAddressSelectItemList key={order.id} order={order} resetOrder={resetOrder}></CheckoutAddressSelectItemList>

                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </aside>
                <aside className="b-Checkout-AddressSelect-checkout-outterbox">
                    <CheckoutBoxAddress />
                </aside>
            </ShoppingCartShall>
        </div>
        </>
    )
}

export default ShoppingCartAddressSelect

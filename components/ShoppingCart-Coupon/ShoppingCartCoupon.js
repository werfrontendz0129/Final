import React from 'react';
import Form from 'react-bootstrap/Form'
import './ShoppingCartCoupon.scss'

function ShoppingCartCoupon(){
    return(
    <>
    <div className="mb-2">  
        <Form className="d-flex">
            <Form.Control
                required
                type="text"
                placeholder="輸入折扣碼"
                style={{ width: 150 }}
                /><button className="btn b-Shoppingcart-coupon-btn-apply" style={{ backgroundColor: '#D1CFCF', color: '#ffffff' }}>新增</button>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form>
    </div>
     </>
    )}

export default ShoppingCartCoupon

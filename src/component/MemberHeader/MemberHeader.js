import React from 'react'
import './MemberHeader.scss'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function MemberHeader() {
    return (
        <>
        <nav class="w-memberNav">
        <div className="w-navcontainer">
            <div className="d-flex">
                <img className="w-navlogo" src="images/member/Logo_o-04.png" alt="" />
            </div>
            <div className="d-flex col-md-5 justify-content-end align-items-center">
            <figure className="">
              <img src="" alt="" />
            </figure>
            <Nav style={{textAlign:'center'}}>
              <Nav.Link as={NavLink} to="/member" className="menu2">會員中心</Nav.Link>
              <div className="menu2">|</div>
              <Nav.Link as={NavLink} to="/shoppingcart" className="menu2">購物車</Nav.Link>
              <div className="menu2">|</div>
              <Nav.Link as={NavLink} to="/register" className="menu2">登入</Nav.Link>
            </Nav>
          </div>
        </div>
    </nav>
        </>
    )
}

export default MemberHeader
import React from 'react'
// import Logo from 'http://localhost:3000/images/Logo.png'
// import Avatar from 'http://localhost:3000/images/avatar.png'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import { NavLink } from 'react-router-dom'
import '../style/header.scss'

function Header(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="#E6E9DA"
        variant="dark"
        fixed="top"
        className="header row no-gutters"
      >
        <div className="d-flex col-md-1 align-items-center justify-content-center">
          <figure className="Logo">
            <img src="http://localhost:3000/images/Logo.png" alt="" />
          </figure>
        </div>
        <div className="d-flex col-md-1"></div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="menu1" as={NavLink} to="/" exact>
              植物租賃
            </Nav.Link>
            <Nav.Link className="menu1" as={NavLink} to="/member">
              植物選購
            </Nav.Link>
            <Nav.Link className="menu1" as={NavLink} to="/課程">
              教學課程
            </Nav.Link>
            <Nav.Link className="menu1" as={NavLink} to="/about">
              關於我們
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex col-md-5 justify-content-end align-items-center">
          <figure className="Avatar">
            <img src="http://localhost:3000/images/avatar.png" alt="" />
          </figure>
          <Nav>
            <Nav.Link as={NavLink} to="/member" className="menu2">
              會員中心
            </Nav.Link>
            <div className="menu2">|</div>
            <Nav.Link as={NavLink} to="/購物車-租賃" className="menu2">
              購物車
            </Nav.Link>
            <div className="menu2">|</div>
            <Nav.Link as={NavLink} to="/login" className="menu2">
              登入
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  )
}

export default Header

import React from 'react'
import Login from './Login'
import { devUrl } from '../../config/index'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="c-header container-fluid ">
        <div className="c-padd row">
          <div className="col-md-2 p-0 d-flex align-items-center">
            <Navbar.Brand>
              <figure>
                <img src={devUrl + '/images/index/Logo2.png'} alt="" />
              </figure>
            </Navbar.Brand>
          </div>
          <div className="col-md-4 p-0 row align-items-center m-0">
            <NavLink to="/member" className="c-margin30px h6">
              植物租賃
            </NavLink>
            <NavLink to="/hello" className="c-margin30px h6">
              植物選購
            </NavLink>
            <NavLink to="/course" className="c-margin30px h6">
              教學課程
            </NavLink>
            <NavLink to="/about0" className="c-margin30px h6">
              關於我們
            </NavLink>
          </div>
          {/* <div className="col-md-3 p-0"></div> */}
          <div className="col cwid p-0 d-flex align-items-center">
            <div className="c-cw row d-flex align-items-center">
              <figure>
                <img src={devUrl + '/images/index/avatar.png'} alt="" />
              </figure>
              <NavLink to="/Register" className="c-margin25px h6">
                註冊會員
              </NavLink>
              <p className="c-margin25px h6">|</p>
              <NavLink to="/hello" className="c-margin25px h6">
                購物車
              </NavLink>
              <p className="c-margin25px h6">|</p>
              <NavLink to="/Login" className="c-margin25px h6">
                登入
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

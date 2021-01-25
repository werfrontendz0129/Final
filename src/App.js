import React, {useState, useMemo } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-router-dom'
import { UserContext} from './component/Index/UserContext'
//Index
import Home from './pages/Home'
//Course
import CourseGuide from './pages/CourseGuide'
import CourseSearch from './pages/CourseSearch'
import CourseInfo from './pages/CourseInfo'
//Product
import RentProdIndex from './pages/RentProdIndex'
import RentProdList from './pages/RentProdList'
import RentProdDetail from './pages/RentProdDetail'
import PurchaseProdIndex from './pages/PurchaseProdIndex'
import PurchaseProdList from './pages/PurchaseProdList'
import PurchaseProdDetail from './pages/PurchaseProdDetail'
//Member
import Member from './pages/Member'
import MemberEditProfile from './pages/MemberEditProfile'
import Notifications from './pages/Notifications'
import MyCollections from './pages/MyCollections'
import RentalOrder from './pages/RentalOrder'
import PurchaseOrder from './pages/PurchaseOrder'
import Register from './pages/Register'
import Login from './pages/Login'
import Lesson from './pages/Lesson'
import LessonDetail from './pages/LessonDetail'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
//Order
import OrderManagementPurchase        from './pages/OrderManagementPurchase'
import OrderManagementPurchaseReturn  from './pages/OrderManagementPurchaseReturn'
import OrderManagementRental          from './pages/OrderManagementRental'
import OrderManagementRentalReturn    from './pages/OrderManagementRentalReturn'
import ShoppingCartAddressSelectRental      from './pages/ShoppingCartAddressSelectRental'
import ShoppingCartCompleteRental          from './pages/ShoppingCartCompleteRental'
import ShoppingCartPaymentSelectRental      from './pages/ShoppingCartPaymentSelectRental'
import ShoppingCartAddressSelectPurchase      from './pages/ShoppingCartAddressSelectPurchase'
import ShoppingCartCompletePurchase          from './pages/ShoppingCartCompletePurchase'
import ShoppingCartPaymentSelectPurchase      from './pages/ShoppingCartPaymentSelectPurchase'
import ShoppingCartPurchase           from './pages/ShoppingCartPurchase'
import ShoppingCartRental             from './pages/ShoppingCartRental' 
// import Test from './Test'

function App() {
  const [user , setUser] = useState(null)
  const value = useMemo(()=>({user, setUser}),[user,setUser])
  
  
  const [occasion,setOccasion]=useState('')
  return (
  <Router>
      <>
        <Switch>
        <UserContext.Provider value={value}>
        {/* Index */}
          <Route exact path="/" component={()=><Home />} />
        {/* Courses */}
          <Route exact path="/course" component={()=><CourseGuide />} />
          <Route exact path="/course/:id" component={()=><CourseInfo />} />
          <Route exact path="/courses/search" component={()=><CourseSearch Guide_type={'succlent'} />} />      
        {/* Products */}
          <Route exact path="/rental/list"  component={()=><RentProdList occasion={occasion} />} />
          <Route exact path="/rentalguide"  component={()=><RentProdIndex setOccasion={setOccasion} />} />
          <Route exact path="/rental/list/:id" component={()=><RentProdDetail />} />
          <Route exact path="/purchaseguide" component={()=><PurchaseProdIndex setOccasion={setOccasion}/>} />
          <Route exact path="/purchase/list" component={()=><PurchaseProdList occasion={occasion}/>} />
          <Route exact path="/purchase/list/:id" component={()=><PurchaseProdDetail />} />
        {/* Members */}
          <Route exact path="/member" component={()=><Member />} />
          <Route exact path="/memberedit" component={()=><MemberEditProfile />} />
          <Route exact path="/notifications" component={()=><Notifications />} />
          <Route exact path="/mycollections" component={()=><MyCollections />} />
          <Route exact path="/rentalorder" component={()=><RentalOrder />} />
          <Route exact path="/purchaseorder" component={()=><PurchaseOrder />} />
          <Route exact path="/lesson/lessondetail" component={()=><LessonDetail />} />
          <Route exact path="/lesson" component={()=><Lesson />} />
          <Route exact path="/register" component={()=><Register />} />
          <Route exact path="/forgotpassword" component={()=><ForgotPassword />} />
          <Route exact path="/resetpassword" component={()=><ResetPassword />} />
          <Route exact path="/login" component={()=> <Login />} />
        {/* Order */}
          {/* <Route exact path="/members/:name&:order_id/purchase_detail" component={()=>  <OrderManagementPurchase />} />
          <Route exact path="/members/:name&:order_id/purchase_return" component={()=>  <OrderManagementPurchaseReturn />} /> */}
          <Route exact path="/members/:name&:order_id/rentaldetail" component={()=>  <OrderManagementRental />} />
          <Route exact path="/members/:name&:order_id/rentalreturn" component={()=>   <OrderManagementRentalReturn />  } />
          <Route exact path="/main/shoppingcart-rental" component={()=>  <ShoppingCartRental />} />
          {/* <Route exact path="/main/shoppingcart-purchase" component={()=>  <ShoppingCartPurchase /> } /> */}
          <Route exact path="/checkout/selectaddress-rental" component={()=>  <ShoppingCartAddressSelectRental /> } />
          <Route exact path="/checkout/selectpayment-rental" component={()=>  <ShoppingCartPaymentSelectRental /> } />
          <Route exact path="/checkout/orderview-rental" component={()=>  <ShoppingCartCompleteRental  /> } />
          {/* <Route exact path="/checkout/selectaddress-purchase" component={()=>  <ShoppingCartAddressSelectPurchase /> } />      
          <Route exact path="/checkout/selectpayment-purchase" component={()=>  <ShoppingCartPaymentSelectPurchase />} />
          <Route exact path="/checkout/orderview-purchase" component={()=>  <ShoppingCartCompletePurchase  /> } /> */}
        </UserContext.Provider>
        </Switch>
      </>
  </Router>

  );
}

export default App;

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
import {UserContext} from './component/Index/UserContext'
import {Result} from './component/useContext/Result'
import {Todo} from './component/useContext/Todo'
import {UserItem} from './component/useContext/UserItem'
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
import OrderlistTablePurchase from './component/PurchaseOrderContent/PurchaseOrderContent'
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

import VScrollToTop from './component/VScrollToTop'
import {useTEST} from './component/useTEST'

function App() {


  const [user , setUser] = useState(null)
  const [toBuy , setToBuy] = useState(null)
  const [qu, setQu] = useState(null)
  const [date, setDate] = useState(null)

  const value = useMemo(()=>({user, setUser}),[user,setUser])
  const itemName = useMemo(()=>({toBuy, setToBuy}),[toBuy , setToBuy])
  const itemQ = useMemo(()=>({qu, setQu}),[qu, setQu])
  const itemDate = useMemo(()=>({date, setDate}),[date, setDate])
  const [values,setValues] = useState([])
  const memberDetail = useMemo(()=>({values,setValues}),[values,setValues])
  const [occasion,setOccasion]=useState('')
  const member_id = 1
  return (
  <Router>
      <>
      <VScrollToTop>
        <Switch>
        <Result.Provider value={itemName}>
        <UserItem.Provider value={itemQ}>
        <Todo.Provider value={itemDate}>
        <UserContext.Provider value={value}>
        <useTEST.Provider value={memberDetail}>
        {/* Index */}
          <Route exact path="/" component={()=><Home />} />
          <Route exact path="/login" component={()=> <Login />} /> 
          <Route exact path="/register" component={()=><Register />} /> 
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
          <Route exact path="/member/lesson/:id?/lessondetail/:course_id" component={()=><LessonDetail id={member_id} />} />

          <Route exact path="/member/:id?" component={()=><Member id={member_id}  />} />
          <Route exact path="/member/memberedit/:id?" component={()=><MemberEditProfile id={member_id} />} />
          <Route exact path="/member/notifications/:id?" component={()=><Notifications id={member_id} />} />
          <Route exact path="/member/mycollections/:id?" component={()=><MyCollections id={member_id} />} />
          <Route exact path="/member/rentalorder/:id?" component={()=><RentalOrder id={member_id} />} />
          <Route exact path="/member/purchaseorder/:id?" component={()=><PurchaseOrder id={member_id} />} />
          <Route exact path="/member/lesson/:id?" component={()=><Lesson id={member_id} />} />
          <Route exact path="/forgotpassword" component={()=><ForgotPassword />} />
          <Route exact path="/resetpassword" component={()=><ResetPassword />} />
          {/* <Route exact path="/login" component={()=> <OrderlistTablePurchase />} />  */}
        {/* Order */}
          {/* <Route exact path="/members/:name&:order_id/purchase_detail" component={()=>  <OrderManagementPurchase />} />
          <Route exact path="/members/:name&:order_id/purchase_return" component={()=>  <OrderManagementPurchaseReturn />} /> */}
          <Route exact path="/members/rentaldetail" component={()=> <OrderManagementRental />} />
          <Route exact path="/members/rentalreturn" component={()=> <OrderManagementRentalReturn />  } />
          <Route exact path="/main/shoppingcart-rental" component={()=> <ShoppingCartRental />} />  {/* 1 */}
          <Route exact path="/main/shoppingcart-purchase" component={()=>  <ShoppingCartPurchase /> } />
          <Route exact path="/checkout/selectaddress-rental" component={()=> <ShoppingCartAddressSelectRental /> } /> {/* 2 */}
          <Route exact path="/checkout/selectpayment-rental" component={()=> <ShoppingCartPaymentSelectRental /> } /> {/* 3 */}
          <Route exact path="/checkout/orderview-rental" component={()=> <ShoppingCartCompleteRental  /> } /> {/* 4 */}
          {/* <Route exact path="/checkout/selectaddress-purchase" component={()=>  <ShoppingCartAddressSelectPurchase /> } />      
          <Route exact path="/checkout/selectpayment-purchase" component={()=>  <ShoppingCartPaymentSelectPurchase />} />
          <Route exact path="/checkout/orderview-purchase" component={()=>  <ShoppingCartCompletePurchase  /> } /> */}
        </useTEST.Provider>
        </UserContext.Provider>
        </Todo.Provider>
        </UserItem.Provider>
        </Result.Provider>
        </Switch>
      </VScrollToTop>  
      </>
  </Router>

  );
}

export default App;

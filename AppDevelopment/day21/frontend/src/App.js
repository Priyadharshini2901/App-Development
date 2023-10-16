import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Dashboard from './components/Dashboard';
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';
import MyCart from './components/MyCart';
import Wishlist from './components/Wishlist';
import Settings from './components/Settings';

import Delivery from './components/Delivery'; 

import Personalized from './components/Personalized';
import { FAQ } from './components/Footer/FAQ';
import { Terms } from './components/Footer/Terms';
import { Privacy } from './components/Footer/Privacy';
import Feedback from './components/Footer/Feedback';
import { UserAuth } from './components/Auth/UserAuth';
import AddProduct from './components/AddProduct';
// import {AdminAuth} from './components/Auth/AdminAuth';


function App() {
  return (
      <BrowserRouter>
    <div >
      {/* <Dashboard/> */}
      <Routes> 
        <Route exact path="/" element={<><Header/><Home/></>} />
        <Route exact path="/products" element={<><Header/><Product/></>} />
        <Route exact path="/products/:id" element={<><Header/><ProductDetail/></>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element ={<Signup/>}/>
        <Route exact path="/mycart" element = {<MyCart/>}/>
        <Route exact path="/wishlist" element = {<Wishlist/>}/>
        <Route exact path="/settings" element = {<Settings/>}/>
        <Route exact path="/addproduct" element={<AddProduct/>}/>
        <Route exact path="/delivery" element={<Delivery/>}/>
        <Route exact path="/about" element={<><Header/><About/></>} />
        <Route exact path="/personalised-gifts" element={<Personalized/>}/>
        <Route exact path='/feedback' element={<Feedback/>} />
        <Route exact path='/privacy' element={<Privacy />} />
        <Route exact path='/terms' element={<Terms />} />
        <Route exact path='/faq' element={<FAQ />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path="/contact" element={<><Header/><Contact/></>} /> 
        <Route exact path="/dash" element={<Dashboard/>}/>
        <Route element ={<UserAuth/>}>
        <Route exact path="/cart" element={<><Header/><Cart/></>} />
        <Route exact path="/checkout" element={<><Header/><Checkout/></>} /> 

        </Route>

        {/* <Route element = {<AdminAuth/>}>
        <Route exact path="/dash" element = {<Dashboard/>}/>

        </Route> */}
       
       </Routes>
      {/* <Footer/>  */}
    </div>
      </BrowserRouter>
  );
}

export default App;












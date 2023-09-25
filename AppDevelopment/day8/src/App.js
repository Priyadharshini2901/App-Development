import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer'
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
import Query from './components/Query';
import Delivery from './components/Delivery'; 

import Personalized from './components/Personalized';
import { FAQ } from './components/Footer/FAQ';
import { Terms } from './components/Footer/Terms';
import { Privacy } from './components/Footer/Privacy';
import Feedback from './components/Footer/Feedback';


function App() {
  return (
      <BrowserRouter>
    <div >
      {/* <Dashboard/> */}
      <Routes> 
        <Route exact path="/" element={<><Header/><Home/></>} />
        <Route exact path="/products" element={<><Header/><Product/></>} />
        <Route exact path="/products/:id" element={<><Header/><ProductDetail/></>} />
        <Route exact path="/cart" element={<><Header/><Cart/></>} />
        <Route exact path="/checkout" element={<><Header/><Checkout/></>} /> 
        <Route exact path="/dash" element = {<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element ={<Signup/>}/>
        <Route exact path="/mycart" element = {<MyCart/>}/>
        <Route exact path="/wishlist" element = {<Wishlist/>}/>
        <Route exact path="/settings" element = {<Settings/>}/>
        <Route exact path="/query" element={<Query/>}/>
        <Route exact path="/delivery" element={<Delivery/>}/>
        <Route exact path="/about" element={<><Header/><About/></>} />
        <Route exact path="/personalised-gifts" element={<Personalized/>}/>
        <Route exact path='/feedback' element={<Feedback/>} />
        <Route exact path='/privacy' element={<Privacy />} />
        <Route exact path='/terms' element={<Terms />} />
        <Route exact path='/faq' element={<FAQ />} />
        <Route exact path='/contact' element={<Contact />} />
        {/* <Route exact path="/contact" element={<><Header/><Contact/></>} />  */}
       </Routes>
     <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;




// import React from 'react';
// import './App.css'; // Import App component CSS
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route

// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           {/* Define your routes here */}
//           <Route path="/" element={<MainContent />} />
//           <Route path="/navbar" element={<Navbar />} />
//           <Route path="/sidebar" element={<Sidebar />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;









import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'

function App() {
  return (
      <BrowserRouter>
    <div >
      <Routes> 
        <Route exact path="/" element={<><Header/><Home/></>} />
        <Route exact path="/products" element={<><Header/><Product/></>} />
        <Route exact path="/products/:id" element={<><Header/><ProductDetail/></>} />
        <Route exact path="/cart" element={<><Header/><Cart/></>} />
        {/* <Route exact path="/checkout" element={<><Header/><Checkout/></>} /> */}
        <Route exact path="/about" element={<><Header/><About/></>} />
        {/* <Route exact path="/contact" element={<><Header/><Contact/></>} />  */}
      </Routes>
      <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;





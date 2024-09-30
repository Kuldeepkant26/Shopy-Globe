import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ProductDetail from './Components/ProductDetail'
import Nav from './Components/Nav'
import NotFound from './Components/NotFound'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Search from './Components/Search'
function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/pdetail' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/pdetail' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/show/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App

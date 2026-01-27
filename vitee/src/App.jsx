import React from 'react'
import Profile from "./components/Profile"
import State from "./hooks/State"
import Parent from './components/Parent'
import Form from './hooks/Form'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/service" element = {<Service/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/product" element = {<Products/>}/>
      <Route path = "/product/:id" element = {<ProductDetails/>}/>
    </Routes> 
    </>
  )
}

export default App
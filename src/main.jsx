import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './components/Auth.jsx'
import Signup from './components/auth/Signup.jsx'
import Login from './components/auth/Login.jsx'
import Products from './components/Products.jsx'
import Home from './components/Home.jsx'
import Orders from './components/Orders.jsx'
import Reviews from './components/Reviews.jsx'
import Transaction from './components/Transaction.jsx'

import SingleProduct from './components/SingleProduct.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Cart from './components/Cart.jsx'
import Profile from './components/Profile.jsx'

const queryclient =new  QueryClient()

createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryclient}>
   <BrowserRouter>
   <Routes>
    <Route  path='/'  element={<App/>}>
          <Route path='/auth' element={<Auth/>}>
             <Route index element={<Signup/>} />
             <Route path='login' element={<Login/>} />
          </Route>
          <Route path='/home'  element={<Home/>}>
              <Route index element={<Products/>}></Route>
              <Route path='products' element={<Products />}></Route>
              <Route path={`product/:id`}  element={<SingleProduct/>}></Route>
              <Route path='orders' element={<Orders/>}></Route>
              <Route path='transaction' element={<Transaction/>}></Route>
              <Route path='reviews' element={<Reviews/>}></Route>
              <Route path='cart' element={<Cart/>}></Route>
              <Route path='profile' element={<Profile/>}></Route>
          </Route>
    </Route>
   </Routes>
   </BrowserRouter>
   </QueryClientProvider>
  ,
)

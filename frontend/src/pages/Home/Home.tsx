// import React from 'react'

import { useEffect, useState } from "react"
import CartProduct from "../../components/Cart-Comp/CartProduct"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ProductCard from "../../components/Product-card/productCard"
import ProductDetail from "../../components/Product-Detail/ProductDetail"
import { useGetProductsQuery } from "../../store/Api/ProductApi"

const Home = () => {
 const [app,setApp] = useState<any>([])
 const{ data } =  useGetProductsQuery()

 console.log(app)
  
  useEffect(()=>{
   setApp(data)
  },[data])
  
  
  return (
    <div>
      <Header></Header>
      <ProductCard ></ProductCard>
      <CartProduct></CartProduct>
      <ProductDetail></ProductDetail>
      <Footer></Footer>
    </div>
  )
}

export default Home

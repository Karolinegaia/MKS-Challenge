import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { CardProduct, CardProductProps } from "../Components/Product/Product";
import api from "../Service/api";
import { useState, useEffect, Key } from "react";
import axios from "axios";

const paramans = 'products?page=1&rows=50&sortBy=id&orderBy=ASC' 

export function Ecommerce() {  
    const [productList, setProduct] = useState<CardProductProps[]>([]);
    const getProduct = async () => {
      try {
        const response = await api.get(paramans)
        const data = response.data.products
        
        setProduct(data)       
        
      } catch (error) {
        console.log(error);        
      }      
    }
    
    useEffect(() => {
      getProduct();
        
    }, []);
  
    {productList.length === 0 ? <p>Carregando</p> : (
      productList.map((product) => {
        
     return (
      <>
      <Header/>           
      <CardProduct
      key={product.id}
      id={product.id} 
      name={product.name} 
      brand={product.brand} 
      description={product.description} 
      photo={product.photo} 
      price={product.price}      />
      <Footer/>  
      </>
     )
      
      
    }))}
  }
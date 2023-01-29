import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { CardProduct, CardProductProps } from "../Components/Product/Product";
import api from "../Service/api";
import { useState, useEffect } from "react";


type EcommerceProps = {
        id: number;
        name: string;
        brand: string;
        description: string;
        photo: string;
        price: number;    
};

export function Ecommerce(Props: EcommerceProps) { 
    
    const [product, setProductList] = useState<EcommerceProps[]>([]);
   
    async function getProductData() {
     const response = await api.get(`products`);
     setProductList(response.data);
    }   
    useEffect(() => {
     getProductData();
    }, []);     


    return(
        <>
        <Header />
        <CardProduct id={product.id} name={"APPLE"} brand={"APPLE"} description={"Compre"} photo={""} price={1000}/>
        <Footer /></>
    )
}



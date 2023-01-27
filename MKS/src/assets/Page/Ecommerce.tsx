import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Product } from "../Components/Product/Product";

export function Ecommerce() {
    return (
        <>
        <Header/>
        <Product id={0} name={""} brand={""} description={""} image={""} price={1000}/>
        <Footer/>        
        </>        
    );
}
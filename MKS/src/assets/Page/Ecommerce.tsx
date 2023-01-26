import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Product } from "../Components/Product/Product";

export function Ecommerce() {
    return (
        <>
        <Header/>
        <Product idProduct={props.id} name={props.name} description={props.description} image={""} price={0}} image={props.img} price={props.price}/>
        <Footer/>        
        </>        
    );
}
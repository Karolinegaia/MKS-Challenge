import { FiShoppingBag } from "react-icons/fi";
import { CardProduct } from "./Product.styled";

export type ProductProps = {
    id: number;
    name: string;
    brand: string;
    description: string;
    image: string;
    price: number;

}


export function Product(props: ProductProps) {
    return (
        <CardProduct>
            <div className="Card">
                <div className="container">
                    <img className="image" src={props.image} alt="" />
                    <strong>{props.name}</strong>
                    <p className="description">{props.description}</p>
                    <div className="price-div">
                        <p className="price">{props.price}</p>
                    </div>
                    <button className="buy">
                        <FiShoppingBag className="bag"/>
                        <p>Comprar</p>
                    </button>
                </div>
            </div>
        </CardProduct>
    );
}
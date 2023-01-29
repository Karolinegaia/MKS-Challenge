import { FiShoppingBag } from "react-icons/fi";
import { ProductStyle } from "./Product.styled";

export type CardProductProps = 
    {              
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
}

export function CardProduct(props: CardProductProps) {
    return (
        <ProductStyle>
            <div className="Card">
                <div className="container">
                    <img className="image" src={props.photo} alt="" />
                    <strong>{props.name}</strong>
                    <p className="description">{props.description}</p>
                    <div className="price-div">
                        <strong className="price">{props.price}</strong>
                    </div>
                    <button className="buy" type="submit">
                        <FiShoppingBag className="bag"/>
                        <p>Comprar</p>
                    </button>
                </div>
            </div>
        </ProductStyle>
    );
}
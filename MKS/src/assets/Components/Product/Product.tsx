import { CardProduct } from "./Product.styled";

export type ProductProps = {
    idProduct: number;
    name: string;
    description: string;
    image: string;
    price: number;

}


export function Product(props: ProductProps) {
    return (
        <CardProduct>
            <div className="container">
                <img className="image" src="" alt="" />
                <strong>Apple</strong>
                <p className="description">Aplle Watch</p>
                <div className="price-div">
                    <p className="price">R$ 100,00</p>
                </div>
                <button>
                    <p>Comprar</p>
                </button>
            </div>
        </CardProduct>
    );
}
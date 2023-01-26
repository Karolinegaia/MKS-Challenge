import { Hedear } from "./Hedear.Styled"
import { BsCart4 } from "react-icons/bs"



export function Header() {
    return (
        <Hedear>
            <div className="container">
                <div className="text">
                    <h1 className="h1">MKS</h1>
                    <p className="p">Sistemas</p>
                </div>                
                <button className="cart">
                    <BsCart4 className="icon" />
                </button>
            </div>
        </Hedear>
    )
}
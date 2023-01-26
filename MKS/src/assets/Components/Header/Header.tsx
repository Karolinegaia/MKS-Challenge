import { BsCart4 } from "react-icons/bs"
import { HeaderStyle } from "./Hedear.Styled"


export function Header() {
    return (        
        <HeaderStyle>
            <div className="container">
                <div className="text">
                    <h1 className="h1">MKS</h1>
                    <p className="p">Sistemas</p>
                </div>                
                <button className="cart">
                    <BsCart4 className="icon" />
                </button>
            </div>
        </HeaderStyle>        
    );
}
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { StyledFooter } from "./Footer.styled"



export function Footer() {
    return (
        <footer>            
                <div className='text'>
                    <p>MKS Sistemas</p>
                    < AiOutlineCopyrightCircle />
                    <p>Todos os Direitos Reservados</p>
                </div>            
        </footer>
    );
}
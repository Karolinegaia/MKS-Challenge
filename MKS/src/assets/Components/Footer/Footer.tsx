import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FooterStyle } from './Footer.styled';


export function Footer() {
    return (
        <FooterStyle>            
                <div className='text'>
                    <p className='p'>MKS Sistemas</p>
                    < AiOutlineCopyrightCircle />
                    <p>Todos os Direitos Reservados</p>
                </div>            
        </FooterStyle>
    );
}
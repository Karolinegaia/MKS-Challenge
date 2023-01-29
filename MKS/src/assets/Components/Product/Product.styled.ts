import styled from "styled-components";

export const ProductStyle = styled.section`
.Card{
    background-color: #E5E5E5;
    width: 100%;
    height:100%;
    flex-direction: column;
}
.container {
    background-color: #FFFFFF;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;    
    padding-top: 13rem;
    padding-bottom: 12.5rem;
}
.price-div{
    width: 4rem;
    height: 1.5rem;
    background-color:#373737;
    border-radius: 5px;
    justify-content: center;
    text-align: center;       
}
.price{        
    font-size: 15px;
    color: #FFFFFF;    
    
}
.buy{
    display: flex;
    align-items: center;
    justify-content: center;    
    background: #0F52BA;
    width: 13rem;
    height: 2rem;
    border: none;
    border-radius: 0px 0px 8px 8px;    
    font-size: 16px;
    color: #FFFFFF;   
}
.bag {
    margin-right: 5px;

}
`

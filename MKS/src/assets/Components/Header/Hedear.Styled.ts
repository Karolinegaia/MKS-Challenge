import styled from "styled-components";

export const HeaderStyle = styled.section`
    .container {
        background-color: #0F52BA;        
        height: 7rem;
        width: 100%;
        padding-left: 2rem;        
        color: white;
        align-items: center;
        justify-content: space-between;
        display: flex;
        
    }

    .text{
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
    }

    .h1{
        padding-right: 4px;
        padding-top:10px;
        font-size: 40px;
    }

    .p{
        padding-top: 20px;
        font-size: 22px;        
    }

    .cart {
        width: 90px;
        height: 45px;
        margin-right:3rem ;
        border-radius: 8px;
        border: none;
        background-color: white;
        
        .icon {
            width: 40px;
            height: 20px;
        }
    }

    
`
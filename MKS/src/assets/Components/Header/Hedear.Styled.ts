import styled from "styled-components";

export const HeaderStyle = styled.section`
    .container {
        background-color: #004baf;        
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
        font-size: 35px;        
    }

    .cart {
        width: 80px;
        height: 40px;
        margin-right:3rem ;
        border-radius: 5px;
        border-color: #FFFF;
        background-color: white;
        
        .icon {
            width: 40px;
            height: 20px;
        }
    }

    
`
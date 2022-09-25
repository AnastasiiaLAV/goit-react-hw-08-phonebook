import styled from "styled-components";

export const MenuUserWrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const MenuUserName = styled.span`
    text-align: center;
font-family: 'Rubik Dirt', cursive;
font-size: 28px;
font-weight: 400;
text-decoration: none;
background: none;
border: none;
color: #fff;
padding: 10px;
border-radius: 5px;
    
`

export const MenuUserBtn = styled.button`
margin: 10px;
display: inline-block;
justify-content: center;
text-align: center;
font-family: 'Rubik Dirt', cursive;
font-size: 26px;
font-weight: 400;
text-decoration: none;
background: none;
border: none;
color: #fff;
padding: 10px 20px;
border-radius: 5px;
    &:hover{
        text-shadow: 4px 1px 5px #f7063be6;
        color: #fff;
        transition: 0.3s ease-out;
        transform: scale(1.09);
    }
    &.active{
        background-color: #eb1052;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
    }
`
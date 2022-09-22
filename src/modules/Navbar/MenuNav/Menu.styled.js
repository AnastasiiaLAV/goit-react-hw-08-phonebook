import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuUl = styled.ul`
margin: 10px;
display: flex;
justify-content: center;
text-align: center;
font-family: 'Rubik Dirt', cursive;
font-size: 26px;
font-weight: 400;
`

export const MenuLi = styled.li`
display: inline-block;
margin: 10px 20px;
`
export const MenuNavLink = styled(NavLink)`
text-decoration: none;
color: #fff;
padding: 10px 20px;
border-radius: 5px;
    &:hover{
        text-shadow: 4px 1px 5px #f7063be6;
        color: #fff;
        font-size: 28px;
    }
    &.active{
        background-color: #eb1052;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
    }
`

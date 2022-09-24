import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
`

export const Planet = styled.img`
    margin: 10px;
    &:hover{
        transition: 0.3s ease-out;
        transform: scale(1.09);
    }

`
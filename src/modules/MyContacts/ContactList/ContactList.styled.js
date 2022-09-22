import styled from "styled-components"

export const Button = styled.button`
    width: 80px;
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: rgb(19 7 69);
    cursor: pointer;
    display: inline-block;
    /* font-family: 'Yanone Kaffeesatz', sans-serif; */
    padding: 8px 20px;
    margin: 10px 15px;
    text-align: center;
    text-decoration: inherit;
    transition: all 250ms;
    border: 0;
    font-size: 11px;
    font-weight: 500;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
        &:hover {
            box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
            transform: scale(1.05) rotate(-1deg);
}
`
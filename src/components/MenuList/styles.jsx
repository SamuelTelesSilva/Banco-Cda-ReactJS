import styled from "styled-components";

export const Container = styled.div`
    grid-area: AM;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--lemon);
    max-height: 100vh;

`;

export const Button = styled.button`
    width: 235px;
    height: 48px;
    border-radius: 16px;

    margin-bottom: 1px;
    background-color: transparent;

    transition: background-color 0.2s;

    cursor: pointer;

    transition: border-radius 0.2s, background-color 0.2s;
    &:hover {
        border-radius: 80px;
        background-color: var(--orange); 
    }
  

`;
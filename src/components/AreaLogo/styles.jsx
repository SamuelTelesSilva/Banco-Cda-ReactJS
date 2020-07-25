import styled from "styled-components";

export const Button = styled.div`
    grid-area: AL;
    display: flex;
    align-items: center;
    background-color: var(--orange);
    flex-direction: column;

    > img {
        cursor: pointer;
        width: 60px;
        height: 60px;
    }
`;

export const Title = styled.span`
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    color: var(--white);
    
`;
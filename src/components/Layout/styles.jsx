import styled from "styled-components";
//AT-area Header
//AM - area menu
//AL - area logo
//AF- area form

export const Grid = styled.div`
    display: grid;
    
    grid-template-columns: 240px auto;
    grid-template-rows: 60px auto 52px;

    grid-template-areas:
        'AT AL'
        'AM AF'
        'AM AF';
    
    height:100vh;
`;
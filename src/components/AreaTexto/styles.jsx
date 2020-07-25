import styled from "styled-components";
import {Hashtag} from 'styled-icons/heroicons-outline';

export const Container = styled.div`
    grid-area: AT;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--orange);   
`;

export const Title = styled.span`
    font-size: 50px;
    font-weight: bold;
    
    color: var(--white);
    
`;

export const HashtagIcon = styled(Hashtag)`
    width: 40px;
    height: 40px;
    margin-top: -26px;
    color: var(--white);
`;
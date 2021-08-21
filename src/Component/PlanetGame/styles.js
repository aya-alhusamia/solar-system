import styled from "styled-components";
import {Card} from 'react-bootstrap';
export const StyledCard = styled(Card)`
    border: none;
    width: 10rem;
    background-color: black;
    &.villian {
        width: 5rem;
        background-color: black;
    }
    Img:hover{
        cursor: pointer;
    }
`;

import React from 'react'
import { Search } from '../../SVG/Search'
import styled from 'styled-components';



const InputContainer = styled.div`
background: white;
padding: 0.5em 0px 0.5em 30px;;
width: 70%;
height: 100%;
margin-left: 1rem;
display: flex;
justify-items: center;
align-items: center;
flex-direction: row;


&>svg {
transform: scale(1.5);

}
& input {
padding:0 0.5em;
border: none;
height : 80px;
width: 100%;
color: gray;
font-size: 30px;

}


& input:focus {
    outline-width: 0;
    outline-color: transparent;
}
`;

export const SearchBar = () => {
    return (
        <InputContainer>
            <Search />
            <input maxLength={70} placeholder="Search..." type="text" />
        </InputContainer>
    )
}

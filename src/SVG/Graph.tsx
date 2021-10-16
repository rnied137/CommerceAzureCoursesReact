import styled from 'styled-components';


type ActiveItemProps = {
    active?: Boolean;
}

const SVG = styled.svg<ActiveItemProps>`
fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};
&>path {
    fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};
}

path:hover {
    fill: ${props => props.active ? "#713BDB" : "#969CBA"};
stroke: ${props => props.active ? "#713BDB" : "#969CBA"};
}

`;

export const Graph = ({ active = false }) => {
    return (
        <SVG active={active} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12V21H6V12H2Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 7V21H22V7H18Z" fill=" #969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 3V21H14V3H10Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </SVG>

    )
}

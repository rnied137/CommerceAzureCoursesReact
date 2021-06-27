import styled from 'styled-components';
import { Logo } from './MicroComponents/Logo';

const Bar = styled.div`
background-color:  #373B53;
width: 100px;
height: 100vh;
`;

export const Sidebar = () => {
    return (
        <Bar>
            <Logo />
        </Bar>
    )
}

import styled from 'styled-components';
import { Logo } from './MicroComponents/Logo';
import { MenuItem } from './MicroComponents/MenuItem';

const Bar = styled.div`
background-color:  #373B53;
width: 100px;
height: 100vh;
`;

const MenuDivider = styled.div`
height: calc(100vh - 100px);
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const Sidebar = () => {
    return (
        <Bar>
            <Logo />
            <MenuDivider>
                <div>
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
                <div>
                    <MenuItem />
                </div>
            </MenuDivider>
        </Bar>
    );
}

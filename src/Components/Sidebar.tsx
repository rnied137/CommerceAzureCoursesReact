import styled from 'styled-components';
import { Logo } from './MicroComponents/Logo';
import { MenuItem } from './MicroComponents/MenuItem';


type Props = {
    isActiveArray: boolean[];
    setcurrent: () => {}
}

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

export const Sidebar = ({ isActiveArray, setCurrent }: Props) => {
    return (
        <Bar>
            <Logo />
            <MenuDivider>
                <div>
                    <MenuItem href="ala" active={isActiveArray[0]} />
                    <MenuItem href="kot" active={isActiveArray[1]} />
                    <MenuItem href="dupa" active={isActiveArray[2]} />
                    <MenuItem />
                </div>
                <div>
                    <MenuItem active={isActiveArray[3]} />
                </div>
            </MenuDivider>
        </Bar>
    );
}

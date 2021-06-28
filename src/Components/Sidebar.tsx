import styled from 'styled-components';
import { Logo } from './MicroComponents/Logo';
import { MenuItem } from './MicroComponents/MenuItem';
import { Folder } from './../SVG/Folder';
import { Options } from '../SVG/Options';
import { Messages } from './../SVG/Messages';
import { Graph } from './../SVG/Graph';


export type Props = {
    isActiveArray: boolean[];
    setActive: (i: number, state: boolean) => void;
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

export const Sidebar = ({ isActiveArray, setActive }: Props) => {
    return (
        <Bar>
            <Logo />
            <MenuDivider>
                <div>
                    <MenuItem href="/ala" active={isActiveArray[0]} index={0} setActive={() => setActive(0, isActiveArray[0])}>
                        <Folder active={isActiveArray[0]} />
                    </MenuItem>
                    <MenuItem href="/kot" active={isActiveArray[1]} index={1} setActive={() => setActive(1, isActiveArray[1])}>
                        <Graph active={isActiveArray[1]} />
                    </MenuItem>
                    <MenuItem href="/dupa" active={isActiveArray[2]} index={2} setActive={() => setActive(2, isActiveArray[2])}>
                        <Messages active={isActiveArray[2]} />
                    </MenuItem>
                </div>
                <div>
                    <MenuItem href="/dupa2" index={3} active={isActiveArray[3]} setActive={() => setActive(3, isActiveArray[3])} >
                        <Options active={isActiveArray[3]} />
                    </MenuItem>
                </div>
            </MenuDivider>
        </Bar>
    );
}

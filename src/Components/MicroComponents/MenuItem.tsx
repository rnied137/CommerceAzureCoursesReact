import styled from 'styled-components';
import { Link } from 'react-router-dom';


type Props = {
    icon?: string;
    href?: string;
    active?: boolean;
    setActive: (i: number, state: boolean) => void;
    index?: number;
    children?: React.ReactNode;
}

type ActiveItemProps = {
    active?: boolean;
}

const Item = styled(Link) <ActiveItemProps>`
padding: 2em;
display: flex;
align-items: center;
justify-content: center;
background: ${props => props.active ? "#FFFFFF" : ""};
box-shadow:  ${props => props.active ? "0px 4px 10px rgba(0, 0, 0, 0.05)" : ""};
border-radius:  ${props => props.active ? "5px" : ""};


&:active,
&:hover {
background: #FFFFFF;
box-shadow:  0px 4px 10px rgba(0, 0, 0, 0.05);
border-radius:  5px;
}

`;





export const MenuItem = ({ index = 3, icon = "", href = "http://www.interia.pl", active = false, setActive, children }: Props) => {
    return (
        <Item onClick={() => setActive(index, active)} to={`${href}`} active={active}>
            {children}
        </Item>
    )
}

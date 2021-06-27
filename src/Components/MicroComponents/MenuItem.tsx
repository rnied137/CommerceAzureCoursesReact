import styled from 'styled-components';

const Item = styled.div`
width: 100%;
padding: 2em;

&>a {
    width: 100%;
    display: block;
}
`;

export const MenuItem = ({ icon = "", link = "", }) => {
    return (
        <Item>
            <a href="http://www.interia.pl">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15.2222C21 15.6937 20.7893 16.1459 20.4142 16.4793C20.0391 16.8127 19.5304 17 19 17H3C2.46957 17 1.96086 16.8127 1.58579 16.4793C1.21071 16.1459 1 15.6937 1 15.2222V2.77778C1 2.30628 1.21071 1.8541 1.58579 1.5207C1.96086 1.1873 2.46957 1 3 1H8L10 3.66667H19C19.5304 3.66667 20.0391 3.85397 20.4142 4.18737C20.7893 4.52076 21 4.97295 21 5.44444V15.2222Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </Item>
    )
}

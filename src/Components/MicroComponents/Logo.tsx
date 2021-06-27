import styled from 'styled-components';

const LogoArea = styled.div`
    width: 100px;
    height: 100px;
    background-color: #6F52ED;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

&>h2 {
    color: #fff;
    font-size: 4rem;
    z-index:2;
}

&> svg {
    position:absolute;
    left: 20px;
    top:25px;
    z-index:1;
}

`;


export const Logo = () => {
    return (
        <LogoArea>
            <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 -2L1 14.5L0 16L3.5 18.5L0.5 22L-1 31.5L0 40.5H6.5L6 37L5.5 32L6 27L7.5 23L10 19L14.5 15L20 12.5L23.5 11.5L26.5 11L29.5 11.5L32 11L32.5 8L37.5 3L13.5 -2Z" fill="#8E75F9" />
            </svg>
            <h2>R</h2>
        </LogoArea>
    )
}

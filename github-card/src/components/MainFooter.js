import React from 'react'
import styled from 'styled-components';

const NewFooter = styled.footer`
    font-family: 'Barriecito', cursive;
    font-size : 1rem;
    background: #b56969f7;
    padding: 1.5rem;
    margin-top: 20%;
`;

const NewAnchor = styled.a`
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
    &:hover{
        color: #e6cf8b;
    }  
`;

const MainFooter = () => {
    return (
        <NewFooter>
            <span><p> Created by Michelle Scott 2019</p>
                <NewAnchor target="blank" href="https://www.freepik.com/free-photos-vectors/background">Background vector created by macrovector - www.freepik.com</NewAnchor>
            </span>
        </NewFooter>
    )

}

export default MainFooter;
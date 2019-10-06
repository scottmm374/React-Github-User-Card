import React from 'react'
import styled from 'styled-components';

const NewFooter = styled.footer`
font-family: 'Barriecito', cursive;
font-size : 1rem;
background: #b56969f7;
padding: 1.5rem;
margin-top: 20%;
`;

const MainFooter = () => {
    return (
        <NewFooter>
            <span><p> Created by Michelle Scott</p><a target="blank" href="https://www.freepik.com/free-photos-vectors/background">Background vector created by macrovector - www.freepik.com</a></span>
        </NewFooter>
    )
   
}

export default MainFooter;
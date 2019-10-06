
import React from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components';

const NewHead = styled(Header)`
font-family: 'Barriecito', cursive;
font-size : 5rem;
background: #b56969f7;
padding: 2rem;
box-shadow: 0 4px 15px black;
`

const MainHeader = () => {
    return (
        <>
        <NewHead>My Github!</NewHead>
        </>
    )
   
}

export default MainHeader;
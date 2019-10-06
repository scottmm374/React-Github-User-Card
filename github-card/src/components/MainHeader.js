
import React from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components';

const NewHead = styled(Header)`
font-family: 'Barriecito', cursive;
font-size : 5rem;
background: #b56969;
padding: 2rem;
`

const MainHeader = () => {
    return (
        <>
        <NewHead>My Github!</NewHead>
        </>
    )
   
}

export default MainHeader;
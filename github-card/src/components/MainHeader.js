
import React from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const NewHead = styled(Header)`
    background: #b56969f7;
    margin-top: -56px;
    padding-top: 16px;
    box-shadow: 0 4px 15px black;
`;

const NewTitle = styled.h1`
    font-family: 'Barriecito', cursive;
    font-size : 5rem;
    margin-bottom: 10px;
`;

const NewNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 2rem;
    color: black;
    &:hover{
        color: #e6cf8b;
    }  
`;

const NewLinkDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const MainHeader = () => {
    return (
        <>
            <NewHead>

                <NewTitle>My Github!</NewTitle>
                <NewLinkDiv>
                    <NewNavLink to="/">Home</NewNavLink>
                    <NewNavLink to="/followers">Followers</NewNavLink>
                </NewLinkDiv>
            </NewHead>
        </>
    )

}

export default MainHeader;
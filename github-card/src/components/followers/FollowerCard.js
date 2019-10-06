import React from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'


const NewCard = styled(Card)`
    background-color: #e6cf8bf5;
    margin-left: 20%;
    margin-top: 15%;
    width: 60%;
    border-radius: 10px;          
    box-shadow: 0 4px 15px black;
`;

const NewImg = styled.img`
    width: 25%;
    margin-top: 8%;
    border-radius: 70px;
`;

const HeadOne = styled.h1`
    font-size: 3.5rem;
    font-family: 'Barriecito', cursive;
`;

const HeadFour = styled.h4`
    font-size: 2.5rem;
    margin-top: -45px;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    margin-top: -16px;
`;

function FollowerCard(props) {
    console.log("followercard", props)
    return (
        // <></>
        <NewCard key={props.key}>
            <Card.Content>
            <NewImg src={props.profilePic} />
                    <HeadOne>{props.name}</HeadOne>
            </Card.Content>
        </NewCard>
    )
}

export default FollowerCard



import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
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
    width: 50%;
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


function UserCard(props) {
    console.log(props)
    return (

        <NewCard key={props.data.id}>
            <NewImg src={props.data.avatar_url} />
            <Card.Content>
                <Card.Header>
                    <HeadOne>{props.data.name}</HeadOne>
                    <HeadFour>{props.data.login}</HeadFour>
                </Card.Header>
                <Card.Description className='main-card'>
                    <Paragraph>Location: {props.data.location}</Paragraph>
                    <Paragraph>Bio: {props.data.bio}</Paragraph>
                   <Link to='/followers'><Paragraph>Followers:  {props.data.followers}</Paragraph></Link>
                    <Paragraph>Joned: {props.data.created_at}</Paragraph>
                </Card.Description>
            </Card.Content>
        </NewCard>


    )
}

export default UserCard;
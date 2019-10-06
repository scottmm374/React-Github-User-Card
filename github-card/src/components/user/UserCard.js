import React from 'react'
import {Card} from 'semantic-ui-react'
import styled from 'styled-components'

const NewCard = styled(Card)`
    background: #e6cf8b;
    margin-left: 366px;
    margin-top: 90px;
    width: 60%;
`;

const NewImg = styled.img`
    width: 50%;
    padding-top: 2rem;
    border-radius: 20px;
`;


function UserCard(props) {
    console.log(props)
    return (
        <>
        <NewCard key={props.data.id}>
            <NewImg src={props.data.avatar_url} />
            <Card.Content>
                <Card.Header>
                <h1>{props.data.name}</h1>
                <h4>{props.data.login}</h4>
                </Card.Header>
                <Card.Description>
                    <p>Location: {props.data.location}</p>
                    <p>Bio: {props.data.bio}</p>
                    <p>Github: {props.data.url}</p>
                    <p>Followers:  {props.data.followers}</p>
                    <p>Joned: {props.data.created_at}</p>
                </Card.Description>
            </Card.Content>

            
        </NewCard>
        </>
       
    )
}

export default UserCard;



// key={user.id}
// name={user.name}
// avatar={user.avatar_url}
// location={user.location}
// profileName={user.login}
// bio={user.bio}
// repos={user.public_repos}
// followers={user.followers}
// created={user.created_at}
// github={user.url}
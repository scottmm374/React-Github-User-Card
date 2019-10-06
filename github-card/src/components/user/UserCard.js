import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import styled from 'styled-components'

const NewCard = styled(Card)`
    background: #e6cf8b;
    margin-left: 366px;
    margin-top: 90px;
    width: 600px;
`;

const NewImg = styled.img`
    width: 50%;
    padding-top: 1rem;
`;


function UserCard(props) {
    console.log(props)
    return (
        <>
        <NewCard>
            <NewImg src={props.data.avatar_url} />

            <h1>{props.data.name}</h1>
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
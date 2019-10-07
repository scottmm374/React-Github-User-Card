import React, { Component } from 'react';
import axios from 'axios'
import FollowerCard from './FollowerCard'


class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followerData: []
        };
    }

    // Removed first follower because he had no info, tried Splice just remove first one, but didnt work.
    componentDidMount() {
        axios
            .get('https://api.github.com/users/scottmm374/followers')
            .then(res => this.setState({ followerData: res.data.slice(1, 13) }))
            .catch(err => console.log(err))
    };


    render() {
        console.log("FollowerData", this.state)
        return (
            <div>
                {this.state.followerData.map(user => (
                    <FollowerCard
                        key={user.id}
                        name={user.login}
                        profilePic={user.avatar_url}
                        followers={user.followers_url}
                        repos={user.repos_url}
                    />
                ))}
            </div>
        );
    }
}

export default Followers;
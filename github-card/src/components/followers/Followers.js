import React, {Component} from 'react';
import axios from 'axios'
import FollowerCard from './FollowerCard'





class Followers extends Component {
    constructor(props) {
      super(props);
      this.state = {
        followerData: [] 
      };
    }
  
    componentDidMount() {
      axios 
        .get('https://api.github.com/users/scottmm374/followers')
        .then(res => this.setState({ followerData: res.data}))
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
                    
                    
                    />
           ))}
       </div>
      );
  
    }
   
  }
  
  export default Followers;
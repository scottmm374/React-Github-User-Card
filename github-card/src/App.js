import React, {Component} from 'react';
import axios from 'axios'
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'
import UserCard from './components/user/UserCard'

import './App.css';


class App extends Component {
  constuctor() {
    this.state = {
      userData: [] 
    };
  }

  componentDidMount() {
    axios 
      .get('https://api.github.com/users/scottmm374')
      .then(res => this.setState({ userData: res.data}))
      .catch(err => console.log(err))
  };


  render() {
    console.log("userData", this.state)
    return (
      <div className="App">
        <MainHeader />
        <div>
          {userData.map(user => (
             <UserCard 
             key={user.id}
             name={user.name}
             profileName={user.login}
             avatar={user.avatar_url}
             github={user.url}
             location={user.location}
             bio={user.bio}
             followers={user.followers}
             created={user.created_at}
             repos={user.public_repos}

             
             />
          ))}
         
        </div>
        <section>
        <footer>
          <MainFooter />
        </footer>
        </section>
        
      </div>
    );

  }
 
}

export default App;

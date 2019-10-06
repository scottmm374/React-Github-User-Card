import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import axios from 'axios'
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'
import UserCard from './components/user/UserCard'
import Followers from './components/followers/Followers'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
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
        <div>
        <MainHeader />
        </div>
        <Route exact path="/" render={props => (
          <UserCard data={this.state.userData}/>)}/>
        <Route path="/followers" component={Followers} />

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




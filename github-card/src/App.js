import React, {Component} from 'react';
import axios from 'axios'
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'
import UserCard from './components/user/UserCard'

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
        <UserCard data={this.state.userData} />
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




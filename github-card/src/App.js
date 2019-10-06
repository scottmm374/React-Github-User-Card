import React from 'react';
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'

import './App.css';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <div>Main Content</div>
      <section>
      <footer>
        <MainFooter />
      </footer>
      </section>
      
    </div>
  );
}

export default App;

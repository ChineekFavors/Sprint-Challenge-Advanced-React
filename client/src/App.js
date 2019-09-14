import React from 'react';

import Display from './components/Display.js';


import './App.css';

class App extends React.Component {



  render(){
    return (
      <div className="App">
       <h1>Women's World Cup players ranking </h1>
       <Display />
        
      </div>
    );
  }
}

export default App;

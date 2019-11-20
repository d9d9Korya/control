import React, { Component } from 'react';
import { render } from 'react-dom'
import Form from './View';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

function App (){
    return(
      <Router>
        <div className="App">
          <Route path="/" exact exact component={Login}/>
          <Route path="/second" exact component={View}/>
       </div>
       </Router>
    )
  }
  export default App;

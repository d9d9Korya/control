import React, { Component } from 'react';
import { render } from 'react-dom'
import Form from './View';
import { BrowserRouter } from 'react-router-dom'


class App extends React.Component{
    render() {
        return(
            <Router>
            <div className="App">
                <Route path="/" exact Component={'View'}></Route>  
                <Route path="/" exact exact Component={'App'}></Route>             
                </div>
        </Router>
        );
    }
}



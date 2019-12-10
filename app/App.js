import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../app/components/login'
import Register from './components/register'

function App() {
    return (

        <div>
           
    <Router>
                <Route exact path="/" component={Register} />



            </Router>

        </div>

        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        // <Login/>
    );
}

export default App;

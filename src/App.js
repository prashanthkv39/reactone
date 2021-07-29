import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import './App.css';


function App () {
  return (
    <>
     <Router>
     <Header/>
     <Body />
       <Switch>
       <Route path='/' exact component={} />
       </Switch>
     </Router>
    </>
  );
}

export default App;

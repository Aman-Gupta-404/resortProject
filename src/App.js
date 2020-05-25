import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRooms from './pages/SingleRoom';
import Error from './pages/Error';
import Navbarr from './components/Navbar';

import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbarr />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRooms}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

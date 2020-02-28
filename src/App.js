import React from 'react';
import Header from './components/header/Header.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import Shop from './pages/shop/Shop.jsx';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/shop'>
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

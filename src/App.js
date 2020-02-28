import React from 'react';
import Homepage from './pages/homepage/Homepage.jsx';
import Shop from './pages/shop/Shop.jsx';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
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

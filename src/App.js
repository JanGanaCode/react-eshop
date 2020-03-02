import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import Shop from './pages/shop/Shop.jsx';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.jsx';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/sign-in'>
            <SignInAndSignUp />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

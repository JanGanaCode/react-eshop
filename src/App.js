import React, { Component, lazy, Suspense } from 'react';
import Header from './components/header/Header.jsx';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase';
import './App.css';

const Homepage = lazy(() => import('./pages/homepage/Homepage.jsx'));
const Shop = lazy(() => import('./pages/shop/Shop.jsx'));
const SignInAndSignUp = lazy(() => import('./pages/SignInAndSignUp/SignInAndSignUp.jsx'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({ 
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          })
        })
      }
      this.setState({ currentUser: userAuth });
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
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route exact path='/shop'>
              <Shop />
            </Route>
            <Route exact path='/sign-in'>
              <SignInAndSignUp />
            </Route>
          </Suspense>
        </Switch>
      </div>
    );
  }
}

export default App;

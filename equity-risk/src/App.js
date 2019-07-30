import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignUpForm from './components/pages/SignUpForm';
import SignInForm from './components/pages/SignInForm';

import './App.css';

import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:7777/api/users')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='App'>
        <div className='App__Aside'>
          <h2>Equity Risk API</h2>
          <p>Welcome to the Equity Risk Ratings API</p>
          
        </div>
        <div className='App__Form'>
          <div className='PageSwitcher'>
            <NavLink
              to='/sign-in'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>Sign In
            </NavLink>

            <NavLink
              exact to='/'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'>Sign Up
            </NavLink>
          </div>

          <div className='FormTitle'>
            <NavLink
              to='/sign-in'
              activeClassName='FormTitle__Link--Active'
              className='FormTitle__Link'>Sign In
            </NavLink>

            or

            <NavLink
              exact to='/'
              activeClassName='FormTitle__Link--Active'
              className='FormTitle__Link'>Sign Up
            </NavLink>
            
          </div>
          <Route 
            exact path='/' 
            render={(props) => <SignUpForm {...props} users={this.state.users} />}>
          </Route>

          <Route path='/sign-in' component={SignInForm}></Route>
        </div>
      </div>
    );
  }
}

export default App;

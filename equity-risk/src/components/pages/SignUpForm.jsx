import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addUser = event => {
    event.preventDefault();
    axios
      .post('http://localhost:7777/api/users/register', this.state.newUser)
      .then(res => {
        this.setState({
          users: res.data,
        });
        this.props.history.push('/users')
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleChange(event) {
    let target = event.target;
    let value = event.target.value
    let name = target.name;

    this.setState({
      ...this.state,
      newUser: { ...this.state.newUser, [name]: value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('The form was submitted with the following:');
    console.log(this.state);
  }

  render() {
    return (
      <div className='FormWrapper'>
        <form
          onSubmit={this.addUser}
          className='FormFields'>
          <div className="FormField">
            <label
              className='FormField__Label'
              htmlFor='firstName'>
              First Name
              </label>
            <input
              type='text'
              id='name'
              className='FormField__Input'
              placeholder='Enter your first name'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label
              className='FormField__Label'
              htmlFor='lastName'>
              Last Name
              </label>
            <input
              type='text'
              id='name'
              className='FormField__Input'
              placeholder='Enter your last name'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label
              className='FormField__Label'
              htmlFor='email'>
              E-mail Address
            </label>
            <input
              type='email'
              id='email'
              className='FormField__Input'
              placeholder='Enter your email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label
              className='FormField__Label'
              htmlFor='password'
            >
              Password
              </label>
            <input
              type='password'
              id='password'
              className='FormField__Input'
              placeholder='Enter your password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className='FormField'>
            <button
              className='FormField__Button 1a'>
              Sign Up
              </button>
            <Link to='/sign-in'
              className='FormField__Link'
            >
              Already have an account?
              </Link>
          </div>
        </form>
      </div>
    );
  };
};

export default SignUpForm;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('The form was submitted with the following data: ');
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormWrapper">
        <form
          onSubmit={this.handleSubmit}
          className='FormFields' >
          <div className='FormField'>
            <label
              className='FormField__Label'
              htmlFor='email'>E-mail Address</label>

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

          <div className='FormField'>
            <label
              className='FormField__Label'
              htmlFor='password'
            >Password</label>

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
              className='FormField__Button 1a'
            >
              Sign In
            </button>

            <Link
              to='/'
              className='FormField__Link'
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
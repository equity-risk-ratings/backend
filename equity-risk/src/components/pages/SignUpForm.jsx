import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    console.log('The form was submitted with the following:');
    console.log(this.state);
  }

  render() {
    return (
      <div className='FormWrapper'>
        <form
          onSubmit={this.handleSubmit}
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

            <div className="FormField">
              <label className='FormField__CheckboxLabel'>
                <input
                  className='FormField__Checkbox'
                  type='checkbox'
                  name='hasAgreed'
                  value={this.state.hasAgreed}
                  onChange={this.handleChange}
                />
                I agree all statements in
                <a
                  href='/terms-conditions'
                  className='FormField__TermsLink'
                >
                  terms of service
                </a>
              </label>
            </div>

            <div className='FormField'>
              <button className='FormField__Button'>
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
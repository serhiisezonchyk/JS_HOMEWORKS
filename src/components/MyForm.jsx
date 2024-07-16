import React, { Component } from 'react';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: props.formData,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: fieldValue,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.formData);
  };

  render() {
    const { email, password, address, city, country, acceptRules } =
      this.state.formData;
    return (
      <div
        className='card card-body w-fit my-0 mx-auto'
        style={{ width: '350px' }}
      >
        <form name='myForm' onSubmit={this.handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email' className='col-form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='form-control'
              id='email'
              placeholder='Email'
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password' className='col-form-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='form-control'
              id='password'
              placeholder='Password'
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='address' className='col-form-label'>
              Address
            </label>
            <textarea
              type='text'
              className='form-control'
              name='address'
              id='address'
              placeholder='1234 Main St'
              value={address}
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='city' className='col-form-label'>
              City
            </label>
            <input
              type='text'
              className='form-control'
              name='city'
              id='city'
              value={city}
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='country' className='col-form-label'>
              Country
            </label>
            <select
              id='country'
              name='country'
              className='form-control'
              value={country}
              onChange={this.handleChange}
            >
              <option>Choose</option>
              <option value='argentina'>Argentina</option>
              <option value='ukraine'>Ukraine</option>
              <option value='china'>China</option>
            </select>
          </div>
          <div className='mb-3'>
            <div className='form-check'>
              <label className='form-check-label' htmlFor='rules'>
                <input
                  id='rules'
                  type='checkbox'
                  name='acceptRules'
                  className='form-check-input'
                  checked={acceptRules}
                  onChange={this.handleChange}
                />
                Accept Rules
              </label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

MyForm.defaultProps = {
  formData: {
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    acceptRules: false,
  },
  onSubmit: () => {},
};

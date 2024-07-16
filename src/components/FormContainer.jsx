import React, { Component } from 'react';
import MyForm from './MyForm';
import FormTable from './FormTable';

const DEFAULT_FORM_DATA = {
  email: '',
  password: '',
  address: '',
  city: '',
  country: '',
  acceptRules: false,
};

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: 'editing',
      formData: { ...DEFAULT_FORM_DATA },
    };
  }

  handleFormSubmit = (data) => {
    this.setState({ formState: 'submitted', formData: data });
  };

  handleBack = () => {
    this.setState({ formState: 'editing' });
  };

  handleConfirm = (data) => {
    console.log(data);
    this.setState({ formState: 'editing', formData: { ...DEFAULT_FORM_DATA } });
  };
  render() {
    const { formState, formData } = this.state;

    return (
      <div className='container'>
        {formState === 'editing' ? (
          <MyForm formData={formData} onSubmit={this.handleFormSubmit} />
        ) : (
          <FormTable
            formData={formData}
            onBack={this.handleBack}
            onConfirm={this.handleConfirm}
          />
        )}
      </div>
    );
  }
}

export default FormContainer;

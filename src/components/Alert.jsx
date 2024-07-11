import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  render() {
    const { text, type } = this.props;
    return (
      text && (
        <div className={`alert alert-${type}`} role='alert'>
          {text}
        </div>
      )
    );
  }
}

Alert.defaultProps = {
  text: '',
  type: 'primary',
};

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};
export default Alert;

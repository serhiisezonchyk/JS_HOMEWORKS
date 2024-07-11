import React, { Component } from 'react';

class Progress extends Component {
  render() {
    const { percentage } = this.props;
    return (
      <div
        className='progress'
        role='progressbar'
        aria-label='Basic example'
        aria-valuenow={percentage}
        aria-valuemin='0'
        aria-valuemax='100'
      >
        <div className='progress-bar' style={{ width: `${percentage}%` }}></div>
      </div>
    );
  }
}
Progress.defaultProps = {
  percentage: 0,
};

export default Progress;

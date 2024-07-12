import classNames from 'classnames';
import React, { Component } from 'react';
class BtnGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
    };
  }
  handleButtonClick = (button) => {
    this.setState({ activeButton: button });
  };
  render() {
    const { activeButton } = this.state;

    return (
      <div className='btn-group' role='group'>
        <button
          type='button'
          className={classNames('btn', 'btn-secondary', 'left', {
            active: activeButton === 'left',
          })}
          onClick={() => this.handleButtonClick('left')}
        >
          Left
        </button>
        <button
          type='button'
          className={classNames('btn', 'btn-secondary', 'right', {
            active: activeButton === 'right',
          })}
          onClick={() => this.handleButtonClick('right')}
        >
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;

import classNames from 'classnames';
import React, { Component } from 'react';

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened,
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({ opened: !this.state.opened });
  };
  render() {
    const { text, btnText } = this.props;
    const { opened } = this.state;

    return (
      <div>
        <p>
          <a
            className='btn btn-primary'
            data-bs-toggle='collapse'
            href='#'
            role='button'
            aria-expanded={opened}
            onClick={this.handleClick}
          >
            {btnText}
          </a>
        </p>
        {text && (
          <div className={classNames('collapse', { show: opened })}>
            <div className='card card-body'>{text}</div>
          </div>
        )}
      </div>
    );
  }
}
Collapse.defaultProps = {
  text: null,
  opened: true,
  btnText: 'Default',
};
export default Collapse;

import React, { Component } from 'react';

class ListGroup extends Component {
  render() {
    const { children } = this.props;
    return (
      <ul className='list-group'>
        {React.Children.map(children, (child, index) => (
          <li key={index} className='list-group-item'>
            {child}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  childeren: React.No,
};
export default ListGroup;

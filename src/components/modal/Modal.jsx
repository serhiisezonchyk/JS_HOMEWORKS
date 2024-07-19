import React, { Component } from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import classNames from 'classnames';

class Modal extends Component {
  static Header = ModalHeader;
  static Body = ModalBody;
  static Footer = ModalFooter;
  render() {
    const { children, isOpen } = this.props;
    return (
      <div>
        <div
          className={classNames('modal', { 'fade show': isOpen })}
          style={{ display: isOpen ? 'block' : 'none' }}
          role='dialog'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>{children}</div>
          </div>
        </div>
      </div>
    );
  }
}
Modal.defaultProps = {
  children: [],
  isOpen: false,
};
export default Modal;

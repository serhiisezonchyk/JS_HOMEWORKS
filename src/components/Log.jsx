import React, { Component } from 'react';
import LogList from './LogList.jsx';

export default class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logList: [],
      currIndex: 0,
    };
  }
  handleDelete = (id) => {
    this.setState((prevState) => ({
      logList: prevState.logList.filter((log) => log.id !== id),
    }));
  };
  handlePlusLog = () => {
    this.setState((prevState) => {
      const newValue =
        prevState.logList.length > 0 ? prevState.logList[0].value + 1 : 1;
      return {
        logList: [
          { id: prevState.currIndex, value: newValue },
          ...prevState.logList,
        ],
        currIndex: prevState.currIndex + 1,
      };
    });
  };
  handleMinusLog = () => {
    this.setState((prevState) => {
      const newValue =
        prevState.logList.length > 0 ? prevState.logList[0].value - 1 : -1;
      return {
        logList: [
          { id: prevState.currIndex, value: newValue },
          ...prevState.logList,
        ],
        currIndex: prevState.currIndex + 1,
      };
    });
  };
  render() {
    const { logList } = this.state;
    return (
      <div>
        <div className='btn-group font-monospace' role='group'>
          <button
            type='button'
            className='btn btn-outline-success'
            onClick={this.handlePlusLog}
          >
            +
          </button>
          <button
            type='button'
            className='btn btn-outline-danger'
            onClick={this.handleMinusLog}
          >
            -
          </button>
        </div>
        <LogList>
          {logList.map((el) => (
            <LogList.Item
              key={el.id}
              item={el}
              handleDelete={this.handleDelete}
            />
          ))}
        </LogList>
      </div>
    );
  }
}

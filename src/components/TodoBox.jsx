import React, { Component } from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: '',
    };
  }
  handleRemove = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((el) => el.id !== id),
    }));
  };
  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };
  createTask = (newTask) => {
    this.setState((prevState) => ({ tasks: [newTask, ...prevState.tasks] }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: uuidv4(), value: this.state.value };
    this.createTask(newTask);
    this.setState({ value: '' });
  };
  render() {
    const { tasks, value } = this.state;
    return (
      <div>
        <div className='mb-3'>
          <form className='d-flex' onSubmit={this.handleSubmit}>
            <div className='me-3'>
              <input
                type='text'
                value={value}
                onChange={this.handleInputChange}
                required=''
                className='form-control'
                placeholder='I am going...'
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              add
            </button>
          </form>
        </div>
        {tasks.map((el) => (
          <Item task={el} key={el.id} onRemove={this.handleRemove} />
        ))}
      </div>
    );
  }
}

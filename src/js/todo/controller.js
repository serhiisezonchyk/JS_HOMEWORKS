import Model from './model.js';
import View from './view.js';

const Controller = {
  _formSelector: null,
  _todosContainerSelector: null,
  _form: null,
  _todosContainer: null,
  _clearButtonSelector: null,
  _clearButton: null,

  init({ form, todosContainer, clearButton }) {
    this.formSelector = form;
    this.todosContainerSelector = todosContainer;
    this.clearButtonSelector = clearButton;
    this.formHandler = this.formHandler.bind(this);
    this.loadedHandler = this.loadedHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.clearAllHandler = this.clearAllHandler.bind(this);
    this.setEvents();
  },

  setEvents() {
    this.form.addEventListener('submit', this.formHandler);
    document.addEventListener('DOMContentLoaded', this.loadedHandler);
    this.todosContainer.addEventListener('click', this.removeHandler);
    this.clearButton.addEventListener('click', this.clearAllHandler);
  },

  clearAllHandler(event) {
    event.preventDefault();
    const isSuccess = Model.removeAllData();
    if (isSuccess) {
      View.removeAllItems();
    } else {
      alert('Cannot delete todo items');
    }
  },
  formHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    let data = Array.from(event.target.querySelectorAll('input, textarea, select')).reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});

    try {
      data = Model.setData(data);
      View.renderItem(data);
      View.resetForm();
    } catch (error) {
      alert('Cannot save data - DB is full!');
    }
  },

  loadedHandler() {
    const data = Model.getData();
    data.forEach((item) => {
      View.renderItem(item);
    });
  },

  removeHandler(event) {
    event.stopPropagation();
    const { target } = event;

    const btn = target.closest('[data-btn="delete"]');
    if (!btn) return;

    const todoItemId = Number(btn.closest('[data-todo-id]').getAttribute('data-todo-id'));
    const isRemoved = Model.removeData(todoItemId);

    if (isRemoved) {
      View.removeItem(todoItemId);
    } else {
      alert('Cannot delete todo item');
    }
  },

  validateSelector(selector) {
    if (typeof selector !== 'string') throw new Error('selector should be a string');
    if (selector.trim() === '') throw new Error('selector should not be empty');

    const element = document.querySelector(selector);

    if (element === null) throw new Error('selector not found in DOM');
  },
  set formSelector(selector) {
    this.validateSelector(selector);
    this._formSelector = selector;
    this._form = document.querySelector(selector);
  },
  set todosContainerSelector(selector) {
    this.validateSelector(selector);
    this._todosContainerSelector = selector;
    this._todosContainer = document.querySelector(selector);
  },
  get formSelector() {
    return this._formSelector;
  },
  get todosContainerSelector() {
    return this._todosContainerSelector;
  },
  get clearButtonSelector() {
    return this._clearButtonSelector;
  },
  set clearButtonSelector(selector) {
    this.validateSelector(selector);
    this._clearButtonSelector = selector;
    this._clearButton = document.querySelector(selector);
  },
  get form() {
    return this._form;
  },
  get clearButton() {
    return this._clearButton;
  },
  get todosContainer() {
    return this._todosContainer;
  },
};

export default Controller;

'use strict';

import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

const selectors = {
  form: '[data-todo-form]',
  todosContainer: '.todo__body-list',
  clearButton: '[data-clear-btn]',
};

View.init(selectors);
Model.init();
Controller.init(selectors);

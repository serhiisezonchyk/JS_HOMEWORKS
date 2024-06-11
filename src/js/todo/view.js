const View = {
  _formSelector: null,
  _todosContainerSelector: null,
  _clearButtonSelector: null,
  _form: null,
  _todosContainer: null,
  _clearButton: null,

  removeItem(id) {
    this.todosContainer.querySelector(`[data-todo-id="${id}"]`).remove();
  },
  removeAllItems() {
    this.todosContainer.innerHTML = '';
  },
  renderItem(data) {
    const layout = this.createTemplate(data);
    this.todosContainer.prepend(layout);
  },
  resetForm() {
    this.form.reset();
  },
  createTemplate(data) {
    const item = document.createElement('div');
    item.className = 'todo__card';
    item.setAttribute('data-todo-id', data.id);
    item.innerHTML = `<div class="todo__card-text">
                        <h2>#${data.id} ${data.title}</h2>
                        <p>${data.description}</p>
                    </div>
                    <div class="todo__card-actions">
                        <button type="button" class="btn btn-danger todo__card-actions-btn" data-btn="delete" >
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>`;
    return item;
  },
  init({ form, todosContainer, clearButton }) {
    this.formSelector = form;
    this.todosContainerSelector = todosContainer;
    this.clearButtonSelector = clearButton;
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
  set clearButtonSelector(selector) {
    this.validateSelector(selector);
    this._clearButtonSelector = selector;
    this._clearButton = document.querySelector(selector);
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

export default View;

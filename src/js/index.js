(function () {
  const TODO_KEY = 'todos';
  const form = document.querySelector('[data-todo-form]');
  const todosList = document.querySelector('.todo__body .todo__body-list');
  const clearTodosBtn = document.querySelector('[data-clear-btn]');
  let currentIndex = 1;
  const getTodos = () => JSON.parse(localStorage.getItem(TODO_KEY)) ?? [];

  const createTodoTemplate = (data) => {
    const item = document.createElement('div');
    item.className = 'todo__card';
    item.setAttribute('data-todo-id', data.id);
    item.innerHTML = `<div class="todo__card-text">
                        <h2>#${data.id} ${data.title}</h2>
                        <p>${data.description}</p>
                    </div>
                    <div class="todo__card-actions">
                        <button type="button" class="btn btn-danger todo__card-actions-btn" data-remove-btn>
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>`;
    return item;
  };
  const loadData = () => {
    const data = getTodos();
    if (!data.length) return;
    currentIndex = data.at(-1).id + 1;

    data.forEach((el) => {
      const item = createTodoTemplate(el);
      todosList.prepend(item);
    });
  };
  const clearTodos = (e) => {
    localStorage.removeItem(TODO_KEY);
    todosList.innerHTML = '';
  };
  const appendId = (data) => {
    if (!currentIndex) throw new Error('Something went wrong');
    const clonedData = structuredClone(data);
    clonedData.id = currentIndex;
    currentIndex++;
    return clonedData;
  };
  const saveTodoToStorage = (data) => {
    if (data.title.trim() === '' || data.description.trim() === '')
      throw new Error('Title and description are required');
    const todos = getTodos();
    todos.push(data);
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    return todos.at(-1);
  };
  const addTodo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const todo = {};
    e.target.querySelectorAll('input, textarea').forEach((el) => {
      todo[el.name] = el.value;
    });
    try {
      const todoWithId = appendId(todo);
      const addedTodo = saveTodoToStorage(todoWithId);
      const addedTodoLayout = createTodoTemplate(addedTodo);
      todosList.prepend(addedTodoLayout);
    } catch (error) {
      alert(error.message);
    } finally {
      form.reset();
    }
  };

  const deleteTodo = (e) => {
    e.stopPropagation();
    if (!e.target.closest('[data-remove-btn]')) return;
    const currentItem = e.target.closest('[data-todo-id]');
    const id = +currentItem.getAttribute('data-todo-id');

    const todos = getTodos();
    const newTodos = todos.filter((el) => el.id !== id);

    localStorage.setItem(TODO_KEY, JSON.stringify(newTodos));
    currentItem.remove();
  };

  document.addEventListener('DOMContentLoaded', loadData);
  form.addEventListener('submit', addTodo);
  todosList.addEventListener('click', deleteTodo);
  clearTodosBtn.addEventListener('click', clearTodos);
})();

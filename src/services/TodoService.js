class TodoService {
  storageKey = null;
  todos = null;
  constructor(storageKey = 'todos') {
    this.storageKey = storageKey;
    this.todos = this.loadTodos();
  }

  loadTodos() {
    const todosJson = localStorage.getItem(this.storageKey);
    return todosJson ? JSON.parse(todosJson) : [];
  }

  saveTodos() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.saveTodos();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
  }
  getTodoById(id) {
    return this.todos.find((todo) => todo.id === id);
  }
  updateTodo(id, updatedTodo) {
    
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    this.saveTodos();
  }
}

export default TodoService;

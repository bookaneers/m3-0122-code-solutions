// import dependencies
import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

// create Class App
export default class App extends React.Component {
  // create constructor
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    // passing props values to methods: addTodo and toggleCompleted
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  // method to read all item in the database
  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos })); // { todos: todos }
  }

  // method to add new item
  addTodo(newTodo) {
    // create an new object to hold the new item info
    const req = {
      // define method
      method: 'POST',
      // inform the server the type of date we are sendind: json
      headers: { 'Content-Type': 'application/json' },
      // turn the item into a JSON string
      body: JSON.stringify(newTodo)
    };
      // pass req configuration to the fetch method
    fetch('/api/todos', req)
      .then(res => res.json())
    // server reply with the newest item
      .then(todo => {
        // concat the old array with the new object
        const allTodos = this.state.todos.concat(todo); // [...this.state.todos, todo]
        // set all items, including the new one, to the screen
        this.setState({ todos: allTodos });
        // IMPORTANT: never updated State directly. Must use a temp object/array.
      });
  }

  toggleCompleted(todoId) {
    // to find the item with this id - kind of map
    const oldTodo = this.state.todos.find(todo => {
      // as soon it finds - return true
      return todo.todoId === todoId;
    });
    // create new object to be send to database
    const req = {
      // define method
      method: 'PATCH',
      // inform the server the type of date we are sendind: json
      headers: { 'Content-Type': 'application/json' },
      // update the new idCompleted to the oposite
      body: JSON.stringify({ isCompleted: !oldTodo.isCompleted })
    };
    // pass req configuration to the fetch method with the requested Id
    fetch(`/api/todos/${todoId}`, req)
      .then(res => res.json())
      // update todo object in the database
      .then(updated => {
        // find item with the right id and update the isCompleted value
        const allTodos = this.state.todos.map(original => {
          return original.todoId === updated.todoId
            ? updated
            : original;
        });
        // update setState
        this.setState({ todos: allTodos });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

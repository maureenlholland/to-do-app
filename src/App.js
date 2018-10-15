// External imports
import React, { Component } from 'react';

// Styles
import './App.css';

// Stateless Components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import List from './components/List.js';
import AddItem from './components/AddItem.js';

// Add text when there are no to-dos
// Hover all of list item
// Disable SAVE button unless text is available
// Add Edit button/icon on ToDo item

class App extends Component {
  constructor() {
    super()
    this.state = {
      'todo' : '',
      'todos' : []
    };
  }

  clearInput = () => {
    this.setState({ todo: '' });
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  addTodo = () => {
    const newTodos = Array.from(this.state.todos);
    newTodos.push(this.state.todo);
    this.setState({ todos: newTodos });
    this.clearInput();
  }

  removeTodo = (index) => {
    const removeTodo = Array.from(this.state.todos);
    removeTodo.splice(index,1);
    this.setState({ todos: removeTodo })
  }


  render() {
    return (
      <div className="App">
        <div className="notepad">
          <Header />
          { this.state.todos.length === 0 ? 'Currently nothing to do!' : ''}
          <List 
            todos={ this.state.todos }
            removeTodo = { this.removeTodo }
            handleChange = { this.handleChange }
          />
        </div>
        <AddItem 
            todo={ this.state.todo }
            handleChange = { this.handleChange }
            addTodo = { this.addTodo }
        />
        <Footer />
      </div>
    );
  }
}

export default App;

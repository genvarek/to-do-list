import React, { Component } from 'react';
import './App.css';
import { Header } from './Header'
import { TodoInput } from './Input'
import { TodoItem } from './TodoItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Wake up"},
        {id: 1, text: "Have breakfast"}
      ],
      nextId: 2
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    console.log("Todo added", todoText);
  }
  removeTodo(id) {
    console.log("Removing", id);
  }
  render() {
    return (
      <div className="App">
       <div className="Wrapper">TO DO
       <img src="Pink_Panther.gif" alt="" />
       <Header />
       <TodoInput todoText="" addTodo={this.addTodo} />
       <ul>
         {
           this.state.todos.map((todo) => {
             return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
           })
         }
        </ul>
       </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Todos from "./component/Todos";
import Header from "./component/layout/Header";
import AddTodo from "./component/AddTodo";

class App extends Component {
  // constructor(props) {
    // super(props);
    state = { 
      todos:[
        {
          id:  Math.ceil(Math.random()*999999999999999),
          title: 'Take out the trash',
          completed: false,
        }, 
        {
          id:  Math.ceil(Math.random()*999999999999999),
          title: 'Dinner with wife',
          completed: false,
        }, 
        {
          id:  Math.ceil(Math.random()*999999999999999),
          title: 'Meeting with boss',
          completed: false,
        }
      ]
    }

    // Drilling metods to children, toggle complete
    markComplete = (id) =>{
      this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })})
  }

  // Delete Todo
  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo=> todo.id !== id)]});
  }

  // add todo
  addTodo = (title) =>{
    const newTodo = {
      id: Math.ceil(Math.random()*999999999999999),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos, newTodo]})
  }

    render() { 
      //  console.log(this.state.todos);
    return ( 
      <div className="App">
        <div className="container">

          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete= {this.markComplete} delTodo= {this.delTodo} />
        </div>
      </div>
     );
    }
  }

  
export default App;


import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodoItem from './components/AddTodoItem';

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Download Zoom",
        isCompleted: false
      },
      {
        id: 2,
        title: "Eat Fried Chicken",
        isCompleted: true
      },
      {
        id: 3,
        title: "Play Games",
        isCompleted: false
      },
      {
        id: 4,
        title: "Go for Shopping",
        isCompleted: true
      },
      {
        id: 5,
        title: "Watch Movie",
        isCompleted: false
      }
    ]
  };
  toggleComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(elem => {
        if (elem.id === id) {
          elem.isCompleted = !elem.isCompleted
        }
        return elem
      })
    })
  }
  addTodoItem = (newTask, cb) => {
    newTask.id = this.state.tasks.length + 1;
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
    cb();
  }

  render() {
    const { addTodoItem, toggleComplete } = this;
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <h6>App</h6>
        <AddTodoItem addTodoItem={addTodoItem} />
        <Todos tasks={tasks} toggleComplete={toggleComplete} />
      </React.Fragment >
    );
  }
}
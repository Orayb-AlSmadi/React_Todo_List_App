import React, { Component } from 'react';
import Todos from './components/Todos';

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
        isCompleted: false
      },
      {
        id: 5,
        title: "Watch Movie",
        isCompleted: false
      }
    ]
  };

  changeDone = (value, i) => {

    // this.state.tasks.map(ele =>
    //   {if (ele.id === i)
    //  this.setState({ isCompleted: value,})
    //  console.log(this)
    //   }
    //   )
    //   console.log(this.state)

    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === i) task.isCompleted = value;
        return task;
      })
    })
  }

  deleteItem = (i) => {
    debugger
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === i) this.state.tasks.splice(i, 1)
        return task
      })
    })

  }


  render() {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <h6>App</h6>
        <Todos tasks={tasks} funchk={this.changeDone} funDelete={this.deleteItem}/>
      </React.Fragment >
    );
  }
}
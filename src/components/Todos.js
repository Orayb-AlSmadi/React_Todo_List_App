import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class Todos extends Component {
  render() {
    const { tasks, fun } = this.props;
    return (
      <React.Fragment>
        <h6>Todos</h6>

        {tasks.map((elem, i) => <TodoItem Key={i+1} task={elem} fun={fun} />)}

      </React.Fragment>
    );
  }
}

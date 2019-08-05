import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class Todos extends Component {
  render() {
    const { tasks, funchk, key, funDelete } = this.props;
    return (
      <React.Fragment>
        <h6>Todos</h6>
             
        {tasks.map((elem, i) => <TodoItem key={i} id={elem.id} task={elem} funchk={funchk}  funDelete={funDelete}/>
       )}

      </React.Fragment>
    );
  }
}

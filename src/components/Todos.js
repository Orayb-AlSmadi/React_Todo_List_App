import React, { Component } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

export default class Todos extends Component {
state =  {
  title: ""
  }


addTask = e => 
{
  let value = e.target.value
  this.setState({title : value})
}

onClickButton = () => {
  this.props.funAdd(this.state.title)
}

  render() {
    const { tasks, funchk, key, funDelete } = this.props;
    return (
      <React.Fragment>
        <h6>Todos</h6>
       
        <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={this.addTask} aria-label="Amount (to the nearest dollar)"/>
        <div className="input-group-append">
        <button className="btn btn-info" onClick={this.onClickButton}>Add New Task</button>
       </div>
        </div>    
        {tasks.map((elem, i) => <TodoItem key={i} id={elem.id} task={elem} funchk={funchk}  funDelete={funDelete}/>
       )}

      </React.Fragment>
    );
  }
}

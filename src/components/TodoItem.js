import React, { Component } from 'react';

export default class TodoItem extends Component {

  toggleComplete = (e) => {
    // console.log(e.target.checked)
    // console.log(this.props.fun)
    // console.log(this.props.id)
    this.props.funchk(e.target.checked, this.props.id)
  }

  handledelete = (e) => {
    this.props.funDelete(this.props.id)
  }

  render() {
    const { title, isCompleted, key } = this.props.task;
    const style = { textDecoration: 'none' }
    return (
      <React.Fragment>

        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>

          <input type="checkbox" value={isCompleted.value} onChange={this.toggleComplete} />
          {title}

        </p>
        <button onClick={this.handledelete} > Delete </button>
      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}
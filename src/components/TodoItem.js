import React, { Component } from 'react';

export default class TodoItem extends Component {
  toggleComplete = (e) => {
    console.log(e.target.checked)
    console.log(this.props.fun)
    console.log( this.props.Key)
    this.props.fun(e.target.checked, this.Key)
  }

  render() {
    const { title, isCompleted, key } = this.props.task;
    return (
      <React.Fragment>

        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>

          <input type="checkbox"  value={isCompleted.value} onChange={this.toggleComplete}  />
          {title}

        </p>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}
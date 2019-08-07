import React, { Component } from 'react';
import axios from 'axios';
import Todos from './components/Todos';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tasks: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/tasks')
      .then(res => res.json())
      .then(
        (tasks) => {
          this.setState({
            isLoaded: true,
            tasks: tasks
          });
        },
     
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  changeDone = (value, i) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === i) task.isCompleted = value;
        return task;
      })
    })
  }

  deleteItem = (h) => {
    const url = `http://localhost:4000/tasks/${h}`;

    console.log(axios.delete(url))

    axios
      .delete(url)
      .then(res => {
        console.log(res.data)
        this.setState({ tasks:res.data});
      })
      .catch(err => {
        console.log(err);
      });
      
  };

  // deleteItem = (h) => {
    
    
  //   this.setState({
  //     tasks: this.state.tasks.filter((task, index) => task.id !== h)
  //   })

  // }

  render() {
       const { error, isLoaded, tasks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <h6>App</h6>
          <Todos tasks={tasks} funchk={this.changeDone} funDelete={this.deleteItem} />
        </React.Fragment >
      );
    }
  }
}


// export default class App extends Component {
//   state = {
//     tasks: [
//       {
//         id: 1,
//         title: "Download Zoom",
//         isCompleted: false
//       },
//       {
//         id: 2,
//         title: "Eat Fried Chicken",
//         isCompleted: false
//       },
//       {
//         id: 3,
//         title: "Play Games",
//         isCompleted: false
//       },
//       {
//         id: 4,
//         title: "Go for Shopping",
//         isCompleted: false
//       },
//       {
//         id: 5,
//         title: "Watch Movie",
//         isCompleted: false
//       }
//     ]
//   };

//   componentDidMount() {
//     fetch('http://localhost:4000/tasks')
//       .then( res => res.text())
//       .then(res => {
//         const data = JSON.parse(res)
//         console.log(data)
//         this.setState({
//           tasks: data
//         })
//       })
//       .catch( err => console.log('err', err))
//   }

//   changeDone = (value, i) => {
//     this.setState({
//       tasks: this.state.tasks.map(task => {
//         if (task.id === i) task.isCompleted = value;
//         return task;
//       })
//     })
//   }

//   deleteItem = (h) => {
//     debugger
//     this.setState({
//       tasks: this.state.tasks.filter((task, index) => task.id !== h)
//     })

//   }


//   render() {
//     const { tasks } = this.state;
//     return (
//       <React.Fragment>
//         <h6>App</h6>
//         <Todos tasks={tasks} funchk={this.changeDone} funDelete={this.deleteItem}/>
//       </React.Fragment >
//     );
//   }
// }
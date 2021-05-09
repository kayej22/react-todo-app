import React from "react"

class TodoContainer extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "setup dev environment",
        completed: true
      },
      {
        id: 2,
        title: "dev website and add content",
        completed: false
      },
      {
        id: 3,
        title: "deploy to live server",
        completed: false
      }
    ]
  }

  render () {
    return (
    <ul>
      {this.state.todos.map(todo => (
        <li>{todo.title}</li>
      ))}
    </ul>
    );
}

export default TodoContainer
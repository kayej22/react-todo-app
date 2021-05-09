import Header from "./Header"
import React from "react"
import TodosList from "./TodoList"

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
      <div>
        <Header />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer
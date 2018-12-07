import "./index.scss"
import ReactDOM from "react-dom";
import React from "react";

const reactRoot = document.createElement("div");
reactRoot.setAttribute("id", "react-root");
document.body.appendChild(reactRoot);

// Initial "Hello world!"
//const App = (props) => <div>Hello, React!</div>;

// this is equivallent to writing a traditional function:
/*
function App(props) {
  return(<div>Hello, React!</div>);
};
*/

// or class-based component example:
/*
class App extends React.Component {
  render() {
    return <div>Hello, class-based React!</div>;
  }
}
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, completed: false, description: "Write blog post"},
        {id: 2, completed: false, description: "Publish blog post"},
        {id: 3, completed: false, description: "Profit!"}
      ]
    }
  }
  render() {
    return <Tasks tasks={this.state.tasks} />;
  }
}

const Tasks = (props) =>
  <ul>
    { props.tasks.map((task) => <Task key={task.id} task={task} />) }
  </ul>

const Task = (props) =>
  <li>
    { props.task.description }
  </li>


ReactDOM.render(<App />, reactRoot);


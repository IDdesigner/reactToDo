var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Feed the cat'
        },
        {
          id: 3,
          text: 'Clean the yard'
        },
        {
          id: 4,
          text: 'Load the dishwasher'
        }
      ]
    }
  },
  handleAddToDo(text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAdd={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = TodoApp;

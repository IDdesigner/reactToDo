var React = require('react');

var AppTodo = React.createClass({
    onAddTodo: function(e) {
        e.preventDefault();

        var toAdd = this.refs.toAdd.value;

        if (toAdd.length > 0) {
            this.refs.toAdd.value = '';
            this.props.onAdd(toAdd);
        } else {
            this.refs.toAdd.focus();
        }
    },
    render: function () {
        return (
        <div className="container__footer">
            <form onSubmit={this.onAddTodo}>
                <input type="text" ref="toAdd" placeholder="What do you need to do?"/>
                <button className="button expanded">Add Todo</button>
            </form>
        </div>
        )
  }
});

module.exports = AppTodo;

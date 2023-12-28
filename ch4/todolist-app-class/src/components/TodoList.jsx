import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

class TodoList extends React.Component {
  render() {
    let items = this.props.todoList.map((item) => {
      return <TodoListItem key={item.no} todoItem={item} deleteTodo={this.props.deleteTodo}
        toggleDone={this.props.toggleDone} />
    })

    return (
      <div className='row'>
        <div className='col'>
          <ul className='list-group'>{items}</ul>
        </div>
      </div>
    )
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func
}
export default TodoList
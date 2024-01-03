// import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'
import TodoContext from '../TodoContext'
import { useContext } from 'react'


//유지보수성을 결정짓는 인자는 많다..
//유지보수성에 가장 큰 인자는 결합도이다..
//A 클래스를 작성하는데, A 클래스내에서 B 클래스를 이용한다면.. A 클래스가 B 클래스와
//결합되어있다는 표현을 한다..
//B 가 다른 클래스로 교체되거나 수정되면 A 가 같이 수정될 수 있다.
//결합도를 낮추면 낮출수록..  유지보수성은 증대되고, 재사용성도 증대된다.

const TodoList = () => {

  const value = useContext(TodoContext)

  let items = value.state.todoList.map((item) => {
    return <TodoListItem key={item.no} todoItem={item} deleteTodo={value.actions.deleteTodo} 
      toggleDone={value.actions.toggleDone}/>
  })

  return (
    <div className='row'>
      <div className='col'>
        <ul className='list-group'>{items}</ul>
      </div>
    </div>
  )
}

// TodoList.propTypes = {
//   todoList: PropTypes.array,
//   toggleDone: PropTypes.func,
//   deleteTodo: PropTypes.func
// }
export default TodoList
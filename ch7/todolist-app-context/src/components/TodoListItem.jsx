import PropTypes from 'prop-types'

// 이곳에서도 props 와 관련된 것을 제거하고 Context 를 이용해서 필요한 데이터
//및 함수를 직접 획득이 가능하기는 하다..
//모든 곳에서 Context 를 사용하는 것은 좋아보이지 않는다. 
//특정 컴포넌트가 있는데, 이 컴포넌트에서는 상위에서 결정한 데이터를 
//단순하게 화면에 찍는 역할이라고 하면 Context 종속성을 제거시키고. props 로 이용하는 
//것이 더 좋을 수 있다.. 
const TodoListItem = (props) => {
  
  let itemClassName = 'list-group-item'
  if(props.todoItem.done) itemClassName += ' list-group-item-success'

  return (
    <li className={itemClassName}>
      <span className={props.todoItem.done ? 'todo-done pointer' : 'pointer'}
        onClick={() => props.toggleDone(props.todoItem.no)}>
          {props.todoItem.todo}
          {props.todoItem.done ? "(완료)" : ""}
      </span>
      <span className='float-end badge bg-secondary pointer'
        onClick={() => props.deleteTodo(props.todoItem.no)}>삭제</span>
    </li>
  )
}

TodoListItem.propTypes = {
  todoItem: PropTypes.object,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func
}
export default TodoListItem
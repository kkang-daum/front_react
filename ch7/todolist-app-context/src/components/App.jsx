import InputTodo from './InputTodo'
import TodoList from './TodoList'

//상위 -> 하위 속성 전달이었다면.. props 를 계속 유지해야 한다.
//하지만 Context 를 이용하면 props 준비할 필요 없다..
const App = () => {
  return (
    <div className='container'>
      <div className='card card-body bg-light'>
        <div className='title'>TodoList Context</div>
      </div>
      <div className='card card-default card-borderless'>
        <div className='card-body'>
          {/* ch3 과 비교.. 속성으로 데이터를 전달할 필요가 없다..  */}
          <InputTodo />
          <TodoList />
        </div>
      </div>
    </div>
  )
}
//props 를 선언하지 않으면 PropTypes 를 선언할 필요도 없다..

export default App
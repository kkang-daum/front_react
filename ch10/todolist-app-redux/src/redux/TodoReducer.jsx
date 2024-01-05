import { produce } from 'immer'
import { TODO_ACTION } from './TodoActionCreator'

const initState = {
  todoList: [
    {id: 1, todo: 'redux..1', desc: 'desc 1', done: false },
    {id: 2, todo: 'redux..2', desc: 'desc 2', done: false },
    {id: 3, todo: 'redux..3', desc: 'desc 3', done: true },
    {id: 4, todo: 'redux..4', desc: 'desc 4', done: false },
  ]
}

//redux 에 action 이 발생되면 실행되는 reducer
//앱의 상태를 action 에 따라 표현하기 위한 목적
//1. pure function ==> 대단한 B/L 구현하는 곳이 아니다..
//2. state 는 불변이다. 과거 state 를 참조해서 새로운 state 를 만드는 것이다.

//redux 에 action 발생시, redux 에 의해 호출된다.. 매개변수가 redux 가 전달한 것이다
//state - 과거의 상태데이터, 즉 action 발생전에 앱에서 유지되던 데이터
//action - 현재 발생한 액션
const TodoReducer = (state = initState, action) => {
  let index
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return produce(state, (draft) => {
        draft.todoList.push({
          id: new Date().getTime(),
          todo: action.payload.todo,
          desc: action.payload.desc,
          done: false
        })
      })
    case TODO_ACTION.DELETE_TODO: 
      index = state.todoList.findIndex((item) => item.id === action.payload.id)
      return produce(state, (draft) => {
        draft.todoList.splice(index, 1)
      })
    case TODO_ACTION.TOGGLE_DONE:
      index = state.todoList.findIndex((item) => item.id === action.payload.id)
      return produce(state, (draft) => {
        draft.todoList[index].done = !draft.todoList[index].done
      })
    case TODO_ACTION.UPDATE_TODO:
      index = state.todoList.findIndex((item) => item.id === action.payload.id)
      return produce(state, (draft) => {
        draft.todoList[index] = {...action.payload}
      })
  
    default:
      return state
  }
}

export default TodoReducer
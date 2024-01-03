import React, { useState } from 'react'
import { produce } from 'immer'

//앱 전역에서 이용할 데이터 공유 객체, Context 준비..
//상위 어디선가 준비.. 
const TodoContext = React.createContext(null)

//앱 전역에서 사용하고자 하는 상태, 상태 변경 함수등을 가지는 컴포넌트 선언.. 
//이곳에서 가지는 상태 및 상태 함수등을 준비한 Context 에 등록.. 
export const TodoProvider = (props) => {
  const [todoList, setTodoList] = useState([
    {no:1, todo: 'react study1', done: false},
    {no:2, todo: 'react study2', done: false},
    {no:3, todo: 'react study3', done: true},
    {no:4, todo: 'react study4', done: false},
  ])

  //상태 데이터 관리를 위해 호출되는 함수.. 하위 어디선가 호출할 거다..
  const addTodo = (todo) => {
    //상태 데이터는 불변성으로 관리하는 것이 좋다..
    //상태데이터는 이전것을 변경하는 것이 아니라. 이전을 참조해서 새로운 것을 만드는 것
    //이전상태를 복재해서 새로운것을 만들고, 
    //그때 ... 의 spread operator 를 이용해서 복재해도 되고..
    //immer 라이브러리를 이용해도 된고..
    const newTodoList = produce(todoList, (draft) => {
      draft.push({no: new Date().getTime(), todo: todo, done: false})
    })
    setTodoList(newTodoList)
  }

  const deleteTodo = (no) => {
    const index = todoList.findIndex((item) => item.no === no)
    const newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1)
    })
    setTodoList(newTodoList)
  }

  const toggleDone = (no) => {
    console.log('1111', no)
    const index = todoList.findIndex((item) => item.no === no)
    const newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done
    })
    setTodoList(newTodoList)
  }

  //자신들이 가지고 있는 상태 데이터, 상태 데이터 변경 함수등을 하위에 공개하기 
  //위해서 Context 에 추가할 정보. 
  //특별한 작성 규칙이 있는 것은 아니다..
  const values = {
    state: {todoList},
    actions: {addTodo, deleteTodo, toggleDone}
  }
  //이곳은 컴포넌트이다.. 컴포넌트의 화면을 JSX 로 
  //이 컴포넌트는 구체적인 화면을 목적으로 하는 컴포넌트가 아니다..
  //자신의 정보를 하위에 공개하기 위한 목적이다..
  //props.children 에 추가된 모든 하위 컴포넌트가 context 에 추가된 정보 이용
  return <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
}

export default TodoContext
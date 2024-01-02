import React from 'react'

const TodoListItem = (props) => {
  console.log(`## TodoListItem : ${props.todoListItem.todo}`)
  return (
    <li>
      <span>{props.todoListItem.todo}</span>
      <button onClick={() => props.deleteTodo(props.todoListItem.id)}>delete</button>
    </li>
  )
}

//memo 함수의 두번째 매개변수에 re-rendering 할 것인지를 결정하는 개발자 로직을 가지는
//함수를 추가해서 해결.. 
//아래의 코드만으로 신규 항목이 출력될때 기존에 화면에 나오는 항목을 위한 컴포넌트는
//리랜더링이 되지 않는다. ==> 좋다..
//React.memo() 의 두번째 매개변수는 주의해서 사용해야 한다.. 
//항목의 중간을 삭제하게 되면.. 그 하위에 있는 모든것이 다 제거되는 문제가 있다..
//두번째 매개변수를 이용하면 그 컴포넌트에 자신들이 생성될때 사용했던 props 가 고정으로
//지정되게 된다.. 그래서.. 중간을 삭제하게 되면 자신 이후에 추가되었던 컴포넌트 정보가
//없어서.. 그 하위까지 같이 삭제가 되는 문제가 있다.. 
export default React.memo(TodoListItem, (prevProps, nextProps) => {
  return prevProps.todoListItem === nextProps.todoListItem
})
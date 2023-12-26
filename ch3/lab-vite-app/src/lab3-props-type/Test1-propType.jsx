import PropTypes from 'prop-types'

//컴포넌트 선언.. 
const PropTypeTest1 = (props) => {
  return (
    <div>
      <h2>PropType Test1</h2>
      <p>id: {props.id}, num: {props.num}, bool: {props.bool}</p>
      <h3>object data</h3>
      <p>name: {props.obj['name']}, age: {props.obj['age']}</p>
      <h3>array data</h3>
      <p>
        {
          props.array.map(item => (
            <p>{item}</p>
          ))
        }
      </p>
      <button onClick={()=>props.fun(10, 20)}>function call</button>
    </div>
  )
}

//자신을 이용하는 곳에
//속성을 어떻게 전달해 달라고 한정짓고자 한다..
//proptypes 선언은 컴포넌트 외부에 선언되어야 한다..
PropTypeTest1.propTypes = {
  id: PropTypes.string.isRequired, 
  num: PropTypes.number,
  fun: PropTypes.func,
  bool: PropTypes.bool,
  obj: PropTypes.object,
  array: PropTypes.array
}

export { PropTypeTest1 }
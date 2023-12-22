import Test1 from './Test1-JSX'
import Test2 from './Test2-JSX'
import PropsTest1 from './Test3-props'
import PropsTest2 from './Test4-props'
import StateTest from './Test5-state'

//함수 스타일의 컴포넌트(UI) 선언.. 
const App = () => {
  const msg = 'World'
  const addResult = (x, y) => {
    return (
      <div className="card card-body bg-lignt mb-3">
        {/* jsx 내에서 동적 데이터(변수등) 추가는 {}보관법 을 이용 
        jsx 를 이용해 쉽게 js 에서 동적 데이터 포함 화면 준비하지 않으면..
        document.getElementById(), document.createElement()*/}
        {x} + {y} = {x+y}
      </div>
    )
  }
  return (
    <div className="container">
      <h2>Hello World</h2>
      <h3>Hello {msg}</h3>
      <hr className="dash-style"/>
      {addResult(10, 20)}
      <Test1 />
      <Test2 />
      <PropsTest1 />
      <PropsTest2 />
      <StateTest />
    </div>
  )
}

export default App
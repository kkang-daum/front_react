//함수 스타일의 컴포넌트(UI) 선언.. 
const App = () => {
  const msg = 'World'
  const addResult = (x, y) => {
    return (
      <div>
        {/* jsx 내에서 동적 데이터(변수등) 추가는 {}보관법 을 이용 
        jsx 를 이용해 쉽게 js 에서 동적 데이터 포함 화면 준비하지 않으면..
        document.getElementById(), document.createElement()*/}
        {x} + {y} = {x+y}
      </div>
    )
  }
  return (
    <div>
      <h2>Hello World</h2>
      <h3>Hello {msg}</h3>
      <hr/>
      {addResult(10, 20)}
    </div>
  )
}

export default App
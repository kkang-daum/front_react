const CountryList = () => {
  let list = [
    {no:1, country:'일본', visited: false},
    {no:2, country:'미국', visited: true},
    {no:3, country:'프랑스', visited: false},
    {no:4, country:'스위스', visited: false},
  ]
  let countries = list.map((item, index) => {
    //반복적으로 랜더링 되는 컴포넌트에는 꼭 key 속성을 설정해야 한다.. 랜더링 최적화를 위해서..
    //key 값은 유일성이 확보되는 값으로.. 
    //유일성을 확보하기 위해서 단순 index(1,2,3,4)으로 지정해도 되지만, 프로그램적으로 
    //의미있는 데이터를 지정할 것을 권장한다..
    //key 속성은 화면과 전혀 관련없다, 리액트 내부에서 렌더링 최적화를 위해서 사용된다..
    return (
      <li key={item.no} className={item.visited ? "list-group-item active"  : "list-group-item"}>
        {item.country}
      </li>
    )
  })
  return <ul className="list-group">{countries}</ul>
}

export default CountryList
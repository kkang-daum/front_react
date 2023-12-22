const PropsTest1 = () => {
  let name = 'kim'
  let user = {
    name: 'lee',
    age: 20
  }

  return (
    <div className="container">
      <h2>Props Test1</h2>
      {/* props 데이터 전달 안했을 때 */}
      <Sub1 />
      {/* 하위에 데이터 전달은 속성으로.. 하위에서는 속성명으로 데이터를 이용 */}
      <Sub1 name={name}/>
      <Sub1 name={name} age="10"/>
      {/* 객체 전달.. */}
      <Sub2 user={user}/>
      <Sub3 name="park" addr="seoul" age="30" email="a@a.com"/>
      <Sub4 name="jung" addr="busan" age="35" email="b@b.com"/>
      {/* //객체를 전달할 때 Sub2 처럼 객체를 직접 전달하면.. */}
      {/* //하위에서 props.객체명.변수명
      //객체를 전달할 때 전개연산자(spread operator - ... 데이터 여러개를 분해해서 쭉 나열)
      //아래처럼 전개연산자로 전달하면.. 데이터를 객체 하나 전달한게 아니라..
      //분해되어 데이터 여러개(우리의 경우는 2개)가 전달되는 것이다.. */}
      <Sub5 {...user}/>
    </div>
  )
}

const Sub1 = (props) =>{
  return <p>I am Sub1, name:{props.name}, age:{props.age}</p>
}
const Sub2 = (props) =>{
  return <p>I am Sub2, name:{props.user.name}, age: {props.user.age}</p>
}
//여러 속성 값을 받기 위해 props 를 선언하고 props.name 등으로 이용이 가능하지만..
//매개변수에 {}을 선언하고 여러개의 변수를 나열해서. .매핑시킬 수도 있다.
//속성이 선언된 순서와 {} 변수의 순서가 다르다.. 순서는 의미없다.. 
//속성명에 해당되는 변수에 대입됨으로.,.
const Sub3 = ({name, age, addr, email}) =>{
  return <p>I am Sub3, name:{name}, age:{age}, addr:{addr}, email:{email}</p>
}
//props 를 이용하지 않고 {} 로 받는데..
//속성명과 {} 의 변수명이 다르다면..
//{ name } 은 {name:name} 의 축약형이다..
//{속성명:변수명}
const Sub4 = ({name: name1, age: age1, addr: addr1, email: email1}) =>{
  return <p>I am Sub4, name: {name1}, age: {age1}, addr:{addr1}, email:{email1}</p>
}
const Sub5 = (props) =>{
  return <p>I am Sub5, name:{props.name}, age:{props.age}</p>
}

export default PropsTest1
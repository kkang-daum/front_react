const Test1 = () => {
  let msg1 = <b>Hello</b>;
  let msg2 = "<b>World</b>"

  return (
    <div className="container">
      <h2>JSX Test</h2>
      <p>Hello {msg1}</p>
      <p>Hello {msg2}</p>
      <hr className="dash-style"/>
      <p>Hello <span dangerouslySetInnerHTML={{__html:msg2}}/></p>
    </div>
  )
}

export default Test1
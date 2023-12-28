import React from 'react'
import TestComponent from './Test1-component'
import PropsComponent from './Test2-props'

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <TestComponent />
        <PropsComponent />
      </div>
    )
  }
}

export default ClassComponent
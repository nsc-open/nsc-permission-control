import React from 'react'
import Permission, { defPermission } from 'nsc-permission-control'

class App extends React.Component {
  state = {
    login: false
  }

  componentDidMount() {
    defPermission('LOGIN', () => {
      return this.state.login
    })
  }

  render() {
    return (
      <div>
        <div>
          <Permission required="B001" granted="B001">
            <button>B001 controlled</button>
          </Permission>
          <Permission required="B001" granted="*">
            <button>* controlled</button>
          </Permission>
          <Permission required={['B001','B002']} granted={['B002','B001']}>
            <button>B001,B002 controlled</button>
          </Permission>
          <Permission required="B001" granted="B002" mode="advance">
            {hasPermission => <button disabled={!hasPermission}>advance</button>}
          </Permission>
          <Permission required="LOGIN" granted={[]}>
            <button>LOGIN controlled</button>
          </Permission>
        </div>
        <button onClick={() => this.setState({ login: true })}>login</button>
      </div>
    )
  }
}

export default App

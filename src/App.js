import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/'>
          This is Home Page
        </Route>
        <Route exact path='/favorite'>
          This is your favorite Moves or stars page
        </Route>
        <Route>
          This Page is not available.
        </Route>
      </Switch>
    </div>
  );
}

export default App;

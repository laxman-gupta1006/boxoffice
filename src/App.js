import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Favorite from './pages/Favorite'
import Home from './pages/Home'

function App() {
  return (
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route exact path='/favorite'>
        <Favorite/>
        </Route>
        <Route>
          404 Not Found
        </Route>
      </Switch>
  );
}

export default App;

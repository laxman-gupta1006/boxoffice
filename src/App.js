import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import { Show } from './pages/Show'

function App() {
  return (
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route exact path='/favorite'>
        <Favorite/>
        </Route>
        <Route exact path='/show/:id'>
          <Show/>
        </Route>
        <Route>
          404 Not Found
        </Route>
      </Switch>
  );
}

export default App;

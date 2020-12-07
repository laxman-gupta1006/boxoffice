import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Favorite from './pages/Favorite'
import  {ThemeProvider} from 'styled-components'
import Home from './pages/Home'
import { Show } from './pages/Show'
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
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
      </ThemeProvider>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Main from './pages/Main'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Browse from './pages/Browse'
import NotFound from './pages/NotFound'

function App() {
  return (<>
  <Switch>
    <Route path='/' exact >
      <Main/>
    </Route>
    <Route path='/login' exact >
      <Login />
    </Route>
    <Route path='/welcome' exact >
      <Welcome />
    </Route>
    <Route path='/browse' exact >
      <Browse/>
    </Route>
    <Route path='*' exact >
      <NotFound/>
    </Route>
  </Switch>
  
  </>)
}

export default App

import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Index } from './pages/Index'
import { Callback } from './pages/Callback'
import { Order } from './pages/Order'

const App = () => {

  

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/order">
            <Index />
            <Order />
          </Route>
          <Route path="/callback">
            <Callback />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

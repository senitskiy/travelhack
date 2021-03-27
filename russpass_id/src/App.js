import { useEffect, useMemo, useState } from 'react'

import { API_URL } from './constants'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Auth, Choise, Registration } from './pages/index'

import './App.scss'

const App = () => {

  const token = useMemo(() => localStorage.getItem('token'), [])

  const [auth, setAuth] = useState(() => {
    return { login: '', email: '' }
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      }, [token])

      const body = await response.text()
      const parseBody = JSON.parse(body)

      setAuth(parseBody.response.data.auth)
    }

    fetchData()
  }, [token])

  return (
    <div className="grid-wrapper">
      <div className="grid-left-side">

      </div>
      <div className="auth-container"> 
      <div className="auth-content">
      <div className="auth-form-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {Boolean(token && auth.mail) ?
              <Choise auth={auth} token={token} />
              :
              <Auth />
            }
          </Route>
          <Route path="/identifier">
            <Auth />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
      </div>
      </div>
    </div>)
}

export default App

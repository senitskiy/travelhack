import { useEffect, useMemo, useState } from 'react'

import { API_URL } from './constants'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Auth, Choise } from './pages/index'

import './App.css'

const App = () => {

  const token = useMemo(() => localStorage.getItem('token'), [])

  const [auth, setAuth] = useState(() => {
    return { login: '', mail: '' }
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {Boolean(token && auth.mail) ?
            <Choise auth={auth} token={token} />
            :
            <Auth />
          }
        </Route>
        <Route exact path="/identifier">
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

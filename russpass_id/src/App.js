import { useEffect, useMemo } from 'react'

import { API_URL } from './constants'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Auth, UserConfirm, DataConfirm, Registration, PhoneConfirm, PhoneInput } from './pages/index'

import './App.scss'

const App = () => {

  const token = useMemo(() => localStorage.getItem('token'), [])

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

      // setAuth(parseBody.response.data.auth)
    }

    fetchData()
  }, [token])

  return (
    <div className="grid-wrapper">
      <div className="grid-left-side bg-rp-peach">
        <div className="h-screen w-full relative">
          <div className="ml-12 mt-12 w-28 mb-20" ><img src="img/rp_h_logo.svg"></img></div>

          <div className="ml-12 text-xl font-semibold text-white">
          <span className="text-rp-red text-sm pr-2">#</span>вдохновляйся<br></br>
          <span className="text-rp-red text-sm pr-2">#</span>планируй<br></br>
          <span className="text-rp-red text-sm pr-2">#</span>делись<br></br>
          <span className="text-rp-red text-sm pr-2">#</span>покупай
          </div>
        </div>
      </div>
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-form-wrapper">
            <BrowserRouter>
              <Switch>
                <Route exact path="/auth">
                  <Auth />
                </Route>
                <Route path="/data_confirm">
                  <DataConfirm />
                </Route>
                <Route path="/user_confirm">
                  <UserConfirm />
                </Route>
                <Route path="/phone_confirm">
                  <PhoneConfirm />
                </Route>
                <Route path="/phone_input">
                  <PhoneInput />
                </Route>
                <Route path="/registration">
                  <Registration />
                </Route>
                <Redirect to='/auth' />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>)
}

export default App

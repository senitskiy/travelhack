import { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'

import { API_URL } from './constants'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Auth, UserConfirm, DataConfirm, Registration, PhoneConfirm, PhoneInput } from './pages/index'

import { getAuth } from './modules/auth'

import './App.scss'

const App = ({ getAuthAction }) => {

  const token = useMemo(() => localStorage.getItem('token'), [])

  useEffect(() => {
    getAuthAction(token)
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


const mapDispatchToProps = {
  getAuthAction: getAuth,
}


export default connect(null, mapDispatchToProps)(App)

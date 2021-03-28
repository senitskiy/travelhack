import { useState, Fragment } from 'react'
import { Input, Button } from '../components'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAuth } from '../modules/auth'

import './auth.scss'

export const AuthDumb = ({ getAuthAction, auth }) => {

  const [formData, setFormData] = useState({
    login: '',
    password: ''
  })

  const [isAuth, setIsAuth] = useState(false)

  const handleSubmit = () => {
    const { token } = auth

    getAuthAction(formData)
    localStorage.setItem('token', token)
    setIsAuth(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <Fragment>
      {
        isAuth ?
          <Redirect to='/user_confirm' />
          :
          <Fragment>
            <div className="text-2xl leading-10 mb-6">Войти с RUSSPASS ID</div>
            <form onSubmit={handleSubmit}>
              <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="login" label="Логин" />
              <Input theme="mb-2" type="password" onChange={handleChange} value={formData.password} name="password" label="Пароль" />
              <div className="mb-6">
                <Link to="/phone_input" className="text-sm underline leading-5">Не помню пароль</Link>
              </div>
              <div className="mb-4">
                <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Войти" />
              </div>
              <div className="text-rp-text-muted mb-4 text-center" >или</div>
              <div className="mb-4">
                <Button theme="w-full border border-rp-input-border hover:bg-rp-light-gray " type="submit" label="Войти по номеру телефона" />
              </div>
              <div className="text-center">У вас нет аккаунта? <Link to="/registration" className="underline">Зарегистрируйтесь</Link></div>
            </form>
          </Fragment>
      }
    </Fragment>
  )
}

const mapStateToProps = ({ auth }) => ({
  auth: auth.data,
})

const mapDispatchToProps = {
  getAuthAction: getAuth,
}


export const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthDumb)
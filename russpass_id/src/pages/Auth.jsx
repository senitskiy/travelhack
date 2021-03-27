import { useState, useMemo } from 'react'
import { API_URL, POST_CONFIG } from '../constants'
import { Input, Button, Checkbox } from '../components'
import './auth.scss'
import { Choise } from './Choise'


export const Auth = () => {

  const callbackUrl = useMemo(() => {
    return new URLSearchParams(window.location.search).get('callback')
  }, [])

  const [formData, setFormData] = useState({
    label: '',
    password: ''
  })

  const [successAuth, setSuccessAuth] = useState({ login: '', mail: '' })

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch(`${API_URL}/auth`, POST_CONFIG(formData))
    const body = await response.text()

    const parseBody = JSON.parse(body)
    const auth = parseBody.response.data.auth

    setSuccessAuth(auth)

  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div className="App">
      <div className="title">Войти с RUSSPASS ID</div>
      {Boolean(successAuth.login) ?
        <Choise auth={successAuth} />
        :
        <form onSubmit={handleSubmit}>
          <Input type="text" onChange={handleChange} value={formData.login} name="login" label="Логин" />
          <Input type="password" onChange={handleChange} value={formData.password} name="password" label="Пароль" />
          <Button type="submit" label="Авторизоваться" />
        </form>
      }
    </div>
  )
}

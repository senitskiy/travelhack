import { useState, Fragment } from 'react'
import { API_URL, POST_CONFIG } from '../constants'
import { Input, Button } from '../components'
import './auth.scss'


export const Auth = () => {

  const [formData, setFormData] = useState({
    label: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch(`${API_URL}/auth`, POST_CONFIG(formData))
    const body = await response.text()

    // setSuccessAuth(Boolean(body))

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
      <div className="text-2xl leading-10 mb-6">Войти с RUSSPASS ID</div>
      <form onSubmit={handleSubmit}>
        <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="login" label="Логин" />
        <Input theme="mb-2" type="password" onChange={handleChange} value={formData.password} name="password" label="Пароль" />
        <div className="mb-6">
          <a href="#" className="text-sm underline leading-5">Не помню пароль</a>
        </div>
        <div className="mb-4">
          <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Войти" />
        </div>
        <div className="text-rp-text-muted mb-4 text-center" >или</div>
        <div className="mb-4">
          <Button theme="w-full border border-rp-input-border hover:bg-rp-light-gray " type="submit" label="Войти по номеру телефона" />
        </div>
        <div className="text-center">У вас нет аккаунта? <a href="#" className="underline">Зарегистрируйтесь</a></div>

      </form>
    </Fragment>
  )
}

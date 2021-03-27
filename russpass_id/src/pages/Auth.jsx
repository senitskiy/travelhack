import { useState, useMemo } from 'react'
import {API_URL, POST_CONFIG} from '../constants'
import { Input, Button, Checkbox } from '../components'
import './auth.scss'


export const Auth = () => {

    const callbackUrl = useMemo(() => {
        return new URLSearchParams(window.location.search).get('callback')
      }, [])
    
      const [formData, setFormData] = useState({
        label: '',
        password: ''
      })
    
      const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
      })
    
      const [successAuth, setSuccessAuth] = useState(false)
    
      const handleChecboxSubmit = async e => {
          e.preventDefault()
      
          const response = await fetch(`${API_URL}/confirmation`, POST_CONFIG(checkboxes))
          const body = await response.text()
          const parseBody = JSON.parse(body)
          const {token} = parseBody.response.data
          
          window.location.replace(`${callbackUrl}?code=${token}`) 
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
    
        const response = await fetch(`${API_URL}/auth`, POST_CONFIG(formData))
        const body = await response.text()
        
        setSuccessAuth(Boolean(body))
    
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target
    
        setFormData({
          ...formData,
          [name]: value
        })
      }
    
      const handleCheckboxChange = (e) => {
        const { name, value } = e.target
    
        setCheckboxes({
          ...checkboxes,
          [name]: !value
        })
      }  
    

    return (
        <div className="App">
        <div className="text-2xl leading-10 mb-6">Войти с RUSSPASS ID</div>
        {successAuth ?
          <form onSubmit={handleChecboxSubmit}>
          <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox1} name="checkbox1" label="Чекбокс 1" />
          <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox2} name="checkbox1" label="Чекбокс 2" />
          <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox3} name="checkbox1" label="Чекбокс 3" />
          <Button type="submit" label="Подтвердить" />
        </form>
        :
        <form onSubmit={successAuth ? handleChecboxSubmit : handleSubmit}>
          <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="login" label="Логин"/>
          <Input theme="mb-2" type="password" onChange={handleChange} value={formData.password} name="password" label="Пароль"/>
          <div className="mb-6">
          <a href="#" className="text-sm underline leading-5">Не помню пароль</a>
          </div>
          <div className="mb-4">
          <button className="py-3.5 px-8 border border-rp-input-border rounded hover:bg-rp-light-gray focus:rp-red-focus rounded-lg">Войти по номеру телефона</button>
          </div>
          <div className="mb-4">
          <Button type="submit" label="Войти" />
          </div>
          {/* <Button type="submit" label="Вотйи по номеру телефона" /> */}
        </form>
        }
    </div>
    )
}

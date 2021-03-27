import { useState, useMemo } from 'react'
import {API_URL, POST_CONFIG} from '../constants'
import { Input, Button, Checkbox } from '../components'
import './auth.css'


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
      Форма авторизации
      
        {successAuth ?
          <form onSubmit={handleChecboxSubmit}>
          <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox1} name="checkbox1" label="Чекбокс 1" />
          <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox2} name="checkbox1" label="Чекбокс 2" />
          <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox3} name="checkbox1" label="Чекбокс 3" />
          <Button type="submit" label="Подтвердить" />
        </form>
        :
        <form onSubmit={successAuth ? handleChecboxSubmit : handleSubmit}>
          <Input type="text" onChange={handleChange} value={formData.login} name="login" label="Логин" />
          <Input type="password" onChange={handleChange} value={formData.password} name="password" label="Пароль" />
          <Button type="submit" label="Авторизоваться" />
        </form>
        }
    </div>
    )
}

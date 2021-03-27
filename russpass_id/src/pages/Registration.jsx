import { useState } from 'react'
import { API_URL } from '../constants'
import { Input, Button } from '../components'
import './registration.scss'

export const Registration = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    middleName: '',
    parameters: [{
      type: 'personal',
      value: ''
    }]
  })

  const [parameters, setParameters] = useState({
    birthDate: '',
    birthPlace: '',
    document: {
      type: 'passport',
      number: '',
      countryIssue: '',
      gender: '',
    },
    contacts: {
      phone: ''
    }
  })

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch(`${API_URL}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        parameters: [{
          type: formData.parameters[0].type,
          value: JSON.stringify(parameters)
        }]
      }),
    })
    const body = await response.text()

  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleParametersChange = (e) => {
    const { name, value } = e.target

    const data = () => {
      switch (name) {
        case 'document.type': {
          return {
            document: {
              type: value
            }
          }
        }
        case 'document.number': {
          return {
            document: {
              number: value
            }
          }
        }
        case 'document.countryIssue': {
          return {
            document: {
              countryIssue: value
            }
          }
        }
        default: {
          return {
            [name]: value
          }
        }
      }
    }

    setParameters({
      ...parameters,
      ...data()
    })
  }


  return (
    <div className="App">
      Форма регистрации
      <form onSubmit={handleSubmit}>
        <Input type="text" onChange={handleChange} value={formData.email} name="email" label="Логин" />
        <Input type="text" onChange={handleChange} value={formData.firstName} name="firstName" label="Имя" />
        <Input type="text" onChange={handleChange} value={formData.middleName} name="middleName" label="Отчество" />
        <Input type="text" onChange={handleChange} value={formData.lastName} name="lastName" label="Фамилия" />

        <Input type="text" onChange={handleParametersChange} value={parameters.birthDate} name="birthDate" label="Дата рождения" />
        <Input type="text" onChange={handleParametersChange} value={parameters.birthPlace} name="birthPlace" label="Место рождения" />
        <Input type="text" onChange={handleParametersChange} value={parameters.document.type} name="document.type" label="Тип документа" />
        <Input type="text" onChange={handleParametersChange} value={parameters.document.number} name="document.number" label="Серия и номер" />
        <Input type="text" onChange={handleParametersChange} value={parameters.document.countryIssue} name="document.countryIssue" label="Страна выдачи" />
        Пароль
        <Input type="password" onChange={handleChange} value={formData.password} name="password" label="Пароль" />
        <div>
          <Button type="submit" label="Регистрация" />
        </div>
      </form>
    </div>
  )
}

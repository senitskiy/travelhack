import { useState, useMemo, Fragment } from 'react'
import { API_URL, POST_CONFIG } from '../constants'
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
    const { token } = parseBody.response.data

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
      {successAuth ?
        <Fragment>
          <div className="text-2xl leading-10 mb-6">Экономим ваше время</div>
          <div className="mb-8">
            <p>На сайте <a href="#" className="underline font-medium">sitename.com</a> вам могут понадобиться паспортные даные. Добавьте их сейчас и они сохранятся в вашей учетной записи.</p>
          </div>
          <div className="flex justify-between" >
          <Button theme="min-w-min bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Да, хочу добавить!" />
          <Button theme="min-w-min" type="submit" label="Не сейчас" />
          </div>
          <div className="mb-24"></div>


          <div className="text-2xl leading-10 mb-6">Добавление данных</div>
          {/* <div className="mb-12">
            <p>На сайте <a href="#" className="underline font-medium">sitename.com</a> вам могут понадобиться паспортные даные. Добавьте их сейчас и они сохранятся в вашей учетной записи.</p>
          </div> */}

          {/* <div className="line-divider font-medium">
            <div className=" text-xl">Данные паспорта:</div>
          </div> */}
          <div className=" text-xl mb-4">Данные паспорта:</div>
          <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="passporNumber" label="Серия и номер паспорта" />
          <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="passporDate" label="Дата выдачи" />
          <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="passporOrgan" label="Кем выдан" />
          {/* <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="passporOrgan" label="Адрес регистрации" /> */}
          <div className="mt-12">
            <div className="line-divider font-medium">
              <div className="">Адрес регистрации:</div>
            </div>
          </div>
          <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="passporOrgan" label="Область" />
          <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="passporOrgan" label="Населенный пункт" />
          <Input theme="mb-4" type="text" onChange={handleChange} value={formData.login} name="passporOrgan" label="Адрес" />

          <div className="mb-24"></div>


          <div className="text-2xl leading-10 mb-6">Подтверждение номера</div>
          <div className="border border-rp-input-border rounded-xl mb-2">
            <div className="p-3">
              <div className="flex items-center">
                <div className="rounded rounded-full h-12 w-12 bg-rp-text flex items-center justify-center mr-4">
                  <div className="text-3xl leading-none font-medium text-white">A</div>
                </div>
                <div className="leading-snug">Александр<br></br>Александров</div>
              </div>
            </div>
          </div>
          {/* <div className="mb-1 p-4  border-t border-rp-input-border"> */}
          <div className="mb-6">
            <a href="#" className="text-sm underline leading-5">Войти в другой аккаунт</a>
          </div>
          <div className="mb-4">
            <p>Мы отправили смс с паролем на номер<br></br>+7 (903) *** ** 99</p>
          </div>
          <Input theme="mb-2" type="text" onChange={handleChange} value={formData.login} name="smsPassword" label="Пароль из смс" />
          <div className="mb-4">
            <a href="#" className="text-sm underline leading-5">Отправить пароль еще раз</a>
          </div>
          <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />


          <div className="text-2xl leading-10 mb-6">Это вы?</div>
          <div className="mb-4 flex items-center">
            <div className="rounded rounded-full h-12 w-12 bg-rp-text flex items-center justify-center mr-4">
              <div className="text-3xl leading-none font-medium text-white">A</div>
            </div>
            <div className="leading-snug">Александр<br></br>Александров</div>
          </div>
          <div className="mb-4">
            <a href="#" className="text-sm underline leading-5">Войти в другой аккаунт</a>
          </div>
          <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />

          <div className="text-2xl leading-10 mb-6">Доступ к данным</div>
          <div className="mb-4 flex items-center">
            <div className="rounded rounded-full h-12 w-12 bg-rp-text flex items-center justify-center mr-4">
              <div className="text-3xl leading-none font-medium text-white">A</div>
            </div>
            <div className="leading-snug">Александр<br></br>Александров</div>
          </div>
          <div className="mb-2">
            <p>Сайту sitename.com будут доступны следующие данные:</p>
          </div>
          <form onSubmit={handleChecboxSubmit}>
            <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox1} name="checkbox1" label="Имя и фамилия" />
            <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox1} name="checkbox2" label="Адрес электронной почты" />
            <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox2} name="checkbox3" label="Телефон" />
            <Checkbox onChange={handleCheckboxChange} value={checkboxes.checkbox3} name="checkbox4" label="Паспортные данные" />
            <div className="mb-6"></div>
            <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />
          </form>
        </Fragment>
        :
        <Fragment><div className="text-2xl leading-10 mb-6">Войти с RUSSPASS ID</div>
          <form onSubmit={successAuth ? handleChecboxSubmit : handleSubmit}>
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
      }
    </div>
  )
}

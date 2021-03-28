import { Fragment } from 'react'

import { API_URL, POST_CONFIG } from '../constants'
import { Input, Button, UserPan } from '../components'


export const PhoneConfirm = () => {

    const handleChange = (e) => {
        console.log('e', e)
    }

    return (
        <Fragment>
            <div className="text-2xl leading-10 mb-6 font-medium">Проверка номера телефона</div>
            <UserPan firstname="Александр" secondname="Александровский" email="alexandovsky@gmail.com"/>
            <div className="mb-6">
                <a href="#" className="text-sm underline leading-5 text-rp-text-muted">Войти в другой аккаунт</a>
            </div>
            <div className="mb-4">
                <p>Мы отправили смс с паролем на номер<br></br>+7 (903) *** ** 99</p>
            </div>
            <Input theme="mb-2" type="text" onChange={handleChange} value="" name="smsPassword" label="Пароль из смс" />
            <div className="mb-6">
                <a href="#" className="text-sm underline leading-5">Отправить пароль еще раз</a>
            </div>
            <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />
        </Fragment>
    )
}
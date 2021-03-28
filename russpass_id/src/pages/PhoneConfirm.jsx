import { Fragment } from 'react'

import { API_URL, POST_CONFIG } from '../constants'
import { Input, Button } from '../components'


export const PhoneConfirm = () => {

    const handleChange = (e) => {
        console.log('e', e)
    }

    return (
        <Fragment>
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
            <div className="mb-6">
                <a href="#" className="text-sm underline leading-5">Войти в другой аккаунт</a>
            </div>
            <div className="mb-4">
                <p>Мы отправили смс с паролем на номер<br></br>+7 (903) *** ** 99</p>
            </div>
            <Input theme="mb-2" type="text" onChange={handleChange} value="" name="smsPassword" label="Пароль из смс" />
            <div className="mb-4">
                <a href="#" className="text-sm underline leading-5">Отправить пароль еще раз</a>
            </div>
            <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />
        </Fragment>
    )
}
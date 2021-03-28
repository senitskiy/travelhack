import { Fragment } from 'react'
import { API_URL, POST_CONFIG } from '../constants'
import { Input, Button } from '../components'


export const PhoneInput = () => {

    const handleChange = (e) => {
        console.log('e', e)
    }

    return (
        <Fragment>
            <div className="text-2xl leading-10 mb-6">Укажите ваш номер</div>
            <Input theme="mb-10" type="text" onChange={handleChange} value="" name="smsPassword" label="Номер телефона" />
            <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />
        </Fragment>
    )
}
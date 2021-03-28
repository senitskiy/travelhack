import { Fragment, useState } from 'react'
import { Input, Button } from '../components'
import { sendPhone } from '../modules/phone'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const PhoneInputDumb = ({ sendPhoneAction, send }) => {

    const [phone, setPhone] = useState('')

    const handleChange = (e) => {
        setPhone(e.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendPhoneAction(phone)
    }

    return (
        <Fragment>
            {send ?
                <Redirect to='/phone_confirm' />
                :
                <Fragment>
                    <form onSubmit={handleSubmit}>
                        <div className="text-2xl leading-10 mb-6">Укажите ваш номер</div>
                        <Input theme="mb-10" type="text" onChange={handleChange} value={phone} name="smsPassword" label="Номер телефона" />
                        <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />
                    </form>
                </Fragment>
            }
        </Fragment>
    )
}


const mapDispatchToProps = {
    sendPhoneAction: sendPhone,
}

const mapStateToProps = ({ phone }) => ({
    send: phone.data.send,
})


export const PhoneInput = connect(mapStateToProps, mapDispatchToProps)(PhoneInputDumb)
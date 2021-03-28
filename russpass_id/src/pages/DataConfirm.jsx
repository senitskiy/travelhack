import { Fragment, useState, useMemo } from "react"
import { connect } from 'react-redux'
import { Button, Checkbox, UserPan } from '../components'
import { setCheckboxes } from '../modules/checkboxes'
import { API_URL, POST_CONFIG } from '../constants'
import { Redirect } from 'react-router-dom'

import './dataconfirm.scss'

export const DataConfirmDumb = ({ setCheckboxesAction, auth: { login, firstname, secondname, mail } }) => {

    const { callback, partner } = useMemo(() => {
        const query = localStorage.getItem('query')

        return {
            callback: new URLSearchParams(query).get('callback'),
            partner: new URLSearchParams(query).get('partner')
        }
    }, [])


    const [checkboxes, setCheckboxes] = useState({
        name: false,
        address: false,
        phone: false,
        passport: false,
    })

    const [nextStep, setNextStep] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setCheckboxes({
            ...checkboxes,
            [name]: !value
        })
    }

    const handleCheckboxSubmit = async e => {
        e.preventDefault()

        setCheckboxesAction(checkboxes)
        setNextStep(true)
    }

    return (<Fragment>
        {nextStep
            ?
            <Redirect to="/data_enter" />
            :
            <Fragment>
                <div className="text-2xl leading-10 mb-6">Доступ к данным</div>
                <div className="mb-4">
                    <UserPan firstname={firstname} secondname={secondname} email={mail} />
                </div>
                <div className="mb-2">
                    <p>Сайту {partner} будут доступны следующие данные:</p>
                </div>
                <form onSubmit={handleCheckboxSubmit}>
                    <Checkbox onChange={handleChange} value={checkboxes.name} name="name" label="Имя и фамилия" />
                    <Checkbox onChange={handleChange} value={checkboxes.address} name="address" label="Адрес электронной почты" />
                    <Checkbox onChange={handleChange} value={checkboxes.phone} name="phone" label="Телефон" />
                    <Checkbox onChange={handleChange} value={checkboxes.passport} name="passport" label="Паспортные данные" />
                    <div className="mb-6"></div>
                    <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />
                </form>
            </Fragment>
        }
    </Fragment>)
}

const mapStateToProps = ({ auth }) => ({
    auth: auth.data,
})

const mapDispatchToProps = {
    setCheckboxesAction: setCheckboxes,
}

export const DataConfirm = connect(mapStateToProps, mapDispatchToProps)(DataConfirmDumb)
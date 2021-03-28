import { Fragment, useState, useMemo } from "react"
<<<<<<< HEAD
import { Button, Checkbox, UserPan } from '../components'
=======
import { connect } from 'react-redux'
import { Button, Checkbox } from '../components'
>>>>>>> bf095e6695a68af79e92c77dbd83242e792aa1ea
import { API_URL, POST_CONFIG } from '../constants'

import './dataconfirm.scss'

export const DataConfirmDumb = ({ auth: { login } }) => {

    const { callback, partner } = useMemo(() => {
        const query = localStorage.getItem('query')

        return {
            callback: new URLSearchParams(query).get('callback'),
            partner: new URLSearchParams(query).get('partner')
        }
    }, [])


    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
    })

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target

        setCheckboxes({
            ...checkboxes,
            [name]: !value
        })
    }

    const handleChecboxSubmit = async e => {
        e.preventDefault()

        const response = await fetch(`${API_URL}/confirmation`, POST_CONFIG(checkboxes))
        const body = await response.text()
        const parseBody = JSON.parse(body)
        const { token } = parseBody.response.data

        window.location.replace(`${callback}?code=${token}`)
    }


    return (
        <Fragment>
            <div className="text-2xl leading-10 mb-6">Доступ к данным</div>
            <div className="mb-4">
            <UserPan firstname="Александр" secondname="Александровский" email="alexandovsky@gmail.com"/>
            </div>
            <div className="leading-snug">{login}</div>
            <div className="mb-2">
                <p>Сайту {partner} будут доступны следующие данные:</p>
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
    )
}


const mapStateToProps = ({ auth }) => ({
    auth: auth.data,
})


export const DataConfirm = connect(mapStateToProps, null)(DataConfirmDumb)
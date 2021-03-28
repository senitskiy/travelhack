import { Fragment, useState, useMemo } from "react"
import { Button, Checkbox } from '../components'
import { API_URL, POST_CONFIG } from '../constants'

import './dataconfirm.scss'

export const DataConfirm = () => {

    const callbackUrl = useMemo(() => {
        return new URLSearchParams(window.location.search).get('callback')
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

        window.location.replace(`${callbackUrl}?code=${token}`)
    }


    return (
        <Fragment>
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
    )
}
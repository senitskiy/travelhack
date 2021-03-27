import { Fragment, useState } from 'react'
import './index.css';

const RUSSPASS_ID_URL = 'http://localhost:3006'
const CALLBACK_URL = `${window.location.protocol}//${window.location.host}/callback`

const PARTNER_TOKEN = 'partner_token'

export const Index = () => {
    const openWindow = () => {
        window.open(`${RUSSPASS_ID_URL}?callback=${CALLBACK_URL}&partner=${PARTNER_TOKEN}`, 'RUSSPASS ID', 'width=600, height=600, top=10 left=10')
    }

    const [name, setName] = useState(()=> {
        return localStorage.getItem('userName')
    })

    const handleClick = () => {
        localStorage.setItem('userName', '')
        setName('')
    }

    return (
        <div>
            <div>Сайт партнера</div>
            {name ?
                <Fragment>
                    <div>Имя пользователя {name}</div>
                    <div onClick={handleClick}>Выйти</div>
                </Fragment>
                :
                <span className='link' onClick={openWindow}>Войти с помощью RUSSPASS</span>
            }
        </div>
    )
}

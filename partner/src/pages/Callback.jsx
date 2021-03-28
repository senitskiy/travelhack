import { useEffect } from 'react'
import './callback.scss'

const AUTH_URL = 'http://localhost:8080/auth'

export const Callback = () => {
    const sendData = new URLSearchParams(window.location.search).get('sendData')

    const postCode = async () => {
        const code = new URLSearchParams(window.location.search).get('code')

        const response = await fetch(AUTH_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: code }),
        })
        const body = await response.text()
        const parseBody = JSON.parse(body)

        const { name } = parseBody.response.data

        localStorage.setItem('userName', name)

        // window.close()
        window.location.replace('/order')

    }

    useEffect(postCode)

    return (
        <div>
            {sendData ? <div>Данные сохранены</div> : <div>Лоадер</div>}
        </div>
    )
}

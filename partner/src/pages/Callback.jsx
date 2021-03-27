import { useEffect } from 'react';
import './callback.scss';

const AUTH_URL = 'http://localhost:8080/auth'

export const Callback = () => {

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

        window.close()
        window.opener.location.reload()

    }

    useEffect(postCode)

    return (
        <div>
            <div>Лоадер</div>
        </div>
    )
}

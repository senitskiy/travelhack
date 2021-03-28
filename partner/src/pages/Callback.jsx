import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import './callback.scss'

const AUTH_URL = 'http://localhost:8080/auth'

export const Callback = () => {
    const [isCode, setCode] = useState(false)

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

        setCode(true)
        const { name } = parseBody.response.data

        // window.close()
        window.location.replace('/order')
    }

    useEffect(() => {
        postCode()
    }, [])

    return (
        <div>
            {isCode ?
                <Redirect to="/order" />
                :
                <div>Лоадер</div>
            }
        </div >
    )
}

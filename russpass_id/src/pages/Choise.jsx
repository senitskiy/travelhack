import { useMemo } from 'react';
import { Link } from 'react-router-dom'
import './choise.scss';

export const Choise = ({ token, auth }) => {

    const callbackUrl = useMemo(() => {
        return new URLSearchParams(window.location.search).get('callback')
    }, [])

    const handleSubmit = () => {
        window.location.replace(`${callbackUrl}?code=${token}`)
    }

    return (
        <div>
            <div onClick={handleSubmit}>
                <div>{auth.login}</div>
                <div>{auth.emailw}</div>
            </div>
            <div>
                <Link to={`/identifier${window.location.search}`}>Сменить аккаунт</Link>
            </div>
        </div>
    )
}

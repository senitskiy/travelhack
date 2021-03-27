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
            <div>Это вы?</div>
            <div>
                <div>{auth.login}</div>
                <div>{auth.email}</div>
            </div>
            <div>
                <Link to={`/identifier${window.location.search}`}>Другая учетная запись</Link>
            </div>
            <div>
                <button onClick={handleSubmit}>Да, это я</button>
            </div>
        </div>
    )
}

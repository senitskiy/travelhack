import { Fragment } from 'react'
import { Button } from '../components'

import './userconfirm.scss';

export const UserConfirm = () => {

    return (
        <Fragment>
            <div className="text-2xl leading-10 mb-6">Это вы?</div>
            <div className="mb-4 flex items-center">
                <div className="rounded rounded-full h-12 w-12 bg-rp-text flex items-center justify-center mr-4">
                    <div className="text-3xl leading-none font-medium text-white">A</div>
                </div>
                <div className="leading-snug">Александр<br></br>Александров</div>
            </div>
            <div className="mb-4">
                <a href="#" className="text-sm underline leading-5">Войти в другой аккаунт</a>
            </div>
            <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />
        </Fragment>
    )
}

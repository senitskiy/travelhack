import { Fragment } from 'react'
import { Button } from '../components'
import { UserPan } from '../components'

import './userconfirm.scss';

export const UserConfirm = () => {

    return (
        <Fragment>
            <div className="text-2xl leading-10 mb-6 font-medium">Выберите аккаунт</div>
            <UserPan firstname="Александр" secondname="Александровский" email="alexandovsky@gmail.com"/>
            <div className="mb-4">
                <a href="#" className="text-sm underline leading-5">Войти в другой аккаунт</a>
            </div>
            <Button theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Продолжить" />
        </Fragment>
    )
}

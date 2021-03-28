import { Fragment, useState } from 'react'
import { Button } from '../components'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import './userconfirm.scss';

export const UserConfirmDumb = ({ auth: { login, mail } }) => {

    const [userConfirm, setUserConfirm] = useState(false)

    const handleClick = () => {
        setUserConfirm(true)
    }

    return (
        <Fragment>
            {userConfirm ?
                <Redirect to="/data_confirm" />
                :
                <Fragment>
                    <div className="text-2xl leading-10 mb-6">Это вы?</div>
                    <div className="mb-4 flex items-center">
                        <div className="rounded rounded-full h-12 w-12 bg-rp-text flex items-center justify-center mr-4">
                            <div className="text-3xl leading-none font-medium text-white">A</div>
                        </div>
                        <div className="leading-snug">{login}</div>
                        <div className="leading-snug"></div>
                    </div>
                    <div className="mb-4">
                        <Link to="/auth" className="text-sm underline leading-5">Войти в другой аккаунт</Link>
                    </div>
                    <Button onClick={handleClick} theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="button" label="Продолжить" />
                </Fragment>
            }
        </Fragment>
    )
}



const mapStateToProps = ({ auth }) => ({
    auth: auth.data,
})


export const UserConfirm = connect(mapStateToProps, null)(UserConfirmDumb)

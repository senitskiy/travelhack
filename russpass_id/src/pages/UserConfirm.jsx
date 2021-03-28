import { Fragment, useState } from 'react'
import { Button } from '../components'
<<<<<<< HEAD
import { UserPan } from '../components'
=======
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
>>>>>>> bf095e6695a68af79e92c77dbd83242e792aa1ea

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
                    <div className="text-2xl leading-10 mb-6 font-medium">Выберите аккаунт</div>
                    <UserPan firstname="Александр" secondname="Александровский" email="alexandovsky@gmail.com" />
                    <div className="leading-snug">{login}</div>
                    <div className="leading-snug"></div>
                
                <div className="mb-4">
                    <Link to="/auth" className="text-sm underline leading-5">Войти в другой аккаунт</Link>
                </div>
                <Button onClick={handleClick} theme="w-full bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="button" label="Продолжить" />
                </Fragment>
            }
        </Fragment >
    )
}



const mapStateToProps = ({ auth }) => ({
    auth: auth.data,
})


export const UserConfirm = connect(mapStateToProps, null)(UserConfirmDumb)

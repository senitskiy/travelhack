import { Fragment, useState } from 'react'
import { Input, Button } from '../components'
import { setData } from '../modules/data'
import { connect } from 'react-redux'

export const DataEnterDumb = ({ setDataAction, auth: { token } }) => {

    const search = new URLSearchParams(localStorage.getItem('query'))
    const callback = search.get('callback')

    const [formData, setFormData] = useState({
        passportNumber: '',
        passportDate: '',
        passportOrgan: '',
        livingArea: '',
        livingAddress: ''
    })

    const [showDataForm, setShowDataForm] = useState(false)

    const handleCancelClick = () => {
        console.log('callback', callback)
        console.log('search', search)
        window.location.replace(`${callback}?code=${token}&sendData=false`)
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleClick = () => {
        setShowDataForm(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDataAction({ formData })

        window.location.replace(`${callback}?code=${token}&sendData=true`)
    }

    return (
        <Fragment>
            {showDataForm ?
                <Fragment>
                    <form onSubmit={handleSubmit}>
                        <div className="text-2xl leading-10 mb-6 font-medium">Добавление данных</div>
                        <div className=" text-xl mb-6 font-medium">Данные паспорта</div>
                        <Input theme="mb-4" type="text" onChange={handleChange} name="passportNumber" label="Серия и номер паспорта" />
                        <Input theme="mb-4" type="text" onChange={handleChange} name="passportDate" label="Дата выдачи" />
                        <Input theme="mb-4" type="text" onChange={handleChange} name="passportOrgan" label="Кем выдан" />
                        <div className="mt-8">
                            <div className=" text-xl mb-6 font-medium">Адрес регистрации</div>
                        </div>
                        <Input theme="mb-4" type="text" onChange={handleChange} name="livingArea" label="Область" />
                        <Input theme="mb-4" type="text" onChange={handleChange} name="livingCity" label="Населенный пункт" />
                        <Input theme="mb-8" type="text" onChange={handleChange} name="livingAddress" label="Адрес" />
                        <div className="flex justify-between mb-32" >
                            <Button theme="min-w-min bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Сохранить" />
                            <Button theme="min-w-min" type="submit" label="Заполнить позже" />
                        </div>
                    </form>
                </Fragment>
                :
                <Fragment>
                    <div className="text-2xl leading-10 mb-6 font-medium">Экономим ваше время</div>
                    <div className="mb-6">
                        <p>На сайте <a href="#" className="underline font-medium">sitename.com</a> вам могут понадобиться паспортные даные. Добавьте их&nbsp;сейчас и&nbsp;они сохранятся в&nbsp;вашей учетной записи</p>
                    </div>
                    <div className="mb-8 flex">
                        <div className="mr-4 pt-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon/Outline/lock">
                                    <path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M12 16C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14C12.552 14 13 14.448 13 15C13 15.552 12.552 16 12 16M12 12C10.346 12 9 13.346 9 15C9 16.654 10.346 18 12 18C13.654 18 15 16.654 15 15C15 13.346 13.654 12 12 12M18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V11C6 10.448 6.448 10 7 10H8H10H14H16H17C17.552 10 18 10.448 18 11V19ZM10 6.111C10 4.947 10.897 4 12 4C13.103 4 14 4.947 14 6.111V8H10V6.111ZM17 8H16V6.111C16 3.845 14.206 2 12 2C9.794 2 8 3.845 8 6.111V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8V8Z" fill="#262626" />
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="2" width="16" height="20">
                                        <path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 16C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14C12.552 14 13 14.448 13 15C13 15.552 12.552 16 12 16M12 12C10.346 12 9 13.346 9 15C9 16.654 10.346 18 12 18C13.654 18 15 16.654 15 15C15 13.346 13.654 12 12 12M18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V11C6 10.448 6.448 10 7 10H8H10H14H16H17C17.552 10 18 10.448 18 11V19ZM10 6.111C10 4.947 10.897 4 12 4C13.103 4 14 4.947 14 6.111V8H10V6.111ZM17 8H16V6.111C16 3.845 14.206 2 12 2C9.794 2 8 3.845 8 6.111V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8V8Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <g id="&#240;&#159;&#142;&#168; Color">
                                            <rect id="Base" width="24" height="24" fill="#262626" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium">Ваши данные надежно защищены</div>
                            <p>Мы передаем данные только с вашего разрешения</p>
                        </div>
                    </div>
                    <div className="flex justify-between" >
                        <Button onClick={handleClick} theme="min-w-min bg-rp-red text-white hover:bg-rp-red-hover focus:rp-red-focus" type="submit" label="Да, хочу добавить!" />
                        <Button onClick={handleCancelClick} theme="min-w-min" type="submit" label="Не сейчас" />
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}


const mapDispatchToProps = {
    setDataAction: setData,
}

const mapStateToProps = ({ auth }) => ({
    auth: auth.data,
})


export const DataEnter = connect(mapStateToProps, mapDispatchToProps)(DataEnterDumb)
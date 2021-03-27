import { Fragment, useState } from 'react'
import './index.scss';

const RUSSPASS_ID_URL = 'http://localhost:3006'
const CALLBACK_URL = `${window.location.protocol}//${window.location.host}/callback`

const PARTNER_TOKEN = 'partner_token'

export const Index = () => {
    const openWindow = () => {
        window.open(`${RUSSPASS_ID_URL}?callback=${CALLBACK_URL}&partner=${PARTNER_TOKEN}`, 'RUSSPASS ID', 'width=600, height=600, top=10 left=10')
    }

    const [name, setName] = useState(() => {
        return localStorage.getItem('userName')
    })

    const handleClick = () => {
        localStorage.setItem('userName', '')
        setName('')
    }

    return (
        <Fragment>
            <div className="bg-indigo-100 h-full justify-center items-center flex">
                <div className="flex flex-col part-form-container">
                    <div className="text-center mb-4"><h1 class="text-4xl mb-2">LOGO</h1></div>
                    {name ?
                        <Fragment>
                            <div>{name}</div>
                            <div onClick={handleClick}>выйти</div>
                        </Fragment>
                        :
                        <div className="bg-white shadow-md rounded-2xl px-8 pt-10 pb-8 mb-4 flex flex-col">
                            <div className="mb-4 font-bold text-center">Присоединяйтесь к миллионам покупателей</div>
                            <div class="mb-3">
                                <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                                    Логин
                            </label>
                                <input className=" appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="" />
                            </div>
                            <div class="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                    Пароль
                            </label>
                                <input className=" appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="" />
                                {/* <p class="text-red text-xs italic">Please choose a password.</p> */}
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <button className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-16 rounded w-full" type="button">
                                    Войти
                        </button>
                                {/* <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker className" href="#">
                            Забыли пароль?
                        </a> */}
                            </div>
                            <div className="flex justify-center text-sm mb-4 ">
                                <a href="#" className="font-bold text-center">Зарегистрироваться</a>
                            </div>
                            <div className="mb-4">
                                <div className="text-center text-gray-400" >Или войти быстро</div>
                            </div>
                            {/* <div className="flex items-center flex-col">
                    <button className="border border-gray-300 rounded-md py-2 w-full text-center mb-2" type="button">RussPass</button>
                    <button className="border border-gray-300 rounded-md py-2 w-full text-center mb-2" type="button">Google</button>
                    <button className="border border-gray-300 rounded-md py-2    w-full text-center mb-2" type="button">Facebook</button>
                </div> */}
                            <div className="flex items-center justify-center">
                                <button className="border border-gray-200 w-16 h-14 rounded-md py-2 text-center mb-2 mr-2 hover:bg-gray-50 outline-none" type="button" onClick={openWindow}>RP</button>
                                <button className="border border-gray-200 w-16 h-14 rounded-md py-2 text-center mb-2 mr-2 hover:bg-gray-50 outline-none" type="button">G</button>
                                <button className="border border-gray-200 w-16 h-14 rounded-md py-2 text-center mb-2 mr-2 hover:bg-gray-50 outline-none" type="button">FB</button>
                                <button className="border border-gray-200 w-16 h-14 rounded-md py-2 text-center mb-2 hover:bg-gray-50 outline-none" type="button">VK</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    )
}

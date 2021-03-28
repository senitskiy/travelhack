import { Fragment, useState } from 'react'
import './index.scss';

const RUSSPASS_ID_URL = 'http://localhost:3006'
const CALLBACK_URL = `${window.location.protocol}//${window.location.host}/callback`

export const Index = () => {
    const openWindow = () => {
        window.location.replace(`${RUSSPASS_ID_URL}?callback=${CALLBACK_URL}&partner=www.partnser.site`)
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
                    <div className="text-center mb-8 flex justify-center">
                        <svg width="153" height="25" viewBox="0 0 153 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.4944 24V0.479999H16.0176C17.9216 0.479999 19.568 0.8272 20.9568 1.5216C22.368 2.1936 23.4544 3.168 24.216 4.4448C24.9776 5.6992 25.3584 7.1888 25.3584 8.9136C25.3584 10.616 24.9664 12.0944 24.1824 13.3488C23.3984 14.5808 22.2896 15.5328 20.856 16.2048C19.4448 16.8768 17.7536 17.2128 15.7824 17.2128H6.2736V24H0.4944ZM14.8752 5.016H6.2736V12.7104H14.8752C16.376 12.7104 17.5072 12.3856 18.2688 11.736C19.0528 11.0864 19.4448 10.1456 19.4448 8.9136C19.4448 6.3152 17.9216 5.016 14.8752 5.016ZM30.2225 24V0.479999H36.0017V24H30.2225ZM68.7242 13.4496C68.7242 16.9216 67.5706 19.6096 65.2634 21.5136C62.9562 23.4176 59.7194 24.3696 55.553 24.3696C51.3642 24.3696 48.1274 23.4176 45.8426 21.5136C43.5578 19.6096 42.4154 16.9216 42.4154 13.4496V0.479999H48.1946V13.4496C48.1946 17.6832 50.6474 19.8 55.553 19.8C60.4586 19.8 62.9114 17.6832 62.9114 13.4496V0.479999H68.7242V13.4496ZM84.3303 24V0.479999H99.8535C101.758 0.479999 103.404 0.8272 104.793 1.5216C106.204 2.1936 107.29 3.168 108.052 4.4448C108.814 5.6992 109.194 7.1888 109.194 8.9136C109.194 10.616 108.802 12.0944 108.018 13.3488C107.234 14.5808 106.126 15.5328 104.692 16.2048C103.281 16.8768 101.59 17.2128 99.6183 17.2128H90.1095V24H84.3303ZM98.7111 5.016H90.1095V12.7104H98.7111C100.212 12.7104 101.343 12.3856 102.105 11.736C102.889 11.0864 103.281 10.1456 103.281 8.9136C103.281 6.3152 101.758 5.016 98.7111 5.016ZM114.058 24V0.479999H119.838V24H114.058ZM152.56 13.4496C152.56 16.9216 151.407 19.6096 149.099 21.5136C146.792 23.4176 143.555 24.3696 139.389 24.3696C135.2 24.3696 131.963 23.4176 129.679 21.5136C127.394 19.6096 126.251 16.9216 126.251 13.4496V0.479999H132.031V13.4496C132.031 17.6832 134.483 19.8 139.389 19.8C144.295 19.8 146.747 17.6832 146.747 13.4496V0.479999H152.56V13.4496Z" fill="#5A67D8" />
                        </svg>
                    </div>
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
                                <div className="flex items-center justify-center">
                                    <button className="border border-rp-red bg-rp-red w-16 h-16 rounded-md py-2 text-center mb-2 mr-2 hover:bg-red-600 outline-none focus:outline-none flex items-center justify-center" type="button" onClick={openWindow}>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.6628 38C31.0781 38 29.2974 36.5831 29.2974 32.1942V31.2502H32.1694V32.1948C32.1694 34.5282 32.8015 35.1668 33.6628 35.1668C34.5243 35.1668 35.1279 34.5282 35.1279 33.4447C35.1279 32.0833 34.9269 31.3337 32.9161 29.9169C30.5608 28.2782 29.4695 26.528 29.4695 24.278C29.4695 21.4169 31.0202 19.6947 33.6628 19.6947C35.501 19.6947 37.9426 20.2504 37.9426 24.9167V26.0002H35.0706V24.9167C35.0706 23.0836 34.4674 22.4724 33.6628 22.4724C32.8015 22.4724 32.3415 23.0836 32.3415 24.1666C32.3415 25.2775 32.5999 26.1941 34.6106 27.6944C37.1096 29.5555 38 31.0278 38 33.4442C38 35.8605 36.8507 38 33.6628 38ZM23.8683 38C21.2835 38 19.5028 36.8055 19.5028 32.1942V31.2502H22.3749V32.1948C22.3749 34.5282 23.0069 35.1668 23.8683 35.1668C24.7298 35.1668 25.3333 34.5282 25.3333 33.4447C25.3333 32.0833 25.1323 31.3337 23.1216 29.9169C20.7663 28.2782 19.6749 26.528 19.6749 24.278C19.6749 21.4169 21.2256 19.6947 23.8683 19.6947C25.7065 19.6947 28.148 20.2504 28.148 24.9167V26.0002H25.276V24.9167C25.276 23.0836 24.6729 22.4724 23.8683 22.4724C23.0069 22.4724 22.547 23.0836 22.547 24.1666C22.547 25.2775 22.8053 26.1941 24.8161 27.6944C27.3151 29.5555 28.2054 31.0278 28.2054 33.4442C28.2054 35.8605 27.0567 38 23.8683 38ZM33.6628 18.3053C31.0781 18.3053 29.2974 16.8885 29.2974 12.4996V11.5555H32.1694V12.5001C32.1694 14.8335 32.8015 15.4722 33.6628 15.4722C34.5243 15.4722 35.1279 14.8335 35.1279 13.75C35.1279 12.3886 34.9269 11.6389 32.9161 10.2222C30.5608 8.58348 29.4695 6.8333 29.4695 4.58334C29.4695 1.72221 31.0202 0 33.6628 0C35.501 0 37.9426 0.555705 37.9426 5.22201V6.30547H35.0706V5.22201C35.0706 3.38888 34.4674 2.77771 33.6628 2.77771C32.8015 2.77771 32.3415 3.38888 32.3415 4.47188C32.3415 5.58283 32.5999 6.49936 34.6106 7.99972C37.1096 9.86082 38 11.3331 38 13.7495C38 16.1658 36.8507 18.3053 33.6628 18.3053ZM23.8683 18.3053C21.2835 18.3053 19.5028 17.1109 19.5028 12.4996V11.5555H22.3749V12.5001C22.3749 14.8335 23.0069 15.4722 23.8683 15.4722C24.7298 15.4722 25.3333 14.8335 25.3333 13.75C25.3333 12.3886 25.1323 11.6389 23.1216 10.2222C20.7663 8.58348 19.6749 6.8333 19.6749 4.58334C19.6749 1.72221 21.2256 0 23.8683 0C25.7065 0 28.148 0.555705 28.148 5.22201V6.30547H25.276V5.22201C25.276 3.38888 24.6729 2.77771 23.8683 2.77771C23.0069 2.77771 22.547 3.38888 22.547 4.47188C22.547 5.58283 22.8053 6.49936 24.8161 7.99972C27.3151 9.86082 28.2054 11.3331 28.2054 13.7495C28.2054 16.1658 27.0567 18.3053 23.8683 18.3053ZM2.87262 31.2502H3.44732C4.71128 31.2502 5.34271 30.6389 5.34271 27.8059V26.1946C5.34271 23.3614 4.71073 22.7502 3.44732 22.7502H2.87262V31.2502ZM2.87262 37.7221H0.000542732L0.000542732 19.9721H3.44732C7.18137 19.9721 8.21542 22.0275 8.21542 25.9167V28.0832C8.21542 31.9718 7.18137 34.0279 3.44732 34.0279H2.87262V37.7221ZM3.44678 8.77782H2.87208V3.05556H3.44678C4.73914 3.05556 5.34217 3.47239 5.34217 5.41645V6.41648C5.34271 8.361 4.73969 8.77782 3.44678 8.77782ZM8.76054 18.0279L6.54885 10.639C7.61176 9.77785 8.21488 8.361 8.21488 6.61137V5.22256C8.21488 1.97256 6.72139 0.277853 3.44678 0.277853L0 0.277853L0 18.0279H2.87208L2.87208 11.5555H3.24574C3.38942 11.5555 3.59037 11.5555 3.90613 11.5276L5.62952 18.0275H8.76054V18.0279ZM12.0347 31.2502L13.4997 22.7502H13.7297L15.1941 31.2502H12.0347ZM16.286 37.7221H19.1582L15.9698 19.9721H11.2596L8.04279 37.7221H10.9149L11.5753 34.0279H15.654L16.286 37.7221ZM13.9017 18.3053C10.3687 18.3053 9.70828 15.722 9.70828 12.5831V0.277853L12.6956 0.277853V12.8334C12.6956 15.0279 13.0976 15.5276 13.9017 15.5276C14.7057 15.5276 15.1078 15.0279 15.1078 12.8334V0.277853L18.0951 0.277853V12.5835C18.0951 15.722 17.4348 18.3053 13.9017 18.3053Z" fill="white" />
                                        </svg>

                                    </button>
                                    <button className="border border-gray-200 w-16 h-16 rounded-md py-2 text-center mb-2 mr-2 hover:bg-gray-50 outline-none focus:outline-none" type="button">G</button>
                                    <button className="border border-gray-200 w-16 h-16 rounded-md py-2 text-center mb-2 mr-2 hover:
 bg-gray-50 outline-none focus:outline-none" type="button">FB</button>
                                    <button className="border border-gray-200 w-16 h-16 rounded-md py-2 text-center mb-2 hover:bg-gray-50 outline-none focus:outline-none" type="button">VK</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    )
}

import './order.scss';

export const Order = () => {

    return (
        <div className="bg-indigo-50 h-full ">
            <div className="fixed bottom-0 h-24 bg-white w-full border-t border border-gray-300 flex items-center justify-center">
            <div className="mr-10">
                Быстро заполнить форму c RUSSPASS ID?
            </div>
            <div className="bg-rp-red px-12 py-4 text-white font-semibold rounded flex justify-center text-center items-center hover:bg-red-600 cursor-pointer"><div className="mr-2">Заполнить c</div><img src="img/rp_h_logo.svg" alt="" className="w-20"/></div>
            </div>
            <div className="w-full h-16 bg-indigo-200"></div>
            <div className="mt-36 justify-center items-center flex flex-col text-left">
                <div>
                    <div className="text-xl font-medium mb-4">Форма заказа</div>
                    <div className="customer_form">
                        <div className="flex mb-4">
                            <input type="text" placeholder="Фамилия" className="mr-4 py-3 px-2 flex-1 border border-gray-400 focus:outline-none focus:border-indigo-400 rounded" />
                            <input type="text" placeholder="Имя" className="mr-4 py-3 px-2 flex-1 border border-gray-400 focus:outline-none focus:border-indigo-400 rounded" />
                            <input type="text" placeholder="Электронная почта" className="py-3 px-2 flex-1 border border-gray-400 focus:outline-none focus:border-indigo-400 rounded" />
                        </div>
                        <div className="flex mb-4">
                            <input type="text" placeholder="Дата рождения" className="mr-4 py-3 px-2 flex-1 border border-gray-400 focus:outline-none focus:border-indigo-400 rounded" />
                            <input type="text" placeholder="Номер паспорта" className="py-3 px-2 flex-1 border border-gray-400 focus:outline-none focus:border-indigo-400 rounded" />
                        </div>
                        <div>
                            <button className="px-12 py-3 bg-indigo-600 text-white rounded font-medium">Продолжить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

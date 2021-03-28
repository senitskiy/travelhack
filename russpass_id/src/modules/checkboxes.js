import { API_URL } from '../constants'

export const CHECKBOXES_INITIAL = 'checkboxes/INITIAL'
export const CHECKBOXES_PENDING = 'checkboxes/PENDING'
export const CHECKBOXES_SUCCESS = 'checkboxes/SUCCESS'
export const CHECKBOXES_ERROR = 'checkboxes/ERROR'

// INITIAL, PENDING, SUCCESS, ERROR 

const initialState = {
    data: {
        send: false,
    }
}

const reducerCheckboxes = (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case CHECKBOXES_INITIAL:
            return {
                ...state,
            }

        case CHECKBOXES_PENDING:
            return {
                ...state,
                status: 'PENDING'
            }

        case CHECKBOXES_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                data: payload
            }


        default:
            return state
    }
}


export const setCheckboxes = (formData) => (dispath) => {
    dispath({
        type: CHECKBOXES_PENDING
    })

    const fetchData = async () => {
        const response = await fetch(`${API_URL}/setCheckboxes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData }),
        })

        const body = await response.text()
        const parseBody = JSON.parse(body)

        dispath({
            type: CHECKBOXES_SUCCESS,
            payload: parseBody.response.data
        })
    }

    fetchData()

}



export default reducerCheckboxes
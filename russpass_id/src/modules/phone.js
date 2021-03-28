import { API_URL } from '../constants'

export const PHONE_INITIAL = 'phone/INITIAL'
export const PHONE_PENDING = 'phone/PENDING'
export const PHONE_SUCCESS = 'phone/SUCCESS'
export const PHONE_ERROR = 'phone/ERROR'

// INITIAL, PENDING, SUCCESS, ERROR 

const initialState = {
  data: {
    send: false,
  }
}

const reducerPhone = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case PHONE_INITIAL:
      return {
        ...state,
      }

    case PHONE_PENDING:
      return {
        ...state,
        status: 'PENDING'
      }

    case PHONE_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        data: payload
      }


    default:
      return state
  }
}


export const sendPhone = (formData) => (dispath) => {
  dispath({
    type: PHONE_PENDING
  })

  const fetchData = async () => {
    const response = await fetch(`${API_URL}/sendPhone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    })

    const body = await response.text()
    const parseBody = JSON.parse(body)

    console.log('parseBody.response.data', parseBody.response.data)

    dispath({
      type: PHONE_SUCCESS,
      payload: parseBody.response.data
    })

    // setAuth(parseBody.response.data.auth)
  }

  fetchData()

}



export default reducerPhone
import { API_URL } from '../constants'

export const AUTH_INITIAL = 'auth/INITIAL'
export const AUTH_PENDING = 'auth/PENDING'
export const AUTH_SUCCESS = 'auth/SUCCESS'
export const AUTH_ERROR = 'auth/ERROR'

// INITIAL, PENDING, SUCCESS, ERROR 

const initialState = {
  data: {
    login: '',
    mail: '',
    token: ''
  }
}

const reducerAuth = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case AUTH_INITIAL:
      return {
        ...state,
      }

    case AUTH_PENDING:
      return {
        ...state,
        status: 'PENDING'
      }

    case AUTH_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        data: payload
      }


    default:
      return state
  }
}


export const getAuth = (formData) => (dispath) => {
  dispath({
    type: AUTH_PENDING
  })

  const fetchData = async () => {
    const response = await fetch(`${API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    })

    const body = await response.text()
    const parseBody = JSON.parse(body)

    dispath({
      type: AUTH_SUCCESS,
      payload: parseBody.response.data.auth
    })

    // setAuth(parseBody.response.data.auth)
  }

  fetchData()

}



export default reducerAuth
import { API_URL } from '../constants'

export const DATA_INITIAL = 'data/INITIAL'
export const DATA_PENDING = 'data/PENDING'
export const DATA_SUCCESS = 'data/SUCCESS'
export const DATA_ERROR = 'data/ERROR'

// INITIAL, PENDING, SUCCESS, ERROR 

const initialState = {
  data: {
    send: false,
  }
}

const reducerData = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case DATA_INITIAL:
      return {
        ...state,
      }

    case DATA_PENDING:
      return {
        ...state,
        status: 'PENDING'
      }

    case DATA_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        data: payload
      }


    default:
      return state
  }
}


export const setData = (formData) => (dispath) => {
  dispath({
    type: DATA_PENDING
  })

  const fetchData = async () => {
    const response = await fetch(`${API_URL}/setData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData }),
    })

    const body = await response.text()
    const parseBody = JSON.parse(body)

    dispath({
      type: DATA_SUCCESS,
      payload: parseBody.response.data
    })

    // setAuth(parseBody.response.data.auth)
  }

  fetchData()

}



export default reducerData
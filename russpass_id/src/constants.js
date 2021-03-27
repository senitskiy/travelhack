export const API_URL = 'http://localhost:8081'


export const POST_CONFIG = (data) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data }),
})
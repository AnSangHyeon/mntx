import axios from "axios"

const headers = {
  'Content-Type': 'application/json',
}
const options = { 
  baseURL: 'http://localhost:12000',
  withCredentials: true,
  headers: headers
 }
const http = axios.create(options)


http.interceptors.response.use(res => {
  return res.data
})

http.interceptors.request.use(req => {
  // req.headers.authorization = TokenManager.accessToken
  return req
})

export default http
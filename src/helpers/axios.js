import axios from 'axios'
import { domain, APP_MODE, APP_VERSION } from './urls'

const Axios = axios.create({
    baseURL: `${domain}${APP_MODE}${APP_VERSION}`,
})

Axios.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken')

        if (accessToken) {
            config.headers = {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// Axios.interceptors.response.use(
//     function (response) {

//         return response
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

export default Axios
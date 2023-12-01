import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL
})

api.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
    }
)

api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log(error)

        return Promise.reject(error)
    }
)

export default api;
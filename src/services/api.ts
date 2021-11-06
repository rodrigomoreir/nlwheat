import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://192.168.27.101:4000'
})
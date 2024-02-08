import axios from 'axios'

const client = axios.create({
    baseURL: '',
})


client.interceptors.request.use(config => {
    const token = ''

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

const registerUserCommunity = async ({ name, group, email, phone }) => {
    const body = {
        users: {
            name,
            group,
            email,
            phone
        }
    }
    let errors = null

    const response = await client.post('/', body)
    if (!response.data) {
        errors = {
            status: response.request.status,
            statusText: response.request.statusText
        }
    }

    return {
        data: response.data,
        errors
    }
}

const getAllUsersCommunity = async () => {
    const response = await client.get('/')
    let errors = null

    if (!response.data) {
        errors = {
            status: response.request.status,
            statusText: response.request.statusText
        }
    }

    return {
        data: response.data,
        errors
    }
}

export default {
    registerUserCommunity,
    getAllUsersCommunity
}
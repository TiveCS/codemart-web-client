import axios from "axios"

const ApiHelper = {
    async fetch(endpoint, { method, data, params, headers }) {
        const request = await axios.request({
            url: `/api/${endpoint}`,
            method: method,
            headers: headers,
            params: params,
            data: data,
        });

        return request;
    },

    async fetchWithAuth(endpoint, { method, data, params, headers }) {
        const request = await axios.request({
            url: `/api/${endpoint}`,
            method: method,
            withCredentials: true,
            headers: headers,
            params: params,
            data: data,
        });

        return request;
    }
}

async function register({ email, fullName, password }) {
    const response = await ApiHelper.fetch('auth/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            email,
            fullName,
            password
        }
    })

    return response.data;
}

export { register };
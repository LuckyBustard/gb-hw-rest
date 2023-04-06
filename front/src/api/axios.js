import axios from "axios"
import {urls} from "./urls"
import * as process from 'process'

const apiUrl = process.env.API_URL || 'http://localhost:8000'

class ApiClient {
    apiClient
    needAuth = true
    authProgress = false
    waitPromise

    constructor() {
        this.apiClient = axios.create({
            baseURL: apiUrl
        })
    }

    setAuth(token) {
        this.apiClient.defaults.headers.common['Authorization'] = `Token ${token}`
        return this
    }

    client() {
        return this.apiClient
    }

    async auth(username, password) {
        let resolve, reject
        this.waitPromise = new Promise((resolveFunc, rejectFunc) => {
            resolve = resolveFunc
            reject = rejectFunc
        })
        if (this.authProgress) {
            return
        }
        this.authProgress = true

        try {
            const response = await this.apiClient.post(urls.auth, { username, password })
            this.setAuth(response.data.token)
            resolve({})
            return response.data
        } catch (e) {
            reject(e)
        } finally {
            this.needAuth = false
            this.authProgress = false
        }
    }
}

export const apiClient = new ApiClient()
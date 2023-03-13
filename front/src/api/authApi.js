import {AnyApi} from "./anyApi"
import Cookies from 'universal-cookie'

class AuthApi extends AnyApi {
    cookie

    constructor() {
        super()
        this.cookie = new Cookies()
    }

    async auth(username, password) {
        const data = await this.apiClient.auth(username, password)
        this.cookie.set('auth-token', data.token, {
            sameSite: true,
            path: '/',
        })
        return data
    }

    logout() {
        this.cookie.remove('auth-token', {
            sameSite: true,
            path: '/',
        })
    }
}

export const authApi = new AuthApi()
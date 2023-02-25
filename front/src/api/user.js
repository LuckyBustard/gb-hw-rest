import {apiClient} from "./axios"

class UserApi {
    async fetchUsers()
    {
        const result = await apiClient.get('/api/users/')
        return result.data
    }
}

export const userApi = new UserApi()

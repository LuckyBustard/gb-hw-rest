import {apiClient} from "./axios"
import {urls} from "./urls"

class UserApi {
    async fetchUsers()
    {
        const result = await apiClient.get(urls.usersList)
        return result.data
    }

    async fetchUser(id)
    {
        const result = await apiClient.get(urls.user.replace('<id>', id))
        return result.data
    }
}

export const userApi = new UserApi()

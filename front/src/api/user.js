import {urls} from "./urls"
import {AnyApi} from "./anyApi"

class UserApi extends AnyApi {
    async fetchUsers()
    {
        const result = await this.client().get(urls.usersList)
        return result.data
    }

    async fetchUser(id)
    {
        const result = await this.client().get(urls.user.replace('<id>', id))
        return result.data
    }
}

export const userApi = new UserApi()

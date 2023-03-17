import {urls} from "./urls"
import {AnyApi} from "./anyApi"

class TaskApi extends AnyApi {
    async fetchTasks()
    {
        const result = await this.client().get(urls.tasksList)
        return result.data
    }
}

export const taskApi = new TaskApi()

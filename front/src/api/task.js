import {apiClient} from "./axios"
import {urls} from "./urls"

class TaskApi {
    async fetchTasks()
    {
        const result = await apiClient.get(urls.tasksList)
        return result.data
    }
}

export const taskApi = new TaskApi()

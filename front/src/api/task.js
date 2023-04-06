import {urls} from "./urls"
import {AnyApi} from "./anyApi"

class TaskApi extends AnyApi {
    async fetchTasks()
    {
        const result = await this.client().get(urls.tasksList)
        return result.data
    }

    async addTask(data)
    {
        const result = await this.client().post(urls.tasksList, data)
        return result.data
    }

    async editTask(id, data)
    {
        const result = await this.client().put(urls.task.replace('{id}', id), data)
        return result.data
    }

    async deleteTask(id)
    {
        const result = await this.client().delete(urls.task.replace('{id}', id))
        return result.data
    }
}

export const taskApi = new TaskApi()

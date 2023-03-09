import {apiClient} from "./axios"
import {urls} from "./urls"

class ProjectApi {
    async fetchProjects()
    {
        const result = await apiClient.get(urls.projectsList)
        return result.data
    }
}

export const projectApi = new ProjectApi()

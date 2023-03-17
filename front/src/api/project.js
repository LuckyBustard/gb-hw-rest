import {urls} from "./urls"
import {AnyApi} from "./anyApi"

class ProjectApi extends AnyApi {
    async fetchProjects()
    {
        await this.waitPromise
        const result = await this.client().get(urls.projectsList)
        return result.data
    }
}

export const projectApi = new ProjectApi()

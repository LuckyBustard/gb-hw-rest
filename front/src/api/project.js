import {urls} from "./urls"
import {AnyApi} from "./anyApi"

class ProjectApi extends AnyApi {
    async fetchProjects(data = null)
    {
        await this.waitPromise
        let url = urls.projectsList
        if (data) {
            let query = []
            for (const p in data) {
                if (data.hasOwnProperty(p)) {
                    query.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                }
            }
            if (query.length > 0) {
                url += '?' + query.join('&')
            }
        }
        const result = await this.client().get(url)
        return result.data
    }

    async addProject(data) {
        const result = await this.client().post(urls.projectsList, data)
        return result.data
    }

    async editProject(id, data) {
        const result = await this.client().put(urls.project.replace('{id}', id), data)
        return result.data
    }

    async deleteProject(id) {
        const result = await this.client().delete(urls.project.replace('{id}', id))
        return result.data
    }
}

export const projectApi = new ProjectApi()

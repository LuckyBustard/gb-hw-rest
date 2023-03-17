import { apiClient } from "./axios"

export class AnyApi {
    apiClient
    waitPromise

    constructor() {
        this.apiClient = apiClient
        if (this.apiClient.needAuth && !this.apiClient.authProgress) {
            this.apiClient.auth('admin', '1111')
        }
        this.waitPromise = this.apiClient.waitPromise
    }

    client() {
        return this.apiClient.client()
    }
}
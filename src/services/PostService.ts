import { AxiosResponse } from "axios"
import $api from "../api"
import { IAxiosResponsePost } from "../types/Post"

class PostService {
    getAllPosts(): Promise<AxiosResponse<IAxiosResponsePost[]>> {
        const response = $api.get<IAxiosResponsePost[]>('/posts')
        return response
    }
}

export default new PostService()
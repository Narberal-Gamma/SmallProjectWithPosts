import $api from "../api"
import { IAxiosResponsePost } from "../types/Post"

class PostService {
    async getAllPosts(): Promise<IAxiosResponsePost[]> {
        const { data } = await $api.get<IAxiosResponsePost[]>('/posts')
        return data
    }
}

export default new PostService()
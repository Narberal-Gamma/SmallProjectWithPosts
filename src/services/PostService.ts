import $api from "../api"
import { IAxiosResponsePost, IPostResponse } from "../types/Post"

class PostService {
    async getAllPosts(limit: number, page: number): Promise<IPostResponse> {
        const { data, headers } = await $api.get<IAxiosResponsePost[]>('/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        const total_count = headers['x-total-count']
        return {
            data,
            total_count
        }
    }
}

export default new PostService()
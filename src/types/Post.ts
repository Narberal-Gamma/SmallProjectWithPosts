export interface IPostResponse {
    data: IAxiosResponsePost[],
    total_count: number,
}

export interface IAxiosResponsePost {
    id: string,
    userId: string,
    title: string,
    body: string,
}

export interface IPost {
    id: string,
    title: string,
    body: string,
    userAvatar: string,
    userComments: IAxiosResponsePost[],
}
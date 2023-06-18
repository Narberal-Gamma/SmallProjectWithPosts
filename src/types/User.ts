export interface IUser {
    id: string,
    avatar: string,
    comments: IAxiosResponseComments[],
}

export interface IAxiosResponseComments {
    id: string,
    postId: string,
    email: string,
    body: string,
}
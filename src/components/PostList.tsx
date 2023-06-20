import { FC } from "react";
import PostItem from "./PostItem";
import { IAxiosResponsePost } from "../types/Post";

interface PostsListProps {
    posts: IAxiosResponsePost[],
    title: string
}

const PostsList: FC<PostsListProps> = ({ posts, title }) => {

    return (
        <div>
            <h1>{title}</h1>
            {posts?.map(post =>
                <PostItem key={post.id} post={post} />
            )}
        </div>
    )
}

export default PostsList
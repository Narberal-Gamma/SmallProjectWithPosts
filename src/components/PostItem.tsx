import { FC } from "react";
import { IAxiosResponsePost } from "../types/Post";

interface PostItemProps {
    post: IAxiosResponsePost
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div>
            {post.id}) {post.title}
            <div>
                {post.body}
            </div>
        </div>
    )
}

export default PostItem
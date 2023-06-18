import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { asyncFetchPosts } from "../store/post/slice";

const Posts: FC = () => {

    const { posts } = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(asyncFetchPosts())
    }, [])

    return (
        <div>
            Posts Page
            <hr />
            {posts?.map(post =>
                <div key={post.id}>
                    {post.id}) {post.title}
                    <div>
                        {post.body}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Posts
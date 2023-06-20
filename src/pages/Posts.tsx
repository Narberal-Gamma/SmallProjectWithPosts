import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { asyncFetchPosts } from "../store/post/slice";
import Pagination from "../components/UI/Pagination/Pagination";
import Spinner from "../components/UI/Spinner/Spinner";
import Select from "../components/UI/Select/Select";
import PostsList from "../components/PostList";

const Posts: FC = () => {

    const { posts, total_count, isLoading, isError } = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState<number>(total_count)
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        dispatch(asyncFetchPosts({limit, page}))
    }, [page, limit])

    useEffect(() => {
        getTotalPagesCount()
    }, [total_count])

    function getTotalPagesCount() {
        if (!isLoading) {
            setTotalPages(total_count)
        }
    }

    const changeLimit = (value: string) => {
        setLimit(Number(value))
        setPage(1)
    }
    
    return (
        <div>
            Posts Page
            <Select 
                value={`${limit}`}
                onChange={changeLimit}
                defaultValue="Select posts limit"
                options={[
                    {value: '10', name: '10'},
                    {value: '20', name: '20'},
                    {value: '35', name: '35'},
                    {value: '55', name: '55'},
                    {value: '-1', name: 'Показать все'},
                ]}
            />
            <hr />
            {isError && <h1>{isError}</h1>}
            {isLoading
                ? <Spinner />
                : <>
                    <PostsList posts={posts} title="Posts about JS" />
                    <Pagination
                        totalPagesCount={totalPages}
                        currentPages={page}
                        limit={limit}
                        setPages={setPage}
                    />
                </>}
        </div>
    )
}

export default Posts
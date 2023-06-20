import { FC } from "react";
import { Pagination as BSPagination } from "react-bootstrap";
import { usePagination } from "../../../hooks/usePagination";
import getPagesCount from "../../../utils/getPagesCount";

interface PaginationProps {
    totalPagesCount: number,
    currentPages: number,
    limit: number,
    setPages: (number: number) => void,
}

const Pagination: FC<PaginationProps> = ({ totalPagesCount, limit, currentPages, setPages }) => {

    const pages = usePagination(getPagesCount(totalPagesCount, limit))

    return (
        <BSPagination>
            {pages.map(page =>
                <BSPagination.Item
                    onClick={() => setPages(page)}
                    active={page === currentPages}
                    key={page}
                >
                    {page}
                </BSPagination.Item>
            )}
        </BSPagination>
    )
}

export default Pagination
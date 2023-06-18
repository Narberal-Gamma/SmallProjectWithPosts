import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE_ABOUT, ROUTE_POSTS, ROUTE_USER_INFO } from "../../../consts/routes";

const Navbar: FC = () => {
    return(
        <div>
            <Link to={ROUTE_POSTS}>Посты</Link>
            <Link to={ROUTE_ABOUT}>Обо мне</Link>
            <Link to={ROUTE_USER_INFO}>Информация о пользователе</Link>
        </div>
    )
}

export default Navbar
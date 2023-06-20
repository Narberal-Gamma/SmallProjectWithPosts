import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE_ABOUT, ROUTE_POSTS, ROUTE_USER_INFO } from "../../../consts/Routes";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as BSNavbar } from 'react-bootstrap';

const Navbar: FC = () => {
    return (
        <div>
            <BSNavbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link className="p-2 text-decoration-none text-light" to={ROUTE_POSTS}>Посты</Link>
                        <Link className="p-2 text-decoration-none text-light" to={ROUTE_ABOUT}>Обо мне</Link>
                        <Link className="p-2 text-decoration-none text-light" to={ROUTE_USER_INFO}>Информация о пользователе</Link>
                    </Nav>
                </Container>
            </BSNavbar>
        </div>

    )
}

export default Navbar
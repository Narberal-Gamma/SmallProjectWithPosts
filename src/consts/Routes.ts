import About from "../pages/About";
import Posts from "../pages/Posts";
import UserInfo from "../pages/UserInfo";
import { IRoutes } from "../types/Routes";

export const ROUTE_POSTS = '/posts';
export const ROUTE_ABOUT = '/about';
export const ROUTE_USER_INFO = '/user';

export const PublicRoutes: IRoutes[] = [
    { path: ROUTE_POSTS, element: Posts, index: true },
    { path: ROUTE_ABOUT, element: About  },
    { path: ROUTE_USER_INFO, element: UserInfo }
]
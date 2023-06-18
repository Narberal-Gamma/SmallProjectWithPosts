import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../consts/Routes";

const AppRouter: FC = () => {
    return (
        <Routes>
            {PublicRoutes.map(route =>
                <Route
                    path={route.path}
                    element={<route.element />}
                    index={route.index}
                    key={route.path}
                />
            )}
            <Route path="*" element={<Navigate to='/posts' replace />} />
        </Routes>
    )
}

export default AppRouter
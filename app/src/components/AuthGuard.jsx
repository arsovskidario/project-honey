import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";

export default function AuthGuard() {
    const { username } = useContext(AuthContext);

    return username === "admin" ? <Outlet /> : <Navigate to="/" />;
}
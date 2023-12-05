import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function isEmptyOrNull(str) {
    return !str || str.trim() === '';
}

const initialUsername = localStorage.getItem('username');
const initialAccessToken = localStorage.getItem('accessToken');
export function AuthProvider({
    children
}) {
    const [username, setUsername] = useState(isEmptyOrNull(initialUsername) ? '' : initialUsername);
    const [accessToken, setAccessToken] = useState(isEmptyOrNull(initialAccessToken) ? '' : initialAccessToken);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('username', username);
    }, [username])

    useEffect(() => {
        localStorage.setItem('accessToken', accessToken);
    }, [accessToken])

    const logout = () => {
        setUsername('');
        setAccessToken('');
        navigate('/');
    }

    const login = (username, accessToken) => {
        setUsername(username);
        setAccessToken(accessToken);
        navigate('/');
    }

    const isUserAdmin = () => {
        return username === "admin";
    }

    const isLoggedIn = () => {
        return isEmptyOrNull(username);
    }

    const values = {
        username,
        accessToken,
        login,
        logout,
        isUserAdmin,
        isLoggedIn
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>

}

AuthContext.displayName = 'AuthContext';
export default AuthContext;
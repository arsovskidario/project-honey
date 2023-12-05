import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutSubmit() {

    const navigate = useNavigate();

    const { logout, username } = useContext(AuthContext);

    const isAdmin = (username) => {
        return username === 'admin';
    }

    const adminPanelHandler = () => {
        navigate('/admin');
    }

    const logoutHandler = () => {
        logout();
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mt-20  lg:py-0">
            <h1 className="text-4xl mb-2">Logged in as {username}</h1>
            {isAdmin(username) &&
                <button
                    onClick={adminPanelHandler}
                    className="m-1 w-1/6 text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm md:px-5 md:py-2.5 py-6 text-center overflow-clip"
                >Admin Panel</button>

            }

            <button
                onClick={logoutHandler}
                className="m-1 w-1/6 text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm md:px-5 md:py-2.5 py-6 text-center overflow-clip"
            >Logout</button>
        </div>
    )
}
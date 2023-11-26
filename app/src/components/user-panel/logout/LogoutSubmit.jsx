import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

export default function LogoutSubmit() {

    const {logout, username} = useContext(AuthContext);

    const logoutHandler = () => {
        logout();
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mt-20  lg:py-0">
            <h1 className="text-4xl mb-2">Logged in as {username}</h1>
            <button 
            onClick={logoutHandler}
            className="m-1 text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm px-5 py-2.5 text-center overflow-clip"
            >Logout</button>
        </div>
    )
}
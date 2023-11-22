import { useNavigate } from "react-router-dom";

export default function LogoutSubmit() {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('accessToken');
        navigate('/');
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mt-20  lg:py-0">
            <h1 className="text-4xl mb-2">Logged in as {localStorage.getItem('username')}</h1>
            <button 
            onClick={logoutHandler}
            className="m-1 text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm px-5 py-2.5 text-center overflow-clip"
            >Logout</button>
        </div>
    )
}
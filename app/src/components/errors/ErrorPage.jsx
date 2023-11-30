import { useLocation, useNavigate } from "react-router-dom";
import { ERROR_CODE } from "../constants/constants";

const SERVICE_UNAVAILABLE_ICON_PATH = "/src/assets/505-icon.png";
const NOT_FOUND_ICON_PATH = "/src/assets/404-icon.png"

export default function ErrorPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    console.log(ERROR_CODE.SERVICE_UNAVAILABLE)
    console.log(params.get('message'));
    return <section className="flex flex-col items-center h-screen">
        <img
            className="mt-20"
            src={ERROR_CODE.NOT_FOUND === params.get('message')
                ? NOT_FOUND_ICON_PATH
                : SERVICE_UNAVAILABLE_ICON_PATH
            }
            alt="error-bee-icon" />

        <button
            onClick={() => navigate("/")}
            className="mt-5 md:p-5 p-2.5 text-white bg-cfb491 hover:bg-btnHover font-medium rounded-lg text-xl text-center">
            Return Home
        </button>
    </section>
}
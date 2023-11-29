import { useLocation, useNavigate } from "react-router-dom";

export default function ErrorPage({
    imgUrl
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    console.log(params.get('message'));
    return <section className="flex flex-col items-center h-screen">
        <img
        className="mt-20"
            src={imgUrl}
            alt="error-bee-icon" />

        <button
            onClick={() => navigate("/")}
            className="mt-5 md:p-5 p-2.5 text-white bg-cfb491 hover:bg-btnHover font-medium rounded-lg text-xl text-center">
            Return Home
        </button>
    </section>
}
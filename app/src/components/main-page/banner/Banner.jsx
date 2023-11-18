import './Banner.css'
import { useNavigate } from 'react-router-dom';

export default function Banner() {
    const navigate = useNavigate();

    return (
        <section id="banner" className="flex flex-col items-center bg-no-repeat bg-cover bg-center bg-[url('/src/assets/main-page-banner.jpg')] opacity-90 p-10 w-full h-full">
            <h1 className="text-white text-6xl main-page-header mt-10">Balkan Nectar</h1>
            <h2 className="text-xl m-2 text-opacity-100">Where tradition meets the sweetness of nature.</h2>
            <button onClick={() => navigate("/honey")} className="hex-btn">Shop now</button>
        </section>
    );
}
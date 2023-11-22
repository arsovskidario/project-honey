import './Banner.css'
import { useNavigate } from 'react-router-dom';

export default function Banner({
    bannerUrl,
    bannerName,
    bannerDescription,
    isMainPage
}) {
    const navigate = useNavigate();

    return (
        <section
            id="banner"
            className={`flex flex-col items-center bg-no-repeat bg-cover bg-center bg-[url('${bannerUrl}')] opacity-90 p-10 w-full h-full`}>
            <h1 className="text-white text-6xl main-page-header mt-10">{bannerName}</h1>
            <h2 className="text-xl m-2 text-opacity-100">{bannerDescription}</h2>
            {isMainPage &&
                <button onClick={() => navigate("/honey")} className="hex-btn">Shop now</button>
            }
        </section>
    );
}
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
            style={{ backgroundImage: `url('${bannerUrl}')` }}
            className="banner-bg">
            <h1 className="text-white text-6xl main-page-header mt-10">{bannerName}</h1>
            <h2 className="text-xl m-2 text-opacity-100">{bannerDescription}</h2>
            {isMainPage &&
                <button
                    onClick={() => navigate("/honey")}
                    className="hex-btn">
                    Shop now
                </button>
            }
        </section>
    );
}
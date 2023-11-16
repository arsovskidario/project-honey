import './MainPage.css'
export default function MainPage() {
    return (
        <main>
            <div id="banner" className="flex flex-col items-center bg-no-repeat bg-cover bg-center bg-[url('/src/assets/main-banner.png')] opacity-50 p-10 w-full h-full">
                <h1 className="text-white text-6xl main-page-header mt-10">Balkan Nectar</h1>
                <h2 className="text-xl m-2">Where tradition meets the sweetness of nature.</h2>
                <button className="hex-btn">Shop now</button>
            </div>

            <h1 className="text-red">Main Page</h1>
        </main>
    )
}
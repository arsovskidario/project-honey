import { useNavigate } from 'react-router-dom'

import './ProductDiscovery.css'
export default function ProductDiscovery() {
    const navigate = useNavigate();

    const onClickHoneyPageHandler = () => {
        navigate("/honey");
    }

    const onClickPollenPageHandler = () => {
        navigate("/pollen");
    }

    const onClickGiftsPageHandler = () => {
        navigate("/gifts");
    }

    return (
        <section className='flex flex-col items-center justify-center'>
            <h1 className="text-4xl font-montserrat mt-10 text-center">Discover our products</h1>
            <div className='w-5/6 grid grid-cols-1 sm:w-4/6 sm:grid-cols-2 md:w-4/6 md:grid-cols-2 lg:w-4/6 lg:grid-cols-2 xl:w-4/6 xl:grid-cols-3 gap-2 mt-5'>
                <div
                    onClick={onClickHoneyPageHandler}
                    className='flex flex-col items-center bg-no-repeat bg-cover bg-center opacity-85 p-30 md:p-36 lg:p-36 xl:p-36 w-full h-full animation'
                    style={{ backgroundImage: `url('https://i.postimg.cc/KYWg6hq5/image.png')`, position: 'relative', zIndex: 1 }}>
                    <h1 className="text-white text-6xl  mt-10 text-center">Honey</h1>
                </div>

                <div
                    onClick={onClickPollenPageHandler}
                    className='flex flex-col items-center bg-no-repeat bg-cover bg-center opacity-85 p-30 md:p-36 lg:p-36 xl:p-36 w-full h-full animation'
                    style={{ backgroundImage: `url('https://i.postimg.cc/C5hYJzGr/image.png')`, position: 'relative', zIndex: 1 }}>
                    <h1 className="text-white text-6xl  mt-10 text-center">Pollen</h1>
                </div>

                <div
                    onClick={onClickGiftsPageHandler}
                    className='flex flex-col items-center bg-no-repeat bg-cover bg-center opacity-90 p-30 md:p-36 lg:p-36 xl:p-36 w-full h-full animation'
                    style={{ backgroundImage: `url('https://i.postimg.cc/wBgmHBFg/a-product-e-commerce-picture-of-honey-products-wra-upscaled.png')`, position: 'relative', zIndex: 1 }}>
                    <h1 className="text-white text-6xl  mt-10 text-center">Gifts</h1>
                </div>

            </div>
        </section>
    )
}
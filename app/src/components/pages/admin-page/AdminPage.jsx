import { useNavigate } from "react-router-dom"

export default function AdminPage() {
    const navigate = useNavigate();

    return <main className="flex flex-col items-center justify-center">
        <h1 className="mt-10 text-2xl">Admin panel</h1>
        <div className="flex md:flex-row flex-col items-center justify-around mt-10 w-5/6 bg-productWhite">

            <button
                onClick={() => navigate("orders")}
                className="md:w-1/6 w-1/3 p-5 m-3 text-white bg-cfb491 hover:bg-btnHover font-medium rounded-lg text-sm text-center ">
                Orders
            </button>

            <button
                onClick={() => navigate("users")}
                className="md:w-1/6 w-1/3 p-5 m-3 text-white bg-cfb491 hover:bg-btnHover font-medium rounded-lg text-sm text-center ">
                Users
            </button>

            <button
                onClick={() => navigate("products")}
                className="md:w-1/6 w-1/3 p-5 m-3 text-white bg-cfb491 hover:bg-btnHover font-medium rounded-lg text-sm text-center ">
                Products
            </button>
        </div>
    </main>
}
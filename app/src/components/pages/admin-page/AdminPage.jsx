import { useNavigate } from "react-router-dom"

import './AdminPage.css';
export default function AdminPage() {
    const navigate = useNavigate();

    return <main className="flex flex-col items-center justify-center">
        <h1 className="mt-10 text-2xl">Admin panel</h1>
        <div className="flex md:flex-row flex-col items-start justify-around mt-10 w-5/6 h-screen">

            <button
                onClick={() => navigate("orders")}
                className="btn">
                Orders
            </button>

            <button
                onClick={() => navigate("users")}
                className="btn">
                Users
            </button>

            <button
                onClick={() => navigate("products")}
                className="btn">
                Products
            </button>
        </div>
    </main>
}
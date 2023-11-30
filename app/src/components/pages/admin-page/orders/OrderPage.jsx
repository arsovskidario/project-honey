import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../../../services/orderService";
import OrderItem from "./OrderItem";

export function OrderPage() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllOrders();
        console.log(data);
        setOrders(oldOrders => data);
      } catch (error) {
        navigate(`/error?message=${ERROR_CODE.SERVICE_UNAVAILABLE}`);
      }
    }

    fetchData();
  }, [])

  return <main className="flex flex-col items-center justify-center">
    <h1 className="mt-10 text-2xl">Orders</h1>
    <div className="flex-col items-center justify-around mt-10 w-5/6 bg-productWhite">
      {orders.map(order =>
        <OrderItem key={order._id} {...order} />
      )}
    </div>
  </main>
}
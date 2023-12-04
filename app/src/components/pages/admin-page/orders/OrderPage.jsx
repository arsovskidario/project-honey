import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../../contexts/AuthContext";

import { deleteOrder, getAllOrders } from "../../../../services/orderService";
import OrderItem from "./OrderItem";

export default function OrderPage() {
  const navigate = useNavigate();

  const {accessToken} = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllOrders();
        setOrders(oldOrders => data);
      } catch (error) {
        navigate(`/error?message=${ERROR_CODE.SERVICE_UNAVAILABLE}`);
      }
    }

    fetchData();
  }, [])


  const completeOrderHandler = async (orderId) => {
      console.log('Will delete order: ' + orderId)
      try {
          await deleteOrder(orderId, accessToken);
          
          const updatedOrders = orders.filter(order => order._id !== orderId);
          setOrders(updatedOrders);

      }catch(error) {
        console.log("didnt delete order: " + orderId);
      }
  }

  return <main className="flex flex-col items-center justify-center">
    <h1 className="mt-10 text-2xl">Orders</h1>
    <div className="flex-col items-center justify-around mt-10 w-5/6 bg-productWhite">
      {orders.map(order =>
        <OrderItem key={order._id} {...order} completeOrderHandler={completeOrderHandler} />
      )}
    </div>
  </main>
}
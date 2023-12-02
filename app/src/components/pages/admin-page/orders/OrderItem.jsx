import { useEffect, useState } from "react";
import { convertTimestampToEUFormat } from "../../../../util/timeUtil";
import { getUserDetailsByUsername } from "../../../../services/authService";

const initialUserDetails = {
    fullName: '',
    phoneNumber: '',
    address: ''
}

export default function OrderItem({
    _id,
    _createdOn,
    items,
    username,
    orderMessage,
    totalPrice,
    completeOrderHandler
}) {

    const [userDetails, setUserDetails] = useState(initialUserDetails);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserDetailsByUsername(username);

            //TODO: Probs log when data is not available
            if (data.length > 0) {
                setUserDetails(data[0]);
            } 

            } catch (error) {
                console.log("failed to fetch user details " + error);
            }
        }

        fetchData();
    }, []);

    const submitComplete = () => {
        completeOrderHandler(_id);
    }

    return (
        <div className="p-8 flex-col md:justify-center md:items-center overflow-hidden bg-productWhite border border-gray-200 rounded-lg shadow">
            <h1 className="text-center font-bold">Order ID: #{_id}</h1>
            <h2 className="text-center">{convertTimestampToEUFormat(_createdOn)}</h2>
            <h2>Username: {username}</h2>
            <h2>Fullname: {userDetails.fullName}</h2>
            <h2>Phone number: {userDetails.phoneNumber}</h2>
            <h2>Address: {userDetails.address}</h2>

            <div className="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
                <div className="flex text-sm pt-1 px-1">
                    <span className="w-2/6 font-bold">Name</span>
                    <span className="w-2/6 font-bold text-right">Price</span>
                    <span className="w-2/6 font-bold text-right">Number</span>
                </div>


                {
                    items.map(item => (
                        <div key={item._id} className="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
                            <div className="flex justify-between text-sm">
                                <span className="w-2/6 truncate">{item.name}</span>
                                <span className="w-2/6 text-right">{item.price}</span>
                                <span className="w-2/6 text-right">{item.orderQuantity}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="text-xs">
                <div className="mb-1">Discount: </div>
                <div className="mb-52">Remark: {orderMessage}</div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={submitComplete}
                        className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-600">
                        Complete</button>
                    <div className="font-bold text-xl">Total: ${totalPrice}</div>
                </div>

            </div>
        </div>
    )
}
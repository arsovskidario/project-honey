import { convertTimestampToEUFormat } from "../../../../util/timeUtil";

export default function OrderItem({
    _id,
    _createdOn,
    items,
    username,
    orderMessage,
    totalPrice
}) {
    return (
        <div className="p-8 flex-col md:justify-center md:items-center overflow-hidden bg-productWhite border border-gray-200 rounded-lg shadow">
            <h1 className="text-center">Order ID: #{_id}</h1>
            <h2 className="text-center">{convertTimestampToEUFormat(_createdOn)}</h2>
            <h2>Username: {username}</h2>
            <h2>Fullname: </h2>
            <h2>Address:</h2>

            <div className="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
                <div className="flex text-sm pt-1 px-1">
                    <span className="w-2/6">Name</span>
                    <span className="w-2/6 text-right">Price</span>
                    <span className="w-2/6 text-right">Number</span>
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
                <div className="mb-1">Discount:</div>
                <div className="mb-52">Remark:{orderMessage}</div>
                <div className="text-right">
                    <div className="font-bold text-sm">Total: ${totalPrice}</div>
                </div>
            </div>
        </div>
    )
}
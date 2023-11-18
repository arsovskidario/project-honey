import { useState } from "react";

export default function ProductDetails({
    _id
}) {
    const [currentProduct, setCurrentProduct] = useState({});
    //TODO: Fetch product
    return (
        <h1>Id: {_id}</h1>
    );

}
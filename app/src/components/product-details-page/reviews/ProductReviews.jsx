import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useForm from "../../../hooks/useForm";

import { createProductReview, getProductReview } from "../../../services/productsService";
import { ERROR_CODE } from "../../constants/constants";

import AuthContext from "../../../contexts/AuthContext";


const initialFormState = {
    rating: 5,
    review: ""
}

export default function ProductReviews({
    _id
}) {
    const navigate = useNavigate();
    const { username, accessToken } = useContext(AuthContext)

    const [reviews, setReviews] = useState([]);

    const submitReview = () => {
        console.log('submit');
        if (username && username.trim() !== '') {
            const review = {
                userName: username,
                rating: formState.rating,
                comment: formState.review,
                productId: _id
            }
            console.log(`Review ${JSON.stringify(review)}`);

            createProductReview(review, accessToken).then((data) => {
                console.log(data);
                setReviews(oldReviews => [...oldReviews, data]);
                resetForm();
            }
            )

        } else {
            //TODO: add error validatiion for not logged in to add review
            console.log("must be logged in to review")
        }

    }

    const { formState, changeHandler, onSubmit, resetForm } = useForm(initialFormState, submitReview);

    useEffect(() => {
        getProductReview(_id).then(
            data => {
                setReviews(data);
            }
        ).catch(error => {
            if (error.message !== '404') {
                navigate(`/error?message=${ERROR_CODE.SERVICE_UNAVAILABLE}`)
            }
        }
        )
    }, [])

    const options = Array.from({ length: 5 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
            {i + 1}
        </option>
    ));


    return (
        <section id={`product-${_id}`} className="bg-productWhite mt-10 p-4">
            <h1 className="ml-6 mb-2">Product reviews</h1>
            <div id="reviews" className="flex flex-col justify-start pb-5 ml-10 border-4 border-white">
                {reviews.map(review => {
                    return <div key={review._id} className="flex flex-row mt-6">
                        <div className="ml-6 mt-1">
                            <h2>{review.userName}</h2>
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="text-starsBrown text-xs font-semibold px-2.5 py-0.5 roundedms-3 overflow-clip">{review.rating}</span>
                            </div>
                        </div>
                        <div className="w-1/2 mt-4 ml-20 bg-white">
                            <p className="p-4">{review.comment}</p>
                        </div>

                    </div>
                })}
            </div>


            <div id="add-review">
                <form id="order-preference"
                    className="mt-10 ml-4 mr-4"
                    onSubmit={onSubmit}>
                    <div id="rating" className="flex">
                        <label htmlFor="countries" className="m-1 block mb-2 text-sm font-medium text-starsBrown">Rating:</label>
                        <select id="rating"
                            name="rating"
                            value={formState.rating}
                            onChange={changeHandler}
                            className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg">
                            {options}
                        </select>
                    </div>

                    <textarea id="review"
                        name="review"
                        rows="4"
                        className="block p-2.5 w-full text-sm bg-productWhite rounded-lg border border-gray-300 "
                        placeholder="Leave a review here..."
                        value={formState.review}
                        onChange={changeHandler}
                    >
                    </textarea>
                    <button
                        className="mt-2 mb-2 p-2 text-white bg-cfb491 hover:bg-btnHover font-medium rounded-lg text-sm text-center overflow-clip">
                        Add review
                    </button>
                </form>

            </div>

        </section>
    );
}
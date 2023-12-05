import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import useForm from "../../../../../hooks/useForm";
import { createProduct, deleteProduct, editProductInfo } from "../../../../../services/productsService";
import AuthContext from "../../../../../contexts/AuthContext";
import { validateProduct, hasErrors, hasErrorInput } from "../../../../../util/validationUtil";

export default function ProductDetailsModal({
    operationType,
    productDetails,
    updateProductDetails,
    closeHandler
}) {
    const { accessToken } = useContext(AuthContext);
    const navigate = useNavigate();


    const deleteProductHandler = async () => {
        try {
            const response = await deleteProduct(productDetails._id, accessToken);
            navigate(`/admin/products`);
        }
        catch (error) {
            console.log('service unavailable');
        } finally {
            closeHandler();
        }
    }

    const submitHandler = async () => {

        const validationErrors = validateProduct(formState);
        addValidationErrors(validationErrors);
        if (!hasErrors(validationErrors)) {
            try {
                if (operationType === 'create') {
                    const response = await createProduct(formState, accessToken);
                    navigate(`/product-details/${response._id}`);

                } else if (operationType === 'update') {
                    console.log('update operatino')
                    const response = await editProductInfo(productDetails._id, formState, accessToken);

                    //TDOO: should update shopping cart item here
                    updateProductDetails(response);
                }

            } catch (error) {
                console.log('service unavailable');
            } finally {
                closeHandler();
            }
        }
    }
    const { formState, changeHandler, onSubmit, errors, addValidationErrors } = useForm(productDetails, submitHandler);

    return (
        <div
            className="backdrop-blur flex verflow-y-auto fixed z-50 justify-center items-center w-full inset-0 h-modal h-full">
            <div className="p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            Product details
                        </h3>
                        <button
                            onClick={closeHandler}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center -gray-600 -white" data-modal-toggle="updateProductModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                <input type="text" name="name" id="name"
                                    value={formState.name}
                                    onChange={changeHandler}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 -700 -600 -400 -primary-500 -primary-500" placeholder="Ex. Raw honey countryside" />

                                {hasErrorInput(errors, 'name') &&
                                    <div className="text-red-700 p-1 rounded relative" role="alert">
                                        <span className="block sm:inline">{errors.name}</span>
                                    </div>
                                }
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                                <input type="text" name="category" id="category"
                                    value={formState.category}
                                    onChange={changeHandler}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 -700 -600 -400 -primary-500 -primary-500" placeholder="Ex. honey" />
                                {hasErrorInput(errors, 'category') &&
                                    <div className="text-red-700 p-1 rounded relative" role="alert">
                                        <span className="block sm:inline">{errors.category}</span>
                                    </div>
                                }
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                                <input type="number" name="price" id="price"
                                    value={formState.price}
                                    onChange={changeHandler}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 -700 -600 -400 -primary-500 -primary-500" placeholder="$10" />
                                {hasErrorInput(errors, 'price') &&
                                    <div className="text-red-700 p-1 rounded relative" role="alert">
                                        <span className="block sm:inline">{errors.price}</span>
                                    </div>
                                }
                            </div>
                            <div>
                                <label htmlFor="imgUrl" className="block mb-2 text-sm font-medium text-gray-900 ">Image url</label>
                                <input type="text" name="imgUrl" id="imgUrl"
                                    value={formState.imgUrl}
                                    onChange={changeHandler}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 -700 -600 -400 -primary-500 -primary-500" placeholder="imgUrl" />
                                {hasErrorInput(errors, 'imgUrl') &&
                                    <div className="text-red-700 p-1 rounded relative" role="alert">
                                        <span className="block sm:inline">{errors.imgUrl}</span>
                                    </div>
                                }
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                <textarea id="description" rows="5"
                                    name="description"
                                    value={formState.description}
                                    onChange={changeHandler}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 -700 -600 -400 -primary-500 -primary-500" placeholder="Write a description..."></textarea>
                                {hasErrorInput(errors, 'description') &&
                                    <div className="text-red-700 p-1 rounded relative" role="alert">
                                        <span className="block sm:inline">{errors.description}</span>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                type="submit"
                                className="text-sm px-5 py-2.5 text-center inline-flex items-center text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-600">
                                <svg className="fill-white mr-1 -ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                    viewBox="0 0 50 50">
                                    <path
                                        d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z">
                                    </path>
                                </svg>
                                <span> {operationType === 'create' ? 'Create' : 'Edit'}</span></button>

                            {operationType === 'create' ?
                                (<button type="button"
                                    onClick={closeHandler}
                                    className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <svg className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                    Cancel
                                </button>)
                                : (<button type="button"
                                    onClick={deleteProductHandler}
                                    className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <svg className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                    Delete
                                </button>)}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
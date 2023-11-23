import { useContext, useState } from "react";

import AuthContext from "../../../contexts/AuthContext";
import useForm from "../../../hooks/useForm";
import { registerUser } from "../../../services/authService";

const initialUserDetails = {
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: ''

}
export default function RegisterForm() {

    const {login} = useContext(AuthContext);

    const [errors, setErrors] = useState('');

    const extractUsernameFromEmail = (email) => {
        const regex = /^([^\s@]+)@/;
        const match = email.match(regex);
        return match[1];
    }

    const registerUserHandler = () => {
        console.log(`Sending ` + formState);
        registerUser(formState).then(
            data => {
                login(extractUsernameFromEmail(data.email), data.accessToken)
            }
        );

    }
    const { formState, changeHandler, onSubmit } = useForm(initialUserDetails, registerUserHandler);

    const validateEmailHandler = () => {

    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mt-20 lg:py-0">
            <h1 className="text-4xl mb-2">Register</h1>
            <div className="w-full bg-productWhite rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Sign up
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input
                                name="email"
                                id="email"
                                placeholder="name@email.com"
                                value={formState.email}
                                onChange={changeHandler}
                                onBlur={validateEmailHandler}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                            <input
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                value={formState.password}
                                onChange={changeHandler}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />

                        </div>

                        <div>
                            <label htmlFor="passwordConfirmation" className="block mb-2 text-sm font-medium">Confirm password</label>
                            <input
                                name="passwordConfirmation"
                                id="passwordConfirmation"
                                placeholder="••••••••"
                                value={formState.passwordConfirmation}
                                onChange={changeHandler}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>

                        <div id="personal data">
                            <h1 className="font-bold">Personal information</h1>
                            <div className="flex">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First name</label>
                                    <input
                                        name="firstName"
                                        id="firstName"
                                        placeholder="First name"
                                        value={formState.firstName}
                                        onChange={changeHandler}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last name</label>
                                    <input
                                        name="lastName"
                                        id="lastName"
                                        placeholder="Last name"
                                        value={formState.lastName}
                                        onChange={changeHandler}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium">Phone number</label>
                                <input
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="Phone number"
                                    value={formState.phoneNumber}
                                    onChange={changeHandler}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium">Address</label>
                                <input
                                    name="address"
                                    id="address"
                                    placeholder="Address"
                                    value={formState.address}
                                    onChange={changeHandler}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block mb-2 text-sm font-medium">City</label>
                                <input
                                    name="city"
                                    id="city"
                                    placeholder="City"
                                    value={formState.city}
                                    onChange={changeHandler}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                />
                            </div>

                        </div>

                        {errors.length !== 0
                            && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <span class="block sm:inline">{errors}</span>
                                <span
                                    class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                </span>
                            </div>
                        }

                        <button
                            type="submit"
                            className="w-full text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm px-5 py-2.5 text-center overflow-clip">
                            Sign up
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}
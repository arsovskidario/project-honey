
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../services/authService";

const initalLoginDetails = {
    email: "",
    password: ""
}
export default function LoginForm() {
    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState(initalLoginDetails);
    const [errors, setErrors] = useState('');

    const detailsChangeHandler = (e) => {
        initalLoginDetails[e.target.name] = e.target.value;

        setLoginDetails(details => ({
            ...details,
            [e.target.name]: e.target.value
        }))
    }


    const loginUserHandler = (e) => {
        e.preventDefault();
        console.log('clicked')
        if (loginDetails.email.length === 0 || loginDetails.password.length === 0) {
            setErrors("Invalid input");
            return;
        }

        loginUser({
            email: loginDetails.email,
            password: loginDetails.password
        })
            .then(
                data => {
                    console.log(data);
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('username', data.username)
                    navigate('/');
                }
            )
            .catch(error => {
                console.log(error.message)
                if (error.message !== "403") {
                    navigate(`/error?message=${error.message}`)
                }

                setErrors("Login or password don't match");
            }
            )
    }

    const validateEmailHandler = () => {
        //TODO: Email validation here
        //create validation service for multiple validation
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mt-20 lg:py-0">
            <h1 className="text-4xl mb-2">Login</h1>
            <div className="w-full bg-productWhite rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={loginUserHandler}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input
                                name="email"
                                id="email"
                                placeholder="name@email.com"
                                value={loginDetails.email}
                                onChange={detailsChangeHandler}
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
                                value={loginDetails.password}
                                onChange={detailsChangeHandler}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</span>
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

                        <button type="submit" className="w-full text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm px-5 py-2.5 text-center overflow-clip">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
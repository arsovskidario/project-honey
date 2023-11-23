
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import useForm from "../../../hooks/useForm";
import { loginUser } from "../../../services/authService";
import AuthContext from "../../../contexts/AuthContext";

const initalLoginDetails = {
    email: "",
    password: ""
}
export default function LoginForm() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginUserHandler = (e) => {
        console.log('clicked')
        if (formState.email.length === 0 || formState.password.length === 0) {
            setErrors("Invalid input");
            return;
        }

        loginUser({
            email: formState.email,
            password: formState.password
        })
            .then(
                data => {
                    console.log(data);
                    login(data.username, data.accessToken);
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

    const { formState, changeHandler, onSubmit } = useForm(initalLoginDetails, loginUserHandler);
    const [errors, setErrors] = useState('');

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
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</span>
                        </div>

                        {errors.length !== 0
                            && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{errors}</span>
                                <span
                                    className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                </span>
                            </div>
                        }

                        <button type="submit" className="w-full text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm px-5 py-2.5 text-center overflow-clip">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account yet? <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
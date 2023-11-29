
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/AuthContext";

import { loginUser } from "../../../services/authService";

import { extractUsernameFromEmail } from "../../../util/emailUtil";
import { hasErrorInput, hasErrors, validateFields } from "../../../util/validationUtil";

import './Form.css';

const initalLoginDetails = {
    email: "",
    loginPassword: ""
}
export default function LoginForm() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginUserHandler = () => {
        const validationErrors = validateFields(formState);
        addValidationErrors(validationErrors);
        console.log(validationErrors)
        if (!hasErrors(validationErrors)) {

            loginUser({
                email: formState.email,
                password: formState.loginPassword
            })
                .then(
                    data => {
                        login(extractUsernameFromEmail(data.email), data.accessToken);
                    }
                )
                .catch(error => {
                    if (error.message === "403") {
                        addValidationErrors({ 'credentials': 'Incorrect username or password.' })
                        console.log(error.message)
                    } else {
                        navigate(`/error?message=${error.message}`)
                    }
                }
                )
        }
    }

    const { formState, changeHandler, onSubmit, errors, addValidationErrors } = useForm(initalLoginDetails, loginUserHandler);

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
                                className={
                                    hasErrorInput(errors, 'email')
                                        ? 'input-error'
                                        : 'input-field'
                                }
                            />

                            {hasErrorInput(errors, 'email') &&
                                <div className="text-red-700 p-1 rounded relative" role="alert">
                                    <span className="block sm:inline">{errors.email}</span>
                                </div>
                            }
                        </div>
                        <div>
                            <label htmlFor="loginPassword" className="block mb-2 text-sm font-medium">Password</label>
                            <input
                                name="loginPassword"
                                id="loginPassword"
                                placeholder="••••••••"
                                value={formState.loginPassword}
                                onChange={changeHandler}
                                className={
                                    hasErrorInput(errors, 'loginPassword')
                                        ? 'input-error'
                                        : 'input-field'
                                }
                            />

                            {hasErrorInput(errors, 'loginPassword') &&
                                <div className="text-red-700 p-1 rounded relative" role="alert">
                                    <span className="block sm:inline">{errors.loginPassword}</span>
                                </div>
                            }
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</span>
                        </div>

                        {hasErrorInput(errors, 'credentials') &&
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{errors.credentials}</span>
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
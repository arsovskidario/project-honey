import { useContext } from "react";

import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/AuthContext";

import { registerUser } from "../../../services/authService";

import { extractUsernameFromEmail } from "../../../util/emailUtil";
import { hasErrorInput, hasErrors, validateFields } from "../../../util/validationUtil";

import './Form.css';

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

    const registerUserHandler = async () => {
        const validationErrors = validateFields(formState);
        addValidationErrors(validationErrors);

        if (!hasErrors(validationErrors)) {
            try {
                const data = await registerUser(formState);
                login(extractUsernameFromEmail(data.email), data.accessToken);
            } catch (error) {
                if (error.message === "409") {
                    addValidationErrors({ 'credentials': 'User is already registered!' });
                } else {
                    navigate(`/error?message=${error.message}`);
                }
            }
        }

    }

    const { formState, changeHandler, onSubmit, errors, addValidationErrors } = useForm(initialUserDetails, registerUserHandler);

    const { login } = useContext(AuthContext);

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
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                            <input
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                value={formState.password}
                                onChange={changeHandler}
                                className={
                                    hasErrorInput(errors, 'password')
                                        ? 'input-error'
                                        : 'input-field'
                                }
                            />
                            {hasErrorInput(errors, 'password') &&
                                <div className="text-red-700 p-1 rounded relative" role="alert">
                                    <span className="block sm:inline">{errors.password}</span>
                                </div>
                            }


                        </div>

                        <div>
                            <label htmlFor="passwordConfirmation" className="block mb-2 text-sm font-medium">Confirm password</label>
                            <input
                                name="passwordConfirmation"
                                id="passwordConfirmation"
                                placeholder="••••••••"
                                value={formState.passwordConfirmation}
                                onChange={changeHandler}
                                className={
                                    hasErrorInput(errors, 'passwordConfirmation')
                                        ? 'input-error'
                                        : 'input-field'
                                }
                            />

                            {hasErrorInput(errors, 'passwordConfirmation') &&
                                <div className="text-red-700 p-1 rounded relative" role="alert">
                                    <span className="block sm:inline">{errors.passwordConfirmation}</span>
                                </div>
                            }
                        </div>

                        <div id="personal data">
                            <h1 className="font-bold">Personal information</h1>
                            <div id="name-section" className="flex">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First name</label>
                                    <input
                                        name="firstName"
                                        id="firstName"
                                        placeholder="First name"
                                        value={formState.firstName}
                                        onChange={changeHandler}
                                        className={
                                            hasErrorInput(errors, 'firstName')
                                                ? 'input-error'
                                                : 'input-field'
                                        }
                                    />
                                    {hasErrorInput(errors, 'firstName') &&
                                        <div className="text-red-700 p-1 rounded relative" role="alert">
                                            <span className="block sm:inline">{errors.firstName}</span>
                                        </div>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last name</label>
                                    <input
                                        name="lastName"
                                        id="lastName"
                                        placeholder="Last name"
                                        value={formState.lastName}
                                        onChange={changeHandler}
                                        className={
                                            hasErrorInput(errors, 'lastName')
                                                ? 'input-error'
                                                : 'input-field'
                                        }
                                    />
                                    {hasErrorInput(errors, 'lastName') &&
                                        <div className="text-red-700 p-1 rounded relative" role="alert">
                                            <span className="block sm:inline">{errors.lastName}</span>
                                        </div>
                                    }
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
                                    className={
                                        hasErrorInput(errors, 'phoneNumber')
                                            ? 'input-error'
                                            : 'input-field'
                                    }
                                />

                                {hasErrorInput(errors, 'phoneNumber') &&
                                    <div className="text-red-700 p-1 rounded relative" role="alert">
                                        <span className="block sm:inline">{errors.phoneNumber}</span>
                                    </div>
                                }
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium">Address</label>
                                <input
                                    name="address"
                                    id="address"
                                    placeholder="Address"
                                    value={formState.address}
                                    onChange={changeHandler}
                                    className={
                                        hasErrorInput(errors, 'address')
                                            ? 'input-error'
                                            : 'input-field'
                                    }
                                />
                                {hasErrorInput(errors, 'address') &&
                                    <div className="text-red-700 p-1 rounded relative" role="alert">
                                        <span className="block sm:inline">{errors.address}</span>
                                    </div>
                                }
                            </div>
                            <div>
                                <label htmlFor="city" className="block mb-2 text-sm font-medium">City</label>
                                <input
                                    name="city"
                                    id="city"
                                    placeholder="City"
                                    value={formState.city}
                                    onChange={changeHandler}
                                    className={
                                        hasErrorInput(errors, 'city')
                                            ? 'input-error'
                                            : 'input-field'
                                    }
                                />
                            </div>

                            {hasErrorInput(errors, 'city') &&
                                <div className="text-red-700 p-1 rounded relative" role="alert">
                                    <span className="block sm:inline">{errors.city}</span>
                                </div>
                            }

                        </div>

                        {hasErrorInput(errors, 'credentials') &&
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{errors.credentials}</span>
                            </div>

                        }
                        
                        <button
                            type="submit"
                            className="w-full text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm px-5 py-2.5 text-center overflow-clip"
                        >
                            Sign up
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}
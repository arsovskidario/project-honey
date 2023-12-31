import './Newsletter.css'

import useForm from '../../../../hooks/useForm';
import { hasErrors, hasErrorInput, validateFields } from '../../../../util/validationUtil';
import { createSubscription } from '../../../../services/newsletterService';

export default function NewsLetter() {
    const submitHandler = async () => {
        const validationErrors = validateFields(formState);
        addValidationErrors(validationErrors);
        console.log(validationErrors);
        if (!hasErrors(validationErrors)) {
            try {
                const data = await createSubscription({
                    email: formState.email,
                });
                addValidationErrors({'email':'Subscribed to newsletter!'})

                console.log(data);
            } catch (error) {
                if (error.message === "403") {
                    addValidationErrors({ 'email': 'Please try again later.' });
                } else {
                    navigate(`/error?message=${ERROR_CODE.SERVICE_UNAVAILABLE}`);
                }
            }
        }

    }

    const { formState, changeHandler, onSubmit, errors, addValidationErrors } = useForm({ email: '' }, submitHandler);

    return (
        <section id="newsletter" className="w-full newsletter-bg mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div
                className="relative isolate overflow-hidden px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">

                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Newsletter
                </h2>

                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-50">
                    We promise to sweeten your inbox responsibly.
                </p>

                <form onSubmit={onSubmit} className="flex flex-col mx-auto mt-10 max-w-md">
                    <div className='flex gap-x-4'>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address"
                            name="email"
                            value={formState.email}
                            onChange={changeHandler}
                            className="min-w-0 flex-auto rounded-md border-0 bg-stone-100 px-3.5 py-2  placeholder-gray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" />
                        <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Sign up</button>

                    </div>
                    {hasErrorInput(errors, 'email') &&
                        <div className="text-white rounded relative" role="alert">
                            <span className="block sm:inline">{errors.email}</span>
                        </div>
                    }
                </form>


            </div>
        </section>
    )
}
import { useState } from "react";

export default function useForm(initialState, submitHandler) {
    const [formState, setFormState] = useState(initialState);

    const changeHandler = (e) => {
        setFormState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler();
    }

    const resetForm = () => {
        setFormState(initialState);
    }

    return {
        formState,
        changeHandler,
        onSubmit,
        resetForm
    }

}
import { useState } from "react";

export default function useForm(initialState, submitHandler) {
    const [errors, setErrors] = useState({});
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

    const addValidationErrors = (validationErrors) => {
        setErrors(oldErrors => validationErrors);
    }

    return {
        formState,
        changeHandler,
        onSubmit,
        resetForm,
        errors,
        addValidationErrors
    }

}
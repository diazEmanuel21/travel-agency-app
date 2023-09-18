import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
        createValidators();
    }, [formState]);

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value, checked } = target;

        if (name === "numberBedRooms" && (parseInt(value) > 5 || parseInt(value) < 1)) return;
        if (name === "rate" && (parseInt(value) > 5 || parseInt(value) < 1)) return;

        const isSwitch =  name === ('state') || name === ('wifi') || name === ('pool') || name === ('restaurant');
        const resSwitch = isSwitch && checked && true;

        setFormState({
            ...formState,
            [name]: isSwitch ? resSwitch : value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {
        const formCheckValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'Este campo es requerido.'] = formValidations[formField]

            formCheckValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { url } from '../../../utils/utils';


const initialValues = { name: '', email: '', message: '' }

const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    } else if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
        errors.email = 'Invalid email format';
    } else if (!values.message) {
        errors.message = 'A message is required'
    }

    return errors;
}

export const useFormikForm = ({ dispatch }) => {

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => handleSubmit(values)
    })

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            let response = await fetch(`${url}/send-message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(values)
            });
            let result = await response.json();
            dispatch({ type: 'SET_ERROR', payload: false });
            dispatch({ type: 'SET_MESSAGE', payload: result.message });
        } catch (error) {
            dispatch({ type: 'SET_MESSAGE', payload: error.message });
            dispatch({ type: 'SET_ERROR', payload: true });
        }


        dispatch({ type: 'SET_OPEN_MODAL', payload: true });
        setLoading(false);
    };

    useEffect(() => {
        return () => dispatch({ type: 'CLEAR' });
    }, [])

    return { formik, loading };

}
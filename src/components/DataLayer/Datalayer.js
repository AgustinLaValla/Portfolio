import React, { createContext, useReducer, useContext } from 'react';

const FormContext = createContext();

const initialState = {
    loading: false,
    openModal: false,
    message: null,
    error: false
}

const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_OPEN_MODAL':
            return {
                ...state,
                openModal: action.payload
            }
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'CLEAR':
            return {
                ...initialState
            }
    }
}

const Datalayer = ({ children }) => {
    return (
        <FormContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </FormContext.Provider>
    )
}

export default Datalayer;

export const useDataLayer = () => useContext(FormContext);
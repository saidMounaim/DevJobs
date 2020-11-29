import React, { createContext, useReducer, useContext } from 'react';

// Create Context
export const GlobalContext = createContext();

// Build Provider
export const GlobalProvider = ({ initialState, AppReducer, children }) => {
	return <GlobalContext.Provider value={useReducer(AppReducer, initialState)}>{children}</GlobalContext.Provider>;
};

// GLOBAL VALUE
export const useGlobalValue = () => useContext(GlobalContext);

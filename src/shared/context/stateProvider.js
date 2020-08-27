import React, { createContext, useContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// build a provider wrap our entire app to this provide

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use inside of a component
export const useStateValue = () => useContext(StateContext);

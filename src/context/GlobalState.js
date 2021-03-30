import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  teams: [
    {
      id: 1,
      name: "Sammy",
      location: "DigitalOcean",
      designation: "Shark"
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addTeam(team) {
    dispatch({
      type: "ADD_TEAM",
      payload: team
    });
  }

  function editTeam(team) {
    dispatch({
      type: "EDIT_TEAM",
      payload: team
    });
  }

  function removeTeam(id) {
    dispatch({
      type: "REMOVE_TEAM",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.teams,
        addTeam,
        editTeam,
        removeTeam
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
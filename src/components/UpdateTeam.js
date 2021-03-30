import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const UpdateTeam = (route) => {
  let history = useHistory();

  const { teams, editTeam } = useContext(GlobalContext);

  const [selectedTeam, setSelectedTeam] = useState({
    id: null,
    name: "",
    description: "",
  });

  const currentTeamId = route.match.params.id;

  useEffect(() => {
    const teamId = currentTeamId;
    const selectedTeam = teams.find(
      (currentTeamTraversal) => currentTeamTraversal.id === parseInt(teamId)
    );
    setSelectedTeam(selectedTeam);
  }, [currentTeamId, teams]);

  const onSubmit = (e) => {
    e.preventDefault();
    editTeam(selectedTeam);
    history.push("/");
  };

  const handleOnChange = (teamKey, newValue) =>
    setSelectedTeam({ ...selectedTeam, [teamKey]: newValue });

  if (!selectedTeam || !selectedTeam.id) {
    return <div>Invalid Team ID.</div>;
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Team Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedTeam.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter team name"
            />
          </div>
          
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedTeam.description}
              onChange={(e) => handleOnChange("description", e.target.value)}
              type="text"
              placeholder="Enter team description"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Employee
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
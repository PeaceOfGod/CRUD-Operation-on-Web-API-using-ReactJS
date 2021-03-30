import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const AddTeam = () => {
  let history = useHistory();

  const { addTeam, teams } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzA3Nzc0Mi00ODdhLTQ4MjYtYTRjNi04ZjAzOTkzYjk2YjAiLCJqdGkiOiJmOWY4Mzg0NDEwMjZkZDU3NmJkN2MxY2VjZTg3ZDk0NjVmZjQ1Y2ViMDc0OTEzNDk4NTZlYTJiODFjYTczMmJiZDU0ZTNkODA5OTdhMGM3YiIsImlhdCI6MTYxNjY3MTIyOS42NDgsIm5iZiI6MTYxNjY3MTIyOS42NDgwMDcsImV4cCI6MTY0ODIwNzIyOS42MzkxNzksInN1YiI6IjEiLCJzY29wZXMiOlsiQWRtaW4iXX0.KO8tENJWz9NxS_L6GbegBknAx4nS_v8mBAZjSJ82LyZm4DlhwrSjrp0yBid4wlPVVcc5lpohpvJh1M44mfsk1w07nJNfo43JXoqBgIObKqL2jxdni8mdLDRlNl77n_9Z1hWV6fWt5pLqJyeV4TF_VeSjUTwiVe7Rl2molXkxmCU6o4UNRRaDt442NDbaRU8ahFB_nL305-b8Zv4Srfo0rRkTD1Li3Xg9-6ZGK1Fc8YvnHkTxpo0LkB6wSI73998PmiGfixgt8S-9Ugip-WYYYjWSztYLmTZOVLylInkwwz0qZfQHLQbAL7Fcckh2HrG8iSbwwXLLEPp5dhcTPTU5pLPM4nkxt9rQ9OkXA6f1JIueBDPbuyBcsJZz9tjLz8Ji5_q6z_oYMQy0WUMxw65ldd0WR6oIb1CYLdOufrWserU-anIfPnr1ZYtl8zlf5gFOumVY-mjVexmg0uRvAJonJoLFsSMb6okvhUNmgGmRYJ4Pk-SRZIX_wT4nR4r_Nu0U7IoFhSDyRwVwbaMjFV4n1yLbkyary1DAmkeNVomGyjxrd_p0DdtVhu8Y4DssTZOL6rw-xTEZO2xCl6TIbZKMRxzqJWoC2Ss_ynnAshdGYEB7XPbJSZuhlUlp4rs-batH_8x3aR0KcybXpgaG3aF9Jq-JZ61n4vfkt5l51CBBd4Q";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch ("http://104.131.85.93/api/v1/super/teams/create", {
      method: "POST",
      header: {
        'Content-Type': "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${TOKEN}`,
      },
      body: {
        id: teams.id + 1,
        name: teams.name,
        description: teams.description
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    })    
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Team Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter team name"
            />
          </div>
          
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Enter team description"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Team
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
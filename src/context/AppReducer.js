export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_TEAM":
        return {
          ...state,
          employees: [...state.teams, action.payload],
        };
  
      case "EDIT_TEAM":
        const updatedTeam = action.payload;
  
        const updatedTeams = state.teams.map((team) => {
          if (team.id === updatedTeam.id) {
            return updatedTeam;
          }
          return team;
        });
  
        return {
          ...state,
          employees: updatedTeams,
        };
  
      case "REMOVE_TEAM":
        return {
          ...state,
          teams: state.teams.filter(
            (team) => team.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };
import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Table } from "./components/Table";
import { GlobalProvider } from './context/GlobalState';

//import { Home } from './components/Home';
import { AddTeam } from './components/AddTeam';
//import { UpdateTeam } from './components/UpdateTeam';
import "bootstrap/dist/css/bootstrap.min.css";

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzA3Nzc0Mi00ODdhLTQ4MjYtYTRjNi04ZjAzOTkzYjk2YjAiLCJqdGkiOiJmOWY4Mzg0NDEwMjZkZDU3NmJkN2MxY2VjZTg3ZDk0NjVmZjQ1Y2ViMDc0OTEzNDk4NTZlYTJiODFjYTczMmJiZDU0ZTNkODA5OTdhMGM3YiIsImlhdCI6MTYxNjY3MTIyOS42NDgsIm5iZiI6MTYxNjY3MTIyOS42NDgwMDcsImV4cCI6MTY0ODIwNzIyOS42MzkxNzksInN1YiI6IjEiLCJzY29wZXMiOlsiQWRtaW4iXX0.KO8tENJWz9NxS_L6GbegBknAx4nS_v8mBAZjSJ82LyZm4DlhwrSjrp0yBid4wlPVVcc5lpohpvJh1M44mfsk1w07nJNfo43JXoqBgIObKqL2jxdni8mdLDRlNl77n_9Z1hWV6fWt5pLqJyeV4TF_VeSjUTwiVe7Rl2molXkxmCU6o4UNRRaDt442NDbaRU8ahFB_nL305-b8Zv4Srfo0rRkTD1Li3Xg9-6ZGK1Fc8YvnHkTxpo0LkB6wSI73998PmiGfixgt8S-9Ugip-WYYYjWSztYLmTZOVLylInkwwz0qZfQHLQbAL7Fcckh2HrG8iSbwwXLLEPp5dhcTPTU5pLPM4nkxt9rQ9OkXA6f1JIueBDPbuyBcsJZz9tjLz8Ji5_q6z_oYMQy0WUMxw65ldd0WR6oIb1CYLdOufrWserU-anIfPnr1ZYtl8zlf5gFOumVY-mjVexmg0uRvAJonJoLFsSMb6okvhUNmgGmRYJ4Pk-SRZIX_wT4nR4r_Nu0U7IoFhSDyRwVwbaMjFV4n1yLbkyary1DAmkeNVomGyjxrd_p0DdtVhu8Y4DssTZOL6rw-xTEZO2xCl6TIbZKMRxzqJWoC2Ss_ynnAshdGYEB7XPbJSZuhlUlp4rs-batH_8x3aR0KcybXpgaG3aF9Jq-JZ61n4vfkt5l51CBBd4Q";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    fetch("http://104.131.85.93/api/v1/super/teams/list/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Res...", res);
        this.setState({ teams: res.data })
      })
  }
  render() {
    return (
      <GlobalProvider>
        <div className="App">
          <Table teams={this.state.teams} />
        </div>

        <Switch>
          <Route path="/add" component={AddTeam}> AddTeam </Route>          
        </Switch> 
      </GlobalProvider>
    );
  }
}

export default App;


          // <Route path="/" component={Home}> Home </Route> 
          // <Route path="/edit/:id" component={UpdateTeam}> UpdateTeam </Route>
import './App.css';
import Game from './screens/Game';
import Menu from './screens/Menu';
import Ranking from './screens/Ranking';
import Iniciar from './screens/Iniciar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/iniciar">
            <Iniciar />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

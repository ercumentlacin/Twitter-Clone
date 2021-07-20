import Enter from 'pages/Enter';
import Home from 'pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Enter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

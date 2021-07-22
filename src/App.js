import Enter from 'pages/Enter';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  const { user } = useSelector((state) => state);
  console.log(user);

  return (
    <Router>
      <Switch>
        {!user.user ? (
          <>
            <Route exact path="/">
              <Enter />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Redirect to="/" />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;

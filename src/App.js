import Enter from 'pages/Enter';
import Home from 'pages/Home';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  const {
    user: { user },
  } = useSelector((state) => state);
  console.log(user);
  return (
    <Router>
      <Switch>
        {!user ? (
          <>
            <Route path="/">
              <Enter />
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
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;

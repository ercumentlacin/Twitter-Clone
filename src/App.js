import Enter from 'pages/Enter';
import Home from 'pages/Home';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import store from 'store';

function App() {
  const { user } = useSelector((state) => state);
  console.log(user);
  console.log(store.getState().user);

  return (
    <Router>
      <Switch>
        {!user.user ? (
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

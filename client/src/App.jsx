import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Login, Register } from './components/auth';
import { Alert, Landing, Navbar } from './components/layout';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Alert />
        <Switch>
          <section className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </section>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

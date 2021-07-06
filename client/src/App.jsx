import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Login, Register } from './components/auth';
import { Landing, Navbar } from './components/layout';
import store from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;

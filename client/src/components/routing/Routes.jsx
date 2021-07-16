import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './';
import { Login, Register } from '../auth';
import { Alert, NotFound } from '../layout';
import { Dashboard } from '../dashboard';
import { Profiles } from '../profiles';
import { Profile } from '../profile';
import { AddEducation, AddExperience, ProfileForm } from '../profile-form';
import { Posts } from '../posts';
import { Post } from '../post';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import ReactStormpath, { Router, AuthenticatedRoute, LoginRoute} from 'react-stormpath';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import Main from './Pages/Main'
import NewUserForm from './Pages/NewUserForm'
// ReactStormpath.init({
//   endpoints: {
//     baseUri: 'https://unique-day.apps.stormpath.io'
//   }
// });

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
        <IndexRoute component={Main} />
        <Route path='/user/new' component={NewUserForm} />

    <Route path='/main' component={Main} />
    {/*<Route path='/register' component={RegistrationPage} />*/}
    {/*<LoginRoute path='/login' component={LoginPage} />*/}
    
    </Route>
    
  </Router>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

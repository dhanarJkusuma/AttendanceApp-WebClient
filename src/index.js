import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';


import DashboardMain from './pages/DashboardMain';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Kloter from './pages/Kloter';
import Lokasi from './pages/Lokasi';
import Peserta from './pages/Peserta';
import User from './pages/User';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';

const router = (
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route path="/" component={Main}>
                <IndexRoute component={Login}></IndexRoute>
                <Route component={DashboardMain}>
                    <Route path="dashboard" component={Dashboard}></Route>
                    <Route path="kloter" component={Kloter}></Route>
                    <Route path="lokasi" component={Lokasi}></Route>
                    <Route path="peserta" component={Peserta}></Route>
                    <Route path="user" component={User}></Route>
                    <Route path="password" component={ChangePassword}></Route>
                </Route>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(
    router,
  document.getElementById('root')
);

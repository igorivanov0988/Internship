import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

import './App.css'

import LoginPage from "./containers/LoginPage";
import SingPage from "./containers/SignPage";
import ForgotYourPasswordPage from "./containers/ForgotYourPassword";
import CreatePostPage from "./containers/CreatePostPage";
import CalendarPage from "./containers/Calendar";
import StatisticsPage from "./containers/Statistics";
import ArchivePage from "./containers/Archive";
// import Drawer from "../src/components/DrawerContainer/index"
// import LinkAccountsScreen from "../src/containers/CreatePostScreens/LinkAccountScreen/LinkAccountsScreen";

import { store } from "./store";

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <div className="app">
                <Router>
                    <Switch>
                        <Route path='/Login' component={LoginPage}/>
                        <Route path='/Sing' component={SingPage}/>
                        <Route path='/ForgotYourPassword' component={ForgotYourPasswordPage}/>
                        <Route path='/CreatePostPage'  component={CreatePostPage}/>
                        <Route path='/Calendar' component={CalendarPage}/>
                        <Route path='/Statistics' component={StatisticsPage}/>
                        <Route path='/Archive' component={ArchivePage}/>
                        {/*<Route path='/Drawer' component={Drawer}/>*/}
                        {/*<Route path='/LinkAccountsScreen' component={LinkAccountsScreen}/>*/}

                        <Route component={LoginPage}/>
                    </Switch>
                </Router>
            </div>
        </Provider>
        );
    }
}

export default App
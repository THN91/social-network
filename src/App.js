import React from 'react';
import {Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state}/>
            <div className="app-wrapper-content">
                <Route
                    path='/profile'
                    render={() => <Profile
                        state={props.state}
                        dispatch={props.dispatch}
                    />}/>
                <Route
                    path='/dialogs'
                    render={() => <DialogContainer
                        state={props.state}
                        dispatch={props.dispatch}
                    />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
};

export default App;

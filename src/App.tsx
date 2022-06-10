import React from "react";
import './App.css';
import { Profile } from "./components/Profile/Profile";
import { NavBar } from "./components/Nav/NavBar";
import { HashRouter, Route} from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/Login";


type AppProps= {
    // // dispatch: (action: ActionTypes)=>void
      //store:RootStoreType
}



function App(props:AppProps) {

    return (
        <HashRouter>
            <div className="app-wrapper  ">

                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={()=><DialogsContainer />} />
                    <Route path='/profile/:userId?' render={()=><Profile/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/login' render={()=><LoginPage/>}/>
                </div>
            </div>
        </HashRouter>

    );
}


export default App;
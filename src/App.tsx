import React, {memo, useEffect} from "react";
import './App.css';
import { Profile } from "./components/Profile/Profile";
import { NavBar } from "./components/Nav/NavBar";
import {HashRouter, Route} from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import LoginPageContainer from "./components/LoginPage/Login";
import {useSelector} from "react-redux";
import {RootStoreType} from "./data/Store-Redux";
import {CircularProgress} from "@mui/material";
import {useAppDispatch} from "./data/Profile-reducer";
import {LoginUserTC} from "./data/auth-reducer";
import {SuccsessfulInitTC} from "./data/app-reducer";




const App = memo(function () {

    const dispatch=useAppDispatch()
    let isInitialized= useSelector<RootStoreType, boolean>(state => state.InitializeApp.initialized)


    useEffect(() => {
  dispatch(LoginUserTC())
        .then(()=>{
            dispatch(SuccsessfulInitTC())
        })

    }, [])


    return (
        !isInitialized? <CircularProgress/>
            :
        <HashRouter>
            <div className="app-wrapper  ">

                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={()=><Profile/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/login' render={()=><LoginPageContainer/>}/>
                </div>
            </div>
        </HashRouter>

    );
})


export default App;
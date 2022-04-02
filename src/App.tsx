import React, {useState} from "react";
import './App.css';
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Dialogs } from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import {v1} from "uuid";

export type DialogType={
    id:string
    name:string
}
export type MessageType={
    id:string
    title:string
}
export type PostType={
    id:string
    message:string
    value:number
}

type AppProps= {
    state:{
           DialogsPage: {DialogsData:Array<DialogType>, MessagesData:Array<MessageType>},
           ProfilePage:{PostsData:Array<PostType>}
    }
    AddPost:(item:string)=>void
}



function App(props:AppProps) {

    // let [posts,setPosts]=useState<PostType[]>(props.state.ProfilePage.PostsData)
    // console.log(posts)
    // const AddPost=(message:string)=>{
    //     let newPost= {id:v1(), message:message, value: 32 }
    //     setPosts([newPost,...posts])
    //
    // }

    return (
        <BrowserRouter>
            <div className="app-wrapper  ">
                <Header/>
                <Nav/>
                {/* <Content /> */}
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={()=><Dialogs DialogsPage={props.state.DialogsPage}/>} />
                    <Route path='/profile' render={()=><Profile
                        AddPost={props.AddPost}
                        ProfilePage={props.state.ProfilePage}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
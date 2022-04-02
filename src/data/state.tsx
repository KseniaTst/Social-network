import {v1} from "uuid";
import {useState} from "react";
import {PostType} from "../App";

let state={
    DialogsPage: {
        DialogsData:[
            {id:v1(), name:'Ksenia'},
            {id:v1(), name:'Nastya'},
            {id:v1(), name:'Kolya'},
            {id:v1(), name:'Nikita'},
            {id:v1(), name:'Ruslan'}
        ],
        MessagesData:[
            {id:v1(), title:'Hi'},
            {id:v1(), title:'How are you'},
            {id:v1(), title:'It is nice to meet you'},
            {id:v1(), title:'Yo'},
            {id:v1(), title:'Hello world'}
        ],
    },
    ProfilePage:{
        PostsData:[
            {id:v1(), message:'Hello world!',value:20},
            {id:v1(), message:'It is my first message', value: 15},
        ]
    }
}
export const AddPost =(item:string)=>{
    let newp={
        id:v1(),
        message:item,
        value:0
    }
    state.ProfilePage.PostsData.push(newp)
}
export default state


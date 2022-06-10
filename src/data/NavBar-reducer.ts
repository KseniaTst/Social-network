import {ActionTypes, NavBarType} from "./store";
import {v1} from "uuid";

let initialState={
    NavBarData: [
        {id:v1(),ref:'/profile',  title: 'Profile'},
        {id:v1(),ref:'/dialogs', title: 'Messages'},
        {id:v1(), ref:'/news', title: 'News'},
        {id:v1(), ref:'/music', title: 'Music'},
        {id:v1(),ref:'/users', title: 'Users'},
        {id:v1(),ref:'/settings', title: 'Settings'},
    ]
}

export const NavBarReducer=(state:NavBarType= initialState,action:ActionTypes):NavBarType=>{
    return state
}

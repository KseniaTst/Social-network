import {ActionTypes} from "./store";
import {Dispatch} from "redux";
import {AuthAPI} from "../API/api";

export type DataType={
    id:number
    email:string
    login:string
}
export type SetUserDataAT={
    type: 'SET-USER-DATA'
    data:DataType
}
export type SetLoginedUserAT={
    type: 'SET-LOGINED-USER-PHOTO'
    userPhoto:string
}

type InitialStateType={
    data: {
        id: number|null,
        email: string|null,
        login: string|null
    }
    isAuth:boolean
    loginedUserPhoto:string
}

let initialState:InitialStateType={
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth:false,
    loginedUserPhoto:''
}

export const AuthReducer=(state:InitialStateType= initialState,action:ActionTypes):InitialStateType=>{
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, data:{...action.data}, isAuth:true}
        case 'SET-LOGINED-USER-PHOTO':
            debugger
            return {...state, loginedUserPhoto:action.userPhoto}
        default:
            return state
    }
}

export const SetUserDataAC=(data:DataType):SetUserDataAT=>({type:'SET-USER-DATA',data})
export const SetLoginedUserPhotoAC=(userPhoto:string):SetLoginedUserAT=>({type:'SET-LOGINED-USER-PHOTO',userPhoto})

export const LoginUserTC=()=>(dispatch:Dispatch)=>{
    AuthAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch( SetUserDataAC(response.data.data))
                let userId = response.data.data.id
                AuthAPI.authuser(userId)
                    .then(res => {
                        let promise = res.data.photos.small
                        dispatch(SetLoginedUserPhotoAC(promise))
                    })
            }
        })
}
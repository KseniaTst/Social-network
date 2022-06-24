import {ActionTypes} from "./store";
import {Dispatch} from "redux";
import {AuthAPI, LoginAPI, ProfileAPI} from "../API/api";
import {ThunkDispatch} from "redux-thunk";

export type DataType={
    id:number
    email:string
    login:string
}|null
export type SetUserDataAT={
    type: 'SET-USER-DATA'
    data:DataType
}
export type SetLoginedUserAT={
    type: 'SET-LOGINED-USER-PHOTO'
    userPhoto:string
}
export type SetNewUserDataAT=ReturnType<typeof SetNewUserDataAC>
export type LogoutAT=ReturnType<typeof LogoutUserAC>

type InitialStateType={
    data: {
        id: number|null,
        email: string|null,
        login: string|null
    }
    isAuth:boolean|null
    loginedUserPhoto:string
}

let initialState:InitialStateType={
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth:null,
    loginedUserPhoto:''
}

export const AuthReducer=(state:InitialStateType= initialState,action:ActionTypes):InitialStateType=>{
    switch (action.type) {
        case 'SET-USER-DATA':
            // @ts-ignore
            return {...state, data:{...action.data}, isAuth:true}
        case 'SET-LOGINED-USER-PHOTO':
            return {...state, loginedUserPhoto:action.userPhoto}
        case 'SET-NEW-USER-DATA':
            return {...state, data: {...state.data, id:action.userId, login:action.login}}
        case 'LOGOUT':
            // @ts-ignore
            return {...state, data:{...action.data},isAuth:false}
        default:
            return state
    }
}

export const SetUserDataAC=(data:DataType):SetUserDataAT=>({type:'SET-USER-DATA',data})
export const SetLoginedUserPhotoAC=(userPhoto:string):SetLoginedUserAT=>({type:'SET-LOGINED-USER-PHOTO',userPhoto})
export const SetNewUserDataAC=(userId:number, login:string, isAuth:boolean)=>({type:'SET-NEW-USER-DATA', userId, login,isAuth})as const
export const LogoutUserAC=(data:DataType)=>({type:'LOGOUT', data})as const

export const LoginUserTC=()=>(dispatch:Dispatch)=>{
   return  AuthAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch( SetUserDataAC(response.data.data))
                let userId = response.data.data.id
                ProfileAPI.getProfile(userId)
                    .then(res => {
                        let promise = res.data.photos.small
                        dispatch(SetLoginedUserPhotoAC(promise))
                    })
            }
        })
}
export const NewLoginUserTC=(login:string,password:string,rememberMe:boolean)=>(dispatch:ThunkDispatch<any, any, any>)=>{
    LoginAPI.login(login,password,rememberMe)
        .then(res=>{
            if(res.data.resultCode===0){
                dispatch(LoginUserTC())
            }
        })
}
export const LogoutTC=()=>(dispatch:Dispatch)=>{
    LoginAPI.logout()
        .then(res=>{
            if(res.data.resultCode===0){
                dispatch(LogoutUserAC(res.data.data))
            }
        })
}
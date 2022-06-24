import "./Header.css"
import {Header} from "./Header";
import {memo, useEffect} from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../../data/Store-Redux";
import {DataType, LoginUserTC, LogoutTC, SetUserDataAC} from "../../data/auth-reducer";
import {useAppDispatch} from "../../data/Profile-reducer";

type PropsType={
    isAuth:boolean|null
    login:string|null
    userPhoto:string
    SetUserData: (data: DataType) => void
    LogoutTC:()=>void
}


export const HeaderAPI = memo((props: PropsType) => {
const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(LoginUserTC())

    },[dispatch, props.isAuth])
    return (
        <Header isAuth={props.isAuth} login={props.login} userPhoto={props.userPhoto} logout={props.LogoutTC}/>
    )
})
const mapStateToprops= (state:RootStoreType)=>({
    isAuth:state.AuthUser.isAuth,
    login:state.AuthUser.data.login,
    userPhoto: state.AuthUser.loginedUserPhoto
})

export const HeaderContainer= connect(mapStateToprops, {SetUserData:SetUserDataAC,LogoutTC})(HeaderAPI)
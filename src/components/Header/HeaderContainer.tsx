import "./Header.css"
import {Header} from "./Header";
import {useEffect} from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../../data/Store-Redux";
import {DataType, LoginUserTC,SetUserDataAC} from "../../data/auth-reducer";
import {useAppDispatch} from "../../data/Profile-reducer";

type PropsType={
    isAuth:boolean
    login:string|null
    userPhoto:string
    SetUserData: (data: DataType) => void
}

const settings = {
    withCredentials: true
}

export const HeaderAPI = (props: PropsType) => {
const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(LoginUserTC())
    })
    return (
        <Header isAuth={props.isAuth} login={props.login} userPhoto={props.userPhoto}/>
    )
}
const mapStateToprops= (state:RootStoreType)=>({
    isAuth:state.AuthUser.isAuth,
    login:state.AuthUser.data.login,
    userPhoto: state.AuthUser.loginedUserPhoto
})

export const HeaderContainer= connect(mapStateToprops, {SetUserData:SetUserDataAC})(HeaderAPI)
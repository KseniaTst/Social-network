import { NavLink } from "react-router-dom"
import "./Header.css"
import {memo} from "react";
import UserPhoto from '../../assets/photos/ProfileUserPhoto.png'

type HeaderPropsType={
    isAuth:boolean|null
    login:string|null
    userPhoto:string
    logout:()=>void
}

export const Header= memo(function  (props:HeaderPropsType) {

    const logoutHandler=()=>{
        props.logout()
    }

    return (

        <header className="header">
            <img src="https://apkbigs.com/media/2021/08/_3/800x600/dolphin-emulator-apk_fc1ce.jpg" />
            <div className={'loginBlock'}>
                {props.userPhoto? <img src={props.userPhoto}/>: <img src={UserPhoto}/>}
                {props.isAuth?
                    <div className={"Login"}>
                        {props.login}
                        <NavLink to={'/login'} onClick={logoutHandler}>Logout</NavLink>
                    </div>
                    : <NavLink to={'/login'} >Login</NavLink>}

            </div>
        </header>
    )
})
import { NavLink } from "react-router-dom"
import "./Header.css"

type HeaderPropsType={
    isAuth:boolean
    login:string|null
    userPhoto:string
}

export const Header = (props:HeaderPropsType) => {
    return (

        <header className="header">
            <img src="https://apkbigs.com/media/2021/08/_3/800x600/dolphin-emulator-apk_fc1ce.jpg" />
            <div className={'loginBlock'}>
                <img src={props.userPhoto}/>
                {props.isAuth? props.login: <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
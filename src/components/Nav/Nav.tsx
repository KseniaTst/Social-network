import { NavLink } from "react-router-dom"
import clN from "./Nav.module.css"
export const Nav = () => {
    return (
        <nav className={clN.nav}>
                <div className={clN.item}>
                    <NavLink to='/profile'> Profile</NavLink>
                </div>
                <div className={clN.item}>
                    <a href='/dialogs'>Messages</a>
                </div>
                <div className={clN.item}>
                    <a href='/news'>News</a>
                </div>
                <div className={clN.item}>
                    <a href='music'>Music</a>
                </div>
                <div className={`${clN.item} ${clN.active}`} >
                    <a href='settings'>Settings</a>
                </div>
            </nav>
    )
}
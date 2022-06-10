import { NavLink } from "react-router-dom"
import clN from "./Nav.module.css"
import store from "../../data/Store-Redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FeedIcon from '@mui/icons-material/Feed';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';



export const NavBar = () => {
    return (

        <nav className={clN.nav}>
            <div >
                <div className={clN.imges}><AccountCircleIcon fontSize={"small"}/></div>
                <div className={clN.imges}><ChatBubbleOutlineIcon fontSize={"small"}/></div>
                <div className={clN.imges}><FeedIcon fontSize={"small"}/></div>
                <div className={clN.imges}><AudiotrackIcon fontSize={"small"}/></div>
                <div className={clN.imges}><PeopleAltIcon fontSize={"small"}/></div>
                <div className={clN.imges}><SettingsIcon fontSize={"small"}/></div>

            </div>
            <div>
                {

                    store.getState().NavBar.NavBarData.map(el => {
                        return (
                            <div className={clN.item} key={el.id}>
                                <NavLink id={el.id} to={el.ref}>{el.title} </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </nav>

    )
}
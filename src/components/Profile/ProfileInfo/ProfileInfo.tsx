
// @ts-ignore
import userPhoto from "../../../assets/photos/ProfileUserPhoto.png";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../data/Profile-reducer";
import {Button} from "@mui/material";
import {useState} from "react";

type ProfileInfoType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    debugger
    let [showInform, setShowInform] = useState(false)
    let [showCont, setShowCont] = useState(false)
    let [lookForJob, setlookForJob] = useState(false)
    let [fullName, setFullName] = useState(false)

    const onShowInfClick = () => {
        setShowInform(!showInform)
    }
    const onShowCont = () => {
        setShowCont(!showCont)
        setlookForJob(false)
        setFullName(false)
    }
    const onLookJob = () => {
        setlookForJob(!lookForJob)
        setShowCont(false)
        setFullName(false)
    }
    const onFullName = () => {
        setFullName(!fullName)
        setShowCont(false)
        setlookForJob(false)
    }

    return (
        <div className={s.content}>
            <div>
                <img className={s.img}
                     src={props.profile.photos.large ? props.profile.photos.large : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"}/>
            </div>
            <div className={s.description}>
                <div className={s.photoStatus}>
                    <div className={s.userPhotodiv}>
                        <img className={s.userPhoto}
                             src={props.profile.photos.small ? props.profile.photos.small : userPhoto}/>
                    </div>
                    <div><span className={s.status}>{props.profile.aboutMe}</span>
                    </div>
                </div>
                <hr/>
                <div>
                    <Button style={{color: 'black'}} onClick={onShowInfClick}>Information</Button>
                </div>
                {showInform ?
                    <div className={s.infomationContainer}>
                        <div>
                            <div onClick={onShowCont}>contacts</div>
                            <div onClick={onLookJob}>lookingForAJob</div>
                            <div onClick={onFullName}>fullName</div>
                        </div>
                        <hr/>
                        {showCont ? <div>
                            <div>{props.profile.contacts.vk}</div>
                            <div>{props.profile.contacts.youtube}</div>
                            <div>{props.profile.contacts.github}</div>
                            <div>{props.profile.contacts.instagram}</div>
                        </div> : ''}
                        {lookForJob ? <div>{props.profile.lookingForAJobDescription}</div> : ''}
                        {fullName ? <div>{props.profile.fullName}</div> : ''}
                    </div> : ''}



            </div>
        </div>
    )
}
// props.profile.photos.small? props.profile.photos.small
import userPhoto from "../../../assets/photos/ProfileUserPhoto.png";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../data/Profile-reducer";
import {StatusProfile} from "./StatusProfile";
import {Information} from "./Information";
import {ChangeEvent} from "react";
import {DownloadFile} from "./DownloadFile/DonwloadFile";


type ProfileInfoType = {
    profile: ProfileType
    updateStatus:(status:string)=>void
    status:string
    isOwner:boolean
    setNewPhoto:(smallPhoto:any)=>void
}

export const ProfileInfo = (props: ProfileInfoType) => {

const onAddSmallPhotoHandler=(e:ChangeEvent<HTMLInputElement>)=>{

    if (e.target.files) props.setNewPhoto(e.target.files[0])


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
                    <StatusProfile status={props.status} updateStatus={props.updateStatus} isOwn={props.isOwner}/>
                    {props.isOwner &&<input type={'file'} onChange={onAddSmallPhotoHandler}/>}
                    <DownloadFile/>
                </div>
                <hr/>
                <Information contacts={props.profile.contacts} lookingForAJob={props.profile.lookingForAJob}
                             lookingForAJobDescription={props.profile.lookingForAJobDescription}
                             fullName={props.profile.fullName}/>



            </div>
        </div>
    )
}

import {Button} from "@mui/material";
import s from "./ProfileInfo.module.css";
import {useState} from "react";

type PropsType = {
    contacts: { facebook: string, website: null, vk: string, twitter: string, instagram: string, youtube: null, github: string, mainLink: null },
    lookingForAJob: boolean,
    lookingForAJobDescription: string, fullName: string
}

export const Information=(props:PropsType)=>{

    let [showInform, setShowInform] = useState<boolean>(false)
    let [showCont, setShowCont] = useState<boolean>(false)
    let [lookForJob, setlookForJob] = useState<boolean>(false)
    let [fullName, setFullName] = useState<boolean>(false)

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
        <div>
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
                        <div>{props.contacts.vk}</div>
                        <div>{props.contacts.youtube}</div>
                        <div>{props.contacts.github}</div>
                        <div>{props.contacts.instagram}</div>
                    </div> : ''}
                    {lookForJob ? <div>{props.lookingForAJobDescription}</div> : ''}
                    {fullName ? <div>{props.fullName}</div> : ''}
                </div> : ''}
        </div>
    )
}
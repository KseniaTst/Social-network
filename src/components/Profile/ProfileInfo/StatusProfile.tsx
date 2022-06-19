import {TextField} from "@mui/material";
import s from "./ProfileInfo.module.css";
import {ChangeEvent, useState} from "react";

type PropsType={
    status:string
    updateStatus:(status:string)=>void
}

export const StatusProfile=(props:PropsType)=>{

    let [editMode,setEditMode]=useState<boolean>(false)
    let [newStatus,setNewStatus]=useState<string>(props.status)

    const ActivateEditMode=()=>{
        setEditMode(true)
    }
    const DeActivateEditMode=()=>{
        setEditMode(false)
        props.updateStatus(newStatus)
    }

const onChange=(e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setNewStatus(e.currentTarget.value)
}

    return(
        <div onDoubleClick={ActivateEditMode} onBlur={DeActivateEditMode} >
            {editMode?
                <TextField onChange={onChange} value={newStatus} autoFocus className={s.status} variant={'standard'}/>
                : <span  className={s.status}>{props.status}</span>}

        </div>
    )
}

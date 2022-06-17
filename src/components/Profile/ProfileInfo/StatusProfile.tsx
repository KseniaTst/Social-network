import {TextField} from "@mui/material";
import s from "./ProfileInfo.module.css";
import {useState} from "react";

type PropsType={
    aboutMe:string
}

export const StatusProfile=(props:PropsType)=>{

    let [editMode,setEditMode]=useState<boolean>(false)

    const ActivateEditMose=()=>{
        setEditMode(true)
    }
    const DeActivateEditMose=()=>{
        setEditMode(false)
    }


    return(
        <div onDoubleClick={ActivateEditMose} onBlur={DeActivateEditMose} >
            {editMode?
                <TextField autoFocus className={s.status} variant={'standard'}/>
                : <span  className={s.status}>{props.aboutMe}</span>}

        </div>
    )
}

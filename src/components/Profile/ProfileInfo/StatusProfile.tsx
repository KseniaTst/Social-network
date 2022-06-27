import s from "./ProfileInfo.module.css";
import { useState} from "react";
import {AddStatusReduxForm, FormAddStatusDataType} from "./StatusForm";

type PropsType={
    status:string
    updateStatus:(status:string)=>void
}

export const StatusProfile=(props:PropsType)=>{

    let [editMode,setEditMode]=useState<boolean>(false)

    const ActivateEditMode=()=>{
        setEditMode(true)
    }
    const onSubmit=(formData:FormAddStatusDataType)=>{
        debugger
        props.updateStatus(formData.status)
        setEditMode(false)
    }

    return (
        <div onDoubleClick={ActivateEditMode} className={s.statusContainer}>
                {editMode ?
                    <AddStatusReduxForm onSubmit={onSubmit}/>

                    : <span className={s.status}>{props.status}</span>}

        </div>
    )
}

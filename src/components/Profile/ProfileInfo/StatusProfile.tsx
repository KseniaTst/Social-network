import s from "./ProfileInfo.module.css";
import {memo, useState} from "react";
import {AddStatusReduxForm, FormAddStatusDataType} from "./StatusForm";

type PropsType={
    status:string
    updateStatus:(status:string)=>void
}

export const StatusProfile=memo((props:PropsType)=>{

    let [editMode,setEditMode]=useState<boolean>(false)

    const ActivateEditMode=()=>{
        setEditMode(true)
    }
    const onSubmit=(formData:FormAddStatusDataType)=>{
        props.updateStatus(formData.status)
        setEditMode(false)
    }

    return (
        <div onDoubleClick={ActivateEditMode} className={s.statusContainer}>
           <div style={{ marginTop:'15px'}}> Status: </div>
                {editMode ?
                    <AddStatusReduxForm onSubmit={onSubmit}/>

                    : <span className={s.status}>{props.status}</span>}

        </div>
    )
})

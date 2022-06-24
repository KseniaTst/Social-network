import {Button} from "@mui/material";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {StatusInput} from "./StatusInput";
import s from "./ProfileInfo.module.css";
import {MaxLengthCreator} from "../../../utils/validators/FormValidators";


export type FormAddStatusDataType={
    status:string
}
let maxLength30=MaxLengthCreator(30)

const StatusForm: React.FC<InjectedFormProps<FormAddStatusDataType>> =(props)=>{
    return <form onSubmit={props.handleSubmit} className={s.form}>
        <Field name={'status'} component={StatusInput}  autoFocus validate={[maxLength30]}/>
        <Button size={'small'} type={'submit'} variant={'outlined'}>Save</Button>
    </form>
}
export const AddStatusReduxForm=reduxForm<FormAddStatusDataType>({form:'add-status'})(StatusForm)
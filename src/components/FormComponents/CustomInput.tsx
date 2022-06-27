import {TextField} from "@mui/material";
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from './CustomInput.module.css'


export const CustomInput = ( props:any) => {

    const {meta,input,...rest} = props

    return <div className={s.inputContainer}>
        <div>
            {meta.touched && meta.error? <TextField error {...input}{...rest} label={meta.error} />: <TextField {...input}{...rest} />}
        </div>
    </div>

}
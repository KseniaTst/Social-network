import {TextField} from "@mui/material";
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type meta = {
    touched: boolean
    error: string
    warning: string
}
export const InputMessage = ( props:any) => {

    const {meta,input,...rest} = props

    return <div>
        <div>
            <TextField {...input}{...rest}/>
        </div>
        {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>

}
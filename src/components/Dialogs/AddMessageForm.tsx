import {Button} from "@mui/material";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormAddMessageDataType} from "./Dialogs";
import React from "react";
import {InputMessage} from "./IptutMessage";
import {MaxLengthCreator, RequiredField} from "../../utils/validators/FormValidators";

let maxLength10=MaxLengthCreator(10)


 const AddMessageForm: React.FC<InjectedFormProps<FormAddMessageDataType>> =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'new message'} validate={[RequiredField,maxLength10]}
                   component={InputMessage} name={'message'}/>
            <Button size={"small"} variant={"outlined"} type={'submit'}>add message</Button>
        </form>
    )
}

export const AddMessageReduxForm=reduxForm<FormAddMessageDataType>({form:'add-message'})(AddMessageForm)
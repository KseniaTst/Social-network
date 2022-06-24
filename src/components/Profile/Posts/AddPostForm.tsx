import {Button} from "@mui/material";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {RequiredField} from "../../../utils/validators/FormValidators";
import {InputPost} from "./InputPost";

export type FormAddPostDataType={
    post:string
}

 const AddPostForm: React.FC<InjectedFormProps<FormAddPostDataType>> =(props)=>{
    return(
        <form onSubmit={props.handleSubmit} >
            <Field placeholder={'new post'} name={'post'} component={InputPost}
            validate={[RequiredField]}/>

            <Button style={{margin:'20px'}} variant={'outlined'} type={'submit'}>add post</Button>
        </form>
    )
}
export const AddPostReduxForm= reduxForm<FormAddPostDataType>({form: 'add-post'})(AddPostForm)

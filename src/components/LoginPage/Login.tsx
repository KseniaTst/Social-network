import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {NewLoginUserTC} from "../../data/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {RootStoreType} from "../../data/Store-Redux";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'
import {MinLengthCreator, RequiredField} from "../../utils/validators/FormValidators";
import {CustomInput} from "../FormComponents/CustomInput";
import {Button, Checkbox, FormControlLabel} from "@mui/material";

type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
type PropsType={
    isAuth:boolean
    NewLoginUserTC:(login: string, password: string, rememberMe: boolean)=>void
}

let MinSymbolsLength8=MinLengthCreator(4)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={CustomInput} validate={[RequiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={CustomInput} type={'password'} validate={[RequiredField, MinSymbolsLength8]}/>
            </div>
            <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            </div>
            <div>
                <Button variant={"outlined"} type={"submit"}>Login</Button>
            </div>
        </form>
    )
}
const LoginReduxForm=reduxForm<FormDataType>({form:'login'})(LoginForm)

 const LoginPage = (props: PropsType) => {

    const onSubmit=(formData:FormDataType)=>{
        props.NewLoginUserTC(formData.login,formData.password,formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.loginPageContainer}>
            <h1>Please, login first</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps=(state:RootStoreType)=>({
    isAuth:state.AuthUser.isAuth
})

export default compose<React.ComponentType>(connect (mapStateToProps, {NewLoginUserTC:NewLoginUserTC} ))(LoginPage)
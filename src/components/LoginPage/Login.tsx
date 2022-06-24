import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {NewLoginUserTC} from "../../data/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {RootStoreType} from "../../data/Store-Redux";
import {Redirect} from "react-router-dom";

type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
type PropsType={
    isAuth:boolean
    NewLoginUserTC:(login: string, password: string, rememberMe: boolean)=>void
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={'input'}/>
            </div>
            <div>
                <button type={"submit"}>Login</button>
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
        <div>
            <h1> LOGIN FIRST</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps=(state:RootStoreType)=>({
    isAuth:state.AuthUser.isAuth
})

export default compose<React.ComponentType>(connect (mapStateToProps, {NewLoginUserTC:NewLoginUserTC} ))(LoginPage)